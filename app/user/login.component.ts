import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { AuthService } from './auth.service'

@Component({
    templateUrl: 'app/user/login.component.html'
})

export class LoginComponent implements OnInit {
    constructor(private authService:AuthService, private router:Router) { }

    ngOnInit() { }

    login(formValues) {
        this.authService.loginUser(formValues.userName, formValues.Password)
        this.router.navigate(['events'])
    }

    cancel() {
        this.router.navigate(['events'])
    }
}