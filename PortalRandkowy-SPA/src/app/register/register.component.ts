import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertyfiService } from '../_services/alertyfi.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Output() cancelRegister = new EventEmitter();
  model: any = {};

  constructor(private authService: AuthService, private alertyfi: AlertyfiService) { }

  ngOnInit() {
  }

  register() {
    this.authService.register(this.model).subscribe(() => {
      this.alertyfi.success('rejestracja udana');
    }, error => {
      this.alertyfi.error('wystąpił błąd rejestracji');
    });
  }

  cancel() {
    this.cancelRegister.emit(false);
  }

}
