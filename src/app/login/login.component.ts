import { SocialAuthService, GoogleLoginProvider } from '@abacritt/angularx-social-login';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: SocialAuthService) { }

  ngOnInit(): void {
  }

  signInHandleras() {
    console.log('button clicked');
    // this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then(data => {
    //   localStorage.setItem('google-auth', JSON.stringify(data));
    //   this.router.navigateByUrl('/dashboard').then();
    // })
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

}
