import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { Constant } from '../constant/Constant';
import { Client } from '../model/class/Client';
import { IAPIResponse } from '../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  constructor(private http: HttpClient) {}

  getAllClients(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT
    );
  }

  getAllEmployee(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_EMP
    );
  }

  getAllClientProjects(): Observable<IAPIResponse> {
    return this.http.get<IAPIResponse>(
      environment.API_URL + Constant.API_METHOD.GET_ALL_CLIENT_PROJ
    );
  }

  getAllUsers() {
    return this.http.get(environment.API_URL_FAKE + Constant.API_METHOD.USERS);
  }

  addUpdateClient(payload: Client): Observable<IAPIResponse> {
    return this.http.post<IAPIResponse>(
      environment.API_URL + Constant.API_METHOD.ADD_UPDATE_CLIENT,
      payload
    );
  }

  addUpdateProject(payload: FormGroup): Observable<IAPIResponse> {
    return this.http.post<IAPIResponse>(
      environment.API_URL + Constant.API_METHOD.ADD_UPDATE_PROJECT,
      payload
    );
  }

  deleteClientById(id: number): Observable<IAPIResponse> {
    return this.http.delete<IAPIResponse>(
      environment.API_URL + Constant.API_METHOD.DELETE_CLIENT_BY_ID(id)
    );
  }
}
