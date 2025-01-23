import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogRef,
} from '@angular/material/dialog';
import {
  MatError,
  MatFormFieldModule,
  MatLabel,
} from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICar } from '../../model/interface/car';
import { IDialog } from '../../model/interface/dialog';
import { IAppState } from '../../store/app.state';
import { addCar, updateCar } from '../../store/car/car.action';
import { setLoading } from '../../store/loader/loader.action';
import { getLoading } from '../../store/loader/loader.selector';
import { LoaderComponent } from '../shared/loader/loader.component';

@Component({
  selector: 'app-car-rental-form',
  imports: [
    MatFormFieldModule,
    MatLabel,
    MatCardModule,
    MatInput,
    MatButtonModule,
    MatDialogActions,
    MatError,
    CommonModule,
    ReactiveFormsModule,
    LoaderComponent,
    AsyncPipe,
  ],
  templateUrl: './car-rental-form.component.html',
  styleUrl: './car-rental-form.component.css',
})
export class CarRentalFormComponent implements OnInit {
  carForm: FormGroup = new FormGroup([]);

  isLoading$!: Observable<boolean>;

  dialogProps!: IDialog;

  constructor(
    private dialogRef: MatDialogRef<CarRentalFormComponent>,
    private formBuilder: FormBuilder,
    private store: Store<IAppState>,
    @Inject(MAT_DIALOG_DATA) public data: IDialog
  ) {
    this.carForm = this.formBuilder.group({
      brand: ['', [Validators.required, Validators.minLength(5)]],
      model: ['', [Validators.required]],
      year: [
        '',
        [Validators.required, Validators.minLength(4), Validators.maxLength(4)],
      ],
      color: ['', [Validators.required]],
      dailyRate: ['', [Validators.required]],
      regno: ['', [Validators.required, Validators.minLength(4)]],
    });
  }
  ngOnInit(): void {
    this.dialogProps = this.data;
    this.isLoading$ = this.store.select(getLoading);
    if (this.dialogProps.isEdit) {
      const car: ICar = this.dialogProps.data;
      this.carForm.patchValue({
        brand: car.brand,
        model: car.model,
        year: car.year,
        color: car.color,
        dailyRate: car.dailyRate,
        regno: car.regNo,
      });
    }
  }

  onCloseDialog(): void {
    this.dialogRef.close();
  }

  onFormSubmit(): void {
    if (!this.carForm.valid) return;

    let car: ICar = {
      brand: this.carForm.value.brand,
      model: this.carForm.value.model,
      year: this.carForm.value.year,
      color: this.carForm.value.color,
      dailyRate: this.carForm.value.dailyRate,
      regNo: this.carForm.value.regno,
    };

    this.store.dispatch(setLoading({ isLoading: true }));

    if (this.dialogProps.isEdit) {
      this.store.dispatch(
        updateCar({ car: { ...car, carId: this.dialogProps.data.carId } })
      );
    } else {
      this.store.dispatch(addCar({ car }));
    }

    this.dialogRef.close();
  }

  get brandError() {
    const brand = this.carForm.get('brand');
    if (brand?.hasError('required')) return 'Brand Name is required';
    if (brand?.hasError('minlength'))
      return 'Brand Name must be at least 5 characters';
    return '';
  }

  get modelError() {
    const model = this.carForm.get('model');
    if (model?.hasError('required')) return 'Model is required';
    return '';
  }

  get yearError() {
    const year = this.carForm.get('year');
    if (year?.hasError('required')) return 'Year is required';
    if (year?.hasError('minlength') || year?.hasError('maxlength'))
      return 'Year must be 4 digits';
    return '';
  }

  get colorError() {
    const color = this.carForm.get('color');
    if (color?.hasError('required')) return 'Color is required';
    return '';
  }

  get dailyRateError() {
    const dailyRate = this.carForm.get('dailyRate');
    if (dailyRate?.hasError('required')) return 'Daily Rate is required';
    return '';
  }

  get regnoError() {
    const regno = this.carForm.get('regno');
    if (regno?.hasError('required')) return 'Regno is required';
    if (regno?.hasError('minlength')) return 'Regno must be 4 chars';
    return '';
  }
}
