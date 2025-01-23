import { AsyncPipe, CommonModule } from '@angular/common';
import { Component, Inject, inject, OnInit } from '@angular/core';
import {
  MAT_BOTTOM_SHEET_DATA,
  MatBottomSheetRef,
} from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IAppState } from '../../../store/app.state';
import { deleteCar } from '../../../store/car/car.action';
import { setLoading } from '../../../store/loader/loader.action';
import { getLoading } from '../../../store/loader/loader.selector';
import { LoaderComponent } from '../loader/loader.component';

@Component({
  selector: 'app-bottomsheet',
  imports: [
    MatCardModule,
    MatButtonModule,
    AsyncPipe,
    CommonModule,
    LoaderComponent,
  ],
  templateUrl: './bottomsheet.component.html',
  styleUrl: './bottomsheet.component.css',
})
export class BottomsheetComponent implements OnInit {
  isLoading$!: Observable<boolean>;

  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomsheetComponent>>(MatBottomSheetRef);

  constructor(
    @Inject(MAT_BOTTOM_SHEET_DATA) public data: number,
    private store: Store<IAppState>
  ) {}
  ngOnInit(): void {
    this.isLoading$ = this.store.select(getLoading);
  }
  closeSheet(): void {
    this._bottomSheetRef.dismiss();
  }

  onDelete() {
    this.store.dispatch(setLoading({ isLoading: true }));
    this.store.dispatch(deleteCar({ carId: this.data }));
    this.closeSheet();
  }
}
