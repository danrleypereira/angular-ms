import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {ElucidationService} from '../../../../services/elucidation/elucidation.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { windowToggle } from 'rxjs/operators';
import {Subject} from "rxjs/index";
import {debounceTime} from 'rxjs/operators';

declare var $: any;

export class Occurrence {
  id: number;
  remedy: string;
}

export class Authorization {
  id: number;
  date: Date;
  occurrences: Occurrence[];
}

export class Elucidation {
  nup: string;
  cnpj: string;
  date?: Date;
  _id?: string;
  authorizations: Authorization[];
  csv_authorizations?: any[];
}

@Component({
  selector: 'app-form-elucidation',
  templateUrl: './form-elucidation.component.html',
  styleUrls: ['./form-elucidation.component.scss']
})
export class FormElucidationComponent implements OnInit {

  public filterTransactions: string;
  @ViewChild('t') transactionSelect: ElementRef;

  public activateField: Boolean = false;

  public date: Date;
  public csvTransactions = [];
  public occurrencesTypes = [];
  public successMessage: string;
  public staticAlertClosed = false;
  private _success = new Subject<string>();
  public selectedOccurrence: any;
  public csvSelectedTransaction: object;
  public authorizations: Authorization[] = [];
  public authorization: Authorization;
  public occurrences: Occurrence[];
  public elucidation: Elucidation;
  public paragraph = '';
  public elucidationFormGroup: FormGroup;
  public authorizationFormGroup: FormGroup;
  public currentTransactionID: any;

  public static formattedDate(deformedVal) {
    const datePieces = deformedVal.split('/');

    const day = `0${datePieces[0]}`.slice(-2);
    const month = `0${datePieces[1]}`.slice(-2);
    const year = datePieces[2].split(' ')[0];

    return `${year}-${month}-${day}`;
  }


  constructor(private fb: FormBuilder
              , private elucidationService: ElucidationService
              , private route: ActivatedRoute
              , private router: Router) {
    this.authorizations = [];
    this.occurrences = [];
    this.elucidationService.getOccurrencesTypes().then( (data: any) => {
      this.occurrencesTypes = data.sort((a, b) => a.id - b.id);
    });

    this.elucidation = new Elucidation();

    this.elucidationFormGroup = new FormGroup({
      nup: new FormControl(null, Validators.minLength(2)),
      cnpj: new FormControl(null, Validators.minLength(2)),
      date: new FormControl(null),
      authorizations: new FormControl(null),
      csv: new FormControl(null, null)
    });

    this.authorizationFormGroup = new FormGroup({
      authorizationCode: new FormControl(null, Validators.minLength(2)),
      remedyName: new FormControl(null, Validators.minLength(2)),
      authorizedAt: new FormControl(null, Validators.pattern(/^\d{1,2}\/\d{1,2}\/\d{4}$/)),
      occurrences: new FormControl(null, null),
      csvTransaction: new FormControl(null, null)
    });

    this.route.paramMap.subscribe( paramMap => {
      if (paramMap.get('id') == 'null') {
        this.clearInputs();
      } else {
        this.elucidationService.getElucidationBody({_id: paramMap.get('id')}).then((data: any) => {
          this.elucidation = data.elucidation;
          this.paragraph = data.body.map(line => line.replace(/\(([0-9]{4})-([0-9]{2})-([0-9]{2})\)/g,'($3/$2/$1)')).filter((line, i, data) => line !== data[i+1]);
          this.occurrences = data.elucidation.authorizations[0].occurrences;
          this.authorizationFormGroup.controls['authorizedAt'].setValue(this.elucidation.authorizations[0].date);
          this.authorizationFormGroup.controls['authorizationCode'].setValue(this.elucidation.authorizations[0].id);
        });
      }
    });

    this.prepareTransactions();
    
  }

  ngOnInit() {
    setTimeout(() => this.staticAlertClosed = true, 20000);
    this._success.subscribe((message) => this.successMessage = message);
    this._success.pipe(
      debounceTime(5000)
    ).subscribe(() => this.successMessage = null);
    this.elucidation.csv_authorizations = window['loadedCSV'];
  }

  prepareTransactions(){

    if (window.localStorage.getItem('loadedCSV')) {
      this.csvTransactions = [];
      let iter: any, ater: any;
      let canAdd: boolean = true;
      for(iter of JSON.parse(window.localStorage.getItem('loadedCSV'))) {
        for(ater of JSON.parse(window.localStorage.getItem("registredElucidations"))){
          if(iter[0] == ater.authorizations[0].id) canAdd = false;
        }
        if(canAdd) this.csvTransactions.push(iter);
        canAdd = true;
      }
    }
    return this.csvTransactions;
  }

  remove(authorizationId) {
    this.authorizations.splice(authorizationId, 1);
  }

  edit(authorizationId) {
    this.authorization = this.authorizations[authorizationId];
    this.authorizationFormGroup.controls['authorizationCode'].setValue(this.authorization.id);
    this.authorizationFormGroup.controls['authorizedAt'].setValue(this.authorization.date);
    this.occurrences = this.authorization.occurrences;
    $('#authorization')[0].scrollIntoView();
  }

  _validateForm() {
    this.elucidation = {
      _id: this.elucidation._id,
      nup: this.elucidationFormGroup.value.nup || this.elucidation.nup,
      cnpj: this.elucidationFormGroup.value.cnpj || this.elucidation.cnpj,
      date: this.elucidationFormGroup.value.date || this.elucidation.date,
      authorizations: this.authorizations,
      csv_authorizations: this.elucidation.csv_authorizations
    };

    return !this.elucidation.nup || !this.elucidation.cnpj ;
  }

