import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {API} from "../../../config/api.config";
import {FarmerModel} from "../../shared/models/farmers/farmer.model";

@Injectable({
  providedIn: 'root'
})
export class FarmersService {

  constructor(private httpClient: HttpClient) { }

  createFarmer(owner: any): Observable<FarmerModel> {
    const url = API.farmers.create;
    return this.httpClient.post<FarmerModel>(url, owner);
  }

  getFarmers(): Observable<FarmerModel[]> {
    const url = API.farmers.getAll;
    return this.httpClient.get<FarmerModel[]>(url);
  }
}
