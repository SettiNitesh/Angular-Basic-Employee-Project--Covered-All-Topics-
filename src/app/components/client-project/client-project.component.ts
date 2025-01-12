import { Component, inject, OnInit, signal } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Client } from '../../model/class/Client';
import { Alert } from '../../model/interface/alert';
import {
  IAPIResponse,
  IClientProject,
  IEmployee,
} from '../../model/interface/role';
import { ClientService } from '../../service/client.service';
import { AlertComponent } from '../../shared/alert/alert.component';

@Component({
  selector: 'app-client-project',
  imports: [ReactiveFormsModule, AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css',
})
export class ClientProjectComponent implements OnInit {
  clientService = inject(ClientService);

  employeeList: IEmployee[] = [];

  clientList: Client[] = [];

  clientProjects = signal<IClientProject[]>([]);

  firstName = signal('Nitesh Setti');

  projectForm: FormGroup = new FormGroup({
    clientProjectId: new FormControl(0),
    projectName: new FormControl('', [
      Validators.required,
      Validators.minLength(5),
    ]),
    startDate: new FormControl(''),
    expectedEndDate: new FormControl(''),
    leadByEmpId: new FormControl(0),
    completedDate: new FormControl(''),
    contactPerson: new FormControl(''),
    contactPersonContactNo: new FormControl(''),
    totalEmpWorking: new FormControl(0),
    projectCost: new FormControl(0),
    projectDetails: new FormControl(''),
    contactPersonEmailId: new FormControl(''),
    clientId: new FormControl(0),
  });

  Alert = Alert;

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllClients();
    this.getAllClientProjects();
  }

  onUpdateName() {
    this.firstName.set('Nitesh Vikram');
  }

  getAllEmployee() {
    this.clientService.getAllEmployee().subscribe({
      next: (result: IAPIResponse) => {
        this.employeeList = result.data;
      },
    });
  }

  getAllClients() {
    this.clientService.getAllClients().subscribe({
      next: (result: IAPIResponse) => {
        this.clientList = result.data;
      },
    });
  }

  getAllClientProjects() {
    this.clientService.getAllClientProjects().subscribe({
      next: (result: IAPIResponse) => {
        this.clientProjects.set(result.data);
      },
    });
  }

  onSaveProject(): void {
    const formValue = this.projectForm.value;
    debugger;
    this.clientService.addUpdateProject(formValue).subscribe({
      next: (result: IAPIResponse) => {
        if (result.result) {
          alert('Client-Project Added Successfully');
        } else {
          alert(result.message);
        }
      },
    });
  }
}
