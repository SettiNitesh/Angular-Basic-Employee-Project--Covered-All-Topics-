import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { DesignationComponent } from '../designation/designation.component';
import { RolesComponent } from '../roles/roles.component';

@Component({
  selector: 'app-master',
  imports: [RolesComponent, DesignationComponent, CommonModule],
  templateUrl: './master.component.html',
  styleUrl: './master.component.css',
})
export class MasterComponent {
  selectedTab: string = 'Roles';

  changeTab(tab: string) {
    this.selectedTab = tab;
  }
}
