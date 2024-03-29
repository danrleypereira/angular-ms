import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router, NavigationEnd } from '@angular/router';
import { AnalyticService } from '../../../../../services/analytic/analytic.service';


@Component({
  selector: 'medication-details',
  templateUrl: './medication-details.component.html',
  styleUrls: ['./medication-details.component.scss']
})

export class MedicationDetailsComponent implements OnInit {

  headerData: Object[];
  analyticData: Object[];
  tableTitle: String;
  tableOption: String;
  tableAggregator: String;
  tableDetail: String;
  tableView: number = 0;

  translate_coords = {
    basic: "Básica",
    strategic: "Estratégica",
    specialized: "Especializada",
    farmpop: "Farmácia Popular"
  }

  constructor(
    private _Activatedroute: ActivatedRoute,
    private analyticService: AnalyticService,
    private router: Router,
  ) { 
    
  }

  ngOnInit() {
    this._Activatedroute.paramMap.subscribe((params : ParamMap)=> { 
      this.tableOption = params.get('coord');
      this.tableView = Number(params.get('view'));
      this.tableAggregator = params.get('aggreg');
      this.tableDetail = params.get('detail');      
      this.headerData = [];
      this.analyticData = [];
      this.updateData();
    });
  }

  updateData() {
    this.analyticService.getTable(this.tableOption, this.tableView, this.tableAggregator, this.tableDetail, "").then((data: any) => {
      this.headerData = Object.keys(data[0]);
      this.analyticData = data;
      console.log(Object.keys(data[0]), data);
    });
  }

}
