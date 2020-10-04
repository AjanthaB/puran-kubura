import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PaddyFieldModel} from '../../shared/models/paddy-fields/paddy-field.model';
import {API} from '../../../config/api.config';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaddyFieldsService {

  constructor(private httpClient: HttpClient) { }

  create(paddyField: PaddyFieldModel): Observable<PaddyFieldModel> {
    const url = API.paddyField.create;
    return this.httpClient.post<PaddyFieldModel>(url, paddyField);
  }

  getAll(): Observable<PaddyFieldModel[]> {
    const url = API.paddyField.create;
    return this.httpClient.get<PaddyFieldModel[]>(url);
  }
}
