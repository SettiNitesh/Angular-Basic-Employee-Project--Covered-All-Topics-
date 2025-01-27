import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Card } from '../../model/interface/card';

@Component({
  selector: 'app-tailwind',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './tailwind.component.html',
  styleUrl: './tailwind.component.css',
})
export class TailwindComponent {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
  }

  cards: Card[] = Array(10)
    .fill(null)
    .map((_, index) => ({
      id: index + 1,
      title: `Project ${index + 1}`,
      content: `This is a sample description for project ${
        index + 1
      }. It contains dummy text to demonstrate card layout.`,
      date: new Date(2024, 0, index + 1).toLocaleDateString(),
      status: index % 2 === 0 ? 'Active' : 'Pending',
    }));
}
