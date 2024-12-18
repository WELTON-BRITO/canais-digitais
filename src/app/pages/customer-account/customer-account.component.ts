import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-customer-account',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './customer-account.component.html',
  styleUrl: './customer-account.component.scss'
})

export class CustomerAccountComponent {

  constructor(private router: Router) { }

  voltarTela() {
    this.router.navigate(['']);
  }
}
