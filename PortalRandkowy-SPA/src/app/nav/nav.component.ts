import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertyfiService } from '../_services/alertyfi.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authService: AuthService, private alertyfi: AlertyfiService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      this.alertyfi.success('zalogowałeś się do aplikacji');
    }, error => {
      this.alertyfi.error('Wystąpił błąd logowania');
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }

  logout() {
    localStorage.removeItem('token');
    this.alertyfi.message('Zostałeś wylgowany');
  }

}
