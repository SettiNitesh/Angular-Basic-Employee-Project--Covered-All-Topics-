import { Component, inject, OnInit } from '@angular/core';
import { IAPIResponse, IDesignation } from '../../model/interface/role';
import { MasterService } from '../../service/master.service';

@Component({
  selector: 'app-designation',
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css',
})
export class DesignationComponent implements OnInit {
  masterService = inject(MasterService);

  designationList: IDesignation[] = [];

  isLoading: boolean = true;
  ngOnInit(): void {
    this.masterService.getAllDesignations().subscribe({
      next: (res: IAPIResponse) => {
        this.designationList = res.data;
        this.isLoading = false;
      },
      error: (err) => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
