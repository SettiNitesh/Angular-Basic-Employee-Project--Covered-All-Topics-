import { Component, inject, OnInit, ViewChild } from '@angular/core';
import {
  MatBottomSheet,
  MatBottomSheetModule,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { ICar } from '../../model/interface/car';
import { IDialog } from '../../model/interface/dialog';
import { IAppState } from '../../store/app.state';
import { loadCars } from '../../store/car/car.action';
import { getAllCars, getCar } from '../../store/car/car.selector';
import { CarRentalFormComponent } from '../car-rental-form/car-rental-form.component';
import { BottomsheetComponent } from '../shared/bottomsheet/bottomsheet.component';
@Component({
  selector: 'app-car-rental',
  imports: [
    MatCardModule,
    MatTableModule,
    MatButtonModule,
    MatPaginator,
    MatSort,
    MatSortHeader,
    MatBottomSheetModule,
  ],
  templateUrl: './car-rental.component.html',
  styleUrl: './car-rental.component.css',
})
export class CarRentalComponent implements OnInit {
  carTableColumnDefs: string[] = [
    'id',
    'brand',
    'model',
    'year',
    'color',
    'dailyRate',
    'redgNo',
    'action',
  ];

  carsDataSource: MatTableDataSource<ICar, MatPaginator> =
    new MatTableDataSource<ICar>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  readonly dialog = inject(MatDialog);

  private _bottomSheet = inject(MatBottomSheet);

  isEdit: boolean = false;

  openDialog(data: IDialog): void {
    const dialogRef = this.dialog.open(CarRentalFormComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: data,
    });

    dialogRef.afterClosed().subscribe((_result) => null);
  }

  constructor(private store: Store<IAppState>) {}
  ngOnInit(): void {
    this.store.dispatch(loadCars());

    this.store.select(getAllCars).subscribe((data) => {
      this.carsDataSource.data = data;
      this.carsDataSource.paginator = this.paginator;
      this.carsDataSource.sort = this.sort;
    });
  }

  onEdit(car: ICar): void {
    this.isEdit = !this.isEdit;
    this.openDialog({
      dailogTitle: 'Edit Car Rental',
      isEdit: true,
      saveBtnTitle: 'Save Changes',
      data: car as ICar,
    });
    this.store.select(getCar(car.carId!));
  }

  onDelete(carId: number): void {
    this._bottomSheet.open(BottomsheetComponent, {
      data: carId,
    });
  }
}
