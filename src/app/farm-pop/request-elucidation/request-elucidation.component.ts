import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'request-elucidation-form',
  templateUrl: './request-elucidation.component.html',
  styleUrls: ['./request-elucidation.component.css']
})
export class RequestElucidationComponent implements OnInit {

  paragraphs = null;
  occurrences = [];
  occurrenceTypes = [];
  occurrenceFormBuilder: FormGroup;

  constructor(fb: FormBuilder, private datePipe: DatePipe) {
    this.occurrenceFormBuilder = new FormGroup({
      code: new FormControl(null),
      transaction: new FormControl(null, Validators.minLength(2)),
      occurredAt: new FormControl(null),
    });
  }

  ngOnInit() {
    if(localStorage.occurrences) this.occurrences = JSON.parse(localStorage.occurrences);
    if(localStorage.keepOccurrences) this.occurrenceTypes = JSON.parse(localStorage.keepOccurrences);
  }

  transformDate(date) {
    return this.datePipe.transform(date, 'dd/MM/yyyy');
  }

  registerOccurrence() {
    // TODO validate form
    const occurrence = {code: '', occurredAt: '', transaction: ''};
    occurrence.code = this.occurrenceFormBuilder.controls.code.value;
    occurrence.occurredAt = this.occurrenceFormBuilder.controls.occurredAt.value;
    occurrence.transaction = this.occurrenceFormBuilder.controls.transaction.value;
    this.occurrences.push(occurrence);
    localStorage.occurrences = JSON.stringify(this.occurrences);

    this.occurrenceFormBuilder.controls.code.setValue(null);
    this.occurrenceFormBuilder.controls.occurredAt.setValue(null);
    this.occurrenceFormBuilder.controls.transaction.setValue(null);
  }

  removeOccurrence(id) {
    this.occurrences.splice(id, 1);
    localStorage.occurrences = JSON.stringify(this.occurrences);
  }

  newRequest() {
    localStorage.clear();
    this.occurrences = [];
  }

  generateParagraph() {
    this.paragraphs = {};
    this.paragraphs['byTransaction'] = [];
    this.paragraphs['byOccurrenceType'] = [];
    const tmpByOccurrenceType = {};

    for(const occurrence of this.occurrences) {
      const transaction = occurrence.transaction;
      const occurredAt = occurrence.occurredAt;
      const occurrenceTypeName = this.occurrenceTypes[occurrence.code].name;
      let occurrenceTypeId = parseInt(occurrenceTypeName.substr(0, 2), 10);
      const occurrenceType = occurrenceTypeName.substr(5, occurrenceTypeName.length);

      this.paragraphs['byTransaction'].push(`${transaction} - ${this.transformDate(occurredAt)} - ${occurrenceType};`);

      occurrenceTypeId = occurrenceTypeId-2;
      if(!tmpByOccurrenceType[occurrenceTypeId]) tmpByOccurrenceType[occurrenceTypeId] = {};
      if(tmpByOccurrenceType[occurrenceTypeId][occurredAt]) tmpByOccurrenceType[occurrenceTypeId][occurredAt].push(transaction);
      else tmpByOccurrenceType[occurrenceTypeId][occurredAt] = [transaction];
    }

    window['tmpByOccurrenceType'] = tmpByOccurrenceType;
    Object.keys(tmpByOccurrenceType).forEach(occurrenceTypeId => {
      const occurrenceTypeName = this.occurrenceTypes[occurrenceTypeId].name;
      Object.keys(tmpByOccurrenceType[occurrenceTypeId]).forEach(occurredAt => {
        const transactions = tmpByOccurrenceType[occurrenceTypeId][occurredAt];
        let transactionsStr = '';
        for(const transaction of transactions) transactionsStr += transaction+';';

        const newOccurrenceTypeName = occurrenceTypeName.substr(4, occurrenceTypeName.length);
        this.paragraphs['byOccurrenceType'].push(`${newOccurrenceTypeName} (${this.transformDate(occurredAt)}): ${transactionsStr}`);
      });
    });
  }

}