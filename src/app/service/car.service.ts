import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ICar } from '../model/interface/car';
import { IAPIResponse } from './../model/interface/role';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

  getAllCarRentals(): Observable<ICar[]> {
    return this.http
      .get<IAPIResponse>(environment.API_URL + 'CarRentalApp/GetCars')
      .pipe(
        map((response: IAPIResponse) => {
          return response.data;
        })
      );
  }

  addCar(payload: ICar): Observable<ICar> {
    return this.http
      .post<IAPIResponse>(
        environment.API_URL + 'CarRentalApp/CreateNewCar',
        payload
      )
      .pipe(
        map((response: IAPIResponse) => {
          return response.data;
        })
      );
  }

  updateCar(payload: ICar): Observable<ICar> {
    return this.http
      .put<IAPIResponse>(
        environment.API_URL + 'CarRentalApp/UpdateCar',
        payload
      )
      .pipe(
        map((response: IAPIResponse) => {
          return response.data;
        })
      );
  }

  deleteCarByID(carId: number): Observable<ICar> {
    return this.http
      .delete<IAPIResponse>(
        environment.API_URL + `CarRentalApp/DeleteCarbyCarId?carid=${carId}`
      )
      .pipe(
        map((response: IAPIResponse) => {
          return response.data;
        })
      );
  }
}
