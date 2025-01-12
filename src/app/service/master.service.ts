import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAPIResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  constructor(private http: HttpClient) {}

  getAllDesignations(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      'https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation'
    );
  }
}
