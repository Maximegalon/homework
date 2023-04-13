/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Homework Web Site';

  constructor(public angularFireAuth: AngularFireAuth) {}

  // TODO: Use this
  successLoginCallback(authResult: any, redirectUrl: string): void {
    console.log(authResult)
    console.log(redirectUrl)
  }

  // TODO: Use this
  errorLoginCallback(event: any): void {
    console.error(event)
  }
}