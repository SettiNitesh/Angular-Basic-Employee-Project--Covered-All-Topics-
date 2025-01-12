import {
  AsyncPipe,
  CommonModule,
  DatePipe,
  JsonPipe,
  UpperCasePipe,
} from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
import { Client } from '../../model/class/Client';
import { Alert } from '../../model/interface/alert';
import { AlertComponent } from '../../shared/alert/alert.component';
import { IAPIResponse } from './../../model/interface/role';
import { ClientService } from './../../service/client.service';

@Component({
  selector: 'app-client',
  imports: [
    CommonModule,
    FormsModule,
    UpperCasePipe,
    DatePipe,
    AsyncPipe,
    JsonPipe,
    AlertComponent,
  ],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css',
})
export class ClientComponent implements OnInit {
  Alert = Alert;

  currentDate: Date = new Date();

  clientObj: Client = new Client();

  clientService = inject(ClientService);

  clientList: Client[] = [];

  usersList$: Observable<any> = new Observable<any>();

  ngOnInit(): void {
    this.loadAllClients();
    this.usersList$ = this.clientService.getAllUsers();
  }

  loadAllClients(): void {
    this.clientService.getAllClients().subscribe({
      next: (res: IAPIResponse) => {
        this.clientList = res.data;
      },
      error: (err: any) => {
        console.log(err);
      },
    });
  }

  onSaveClient() {
    debugger;
    this.clientService.addUpdateClient(this.clientObj).subscribe({
      next: (res: IAPIResponse) => {
        if (res.result) {
          alert('Client Created Successfully');
          this.loadAllClients();
          this.clientObj = new Client();
        } else {
          alert(res.message);
        }
      },
    });
  }

  onDeleteClient(id: number) {
    debugger;
    const isDelete = confirm('Are you sure want to delete');
    if (isDelete) {
      this.clientService.deleteClientById(id).subscribe({
        next: (res: IAPIResponse) => {
          if (res.result) {
            alert('Client Deleted Successfully');
            this.loadAllClients();
          } else {
            alert(res.message);
          }
        },
      });
    }
  }

  onEditClient(clientObj: Client) {
    this.clientObj = clientObj;
  }

  resetClient() {
    this.clientObj = new Client();
  }
}
