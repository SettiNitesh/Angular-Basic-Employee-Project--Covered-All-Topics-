import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IRole } from '../../model/interface/role';

@Component({
  selector: 'app-roles',
  imports: [FormsModule, CommonModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent implements OnInit {
  http = inject(HttpClient);

  roles: IRole[] = [];
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    this.http
      .get('https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllRoles')
      .subscribe((res: any) => {
        this.roles = res.data;
      });
  }
}