  add() {
    let alreadyPersisted = false;
    const occurrence = {
      id: this.authorizationFormGroup.value.occurrences,
      remedy: this.authorizationFormGroup.value.remedyName,
    } as Occurrence;

    for (const c in this.occurrences) {
      const iOccurrence = this.occurrences[c];
      if (iOccurrence.id === occurrence.id) {
        alreadyPersisted = true;
        this.occurrences[c] = occurrence;
      }
    }
    if (!alreadyPersisted) this.occurrences.push(occurrence);

    alreadyPersisted = false;
    const authorization = this.authorization = {
      id: this.authorizationFormGroup.value.authorizationCode,
      date: this.authorizationFormGroup.value.authorizedAt,
      occurrences: this.occurrences
    } as Authorization;

    // tslint:disable-next-line:forin
    for (const i in this.authorizations) {
      const iAuthorization = this.authorizations[i];
      if (iAuthorization.id === authorization.id) {
        alreadyPersisted = true;
        this.authorizations[i] = authorization;
      }
    }

    // @ts-ignore
    // $('#occurrences option:selected').prop('selected', false);
    if (!alreadyPersisted) this.authorizations.push(authorization);
  }

  removeOccurence(id) {
    this.occurrences.splice(id, 1);
    if (!this.occurrences.length) {
      this.remove(this.authorization.id);
    }
  }

  processRegistredList(elucidation){
    this.csvTransactions = [];

    let registred;
    registred = JSON.parse(window.localStorage.getItem("registredElucidations"))
    console.log("reg: ", registred);
    registred.push(elucidation);
    window.localStorage.setItem("registredElucidations", JSON.stringify(registred));
  }

  updateRemedyField() {
    const csvTransactionID = this.currentTransactionID
    if (!csvTransactionID) return;
    const csvTransaction = this.csvTransactions[csvTransactionID];
    console.log(this.checkShowRemedyField());
    
    if(this.checkShowRemedyField()) {
      this.authorizationFormGroup.controls['remedyName'].setValue(csvTransaction[5]);
    }
  }

  save() {
    let aux: Authorization = new Authorization();
    aux = {
      id: this.authorizationFormGroup.value.authorizationCode,
      date: this.authorizationFormGroup.value.authorizedAt,
      occurrences: this.occurrences
    }as Authorization

    if(this.elucidation.authorizations.length == 0) this.elucidation.authorizations.push(aux);
    else console.log("implement this case.");
    if(!this.elucidation.date) this.elucidation.date = this.authorizationFormGroup.value.authorizedAt;
    if (!this.elucidation._id) {
      this.elucidationService.insertElucidation(this.elucidation)
        .then((data:Elucidation) => {
          this.processRegistredList(data);
          this.elucidation = data;
          this.router.navigate(['/popular-pharmacy/notification/form/' + this.elucidation._id ]);
          this._success.next("Cadastro feito com sucesso!");
          // setTimeout(() => alert('Solicitação registrada com sucesso!'));
        });
    } else {
      this.elucidationService.updateElucidation(this.elucidation)
        .then((data:Elucidation) => {
          this.processRegistredList(data);
          this.elucidation = data;
          this.router.navigate(['/popular-pharmacy/notification/form/' + this.elucidation._id ]);
          this._success.next("Atualização feito com sucesso!");
          // setTimeout(() => alert('Solicitação atualizada com sucesso!'));
        });
    }
    // this.authorizationFormGroup.controls['authorizationCode'].setValue('');
    this.currentTransactionID = undefined;
  }

  checkShowRemedyField() {
    const aux: boolean = (this.selectedOccurrence != undefined && (this.selectedOccurrence == 15 || this.selectedOccurrence == 9));
    console.log(aux);
    return (aux);
  }

  clearSelect($event) {
    this.transactionSelect.nativeElement.selectedIndex = 0;
  }

  clearInputs() {
    this.elucidation._id = undefined;
    this.authorizations = [];
    this.elucidationFormGroup.controls['nup'].setValue('');
    this.elucidationFormGroup.controls['cnpj'].setValue('');
    this.elucidationFormGroup.controls['date'].setValue('');
    this.authorizationFormGroup.controls['authorizedAt'].setValue('');
    this.authorizationFormGroup.controls['authorizationCode'].setValue('');
    this.paragraph = undefined;
    this.prepareTransactions();
  }

  selectTransaction(csvTransactionID) {
    if (!csvTransactionID) return;
    this.currentTransactionID = csvTransactionID;
    const csvTransaction = this.csvTransactions[csvTransactionID];
    this.elucidationFormGroup.controls['cnpj'].setValue(csvTransaction[1]);
    this.authorizationFormGroup.controls['authorizationCode'].setValue(csvTransaction[0]);
    // TO-DO: Fazer condicional para escrever o nome do remédio apenas quando estiver nas lista de permissões
    if(this.checkShowRemedyField()) {
      this.authorizationFormGroup.controls['remedyName'].setValue(csvTransaction[5]);
    }
    this.authorizationFormGroup.controls['authorizedAt'].setValue(FormElucidationComponent.formattedDate(csvTransaction[3]));
    if (this.authorization && csvTransaction[0] !== this.authorization.id) this.occurrences = [];
    const authorization = this.authorization = {
      id: csvTransaction[0],
      date: new Date(csvTransaction[3]),
      occurrences: this.occurrences
    } as Authorization;
  }
}
