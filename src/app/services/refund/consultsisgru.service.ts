import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GatewayService} from '../gateway.service';
import {LoaderComponent} from '../../components/loader/loader.component';

@Injectable({
  providedIn: 'root'
})
export class ConsultsisgruService extends GatewayService{

  constructor(protected http: HttpClient, protected loader: LoaderComponent) {
    super(http, loader);
    this.app = 'consultSisGRU';
  }

  consultSisGRU(params){
    this.method = 'post';
    this.path = 'encodes';
    this.params = params;
    return this.perform();

  }

}