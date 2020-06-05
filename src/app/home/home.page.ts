import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(
    private router: Router,
    public auth: AuthService
  ) { 
    console.log('user', auth.user);
    console.log('userDoc', auth.userDoc);
  }

  openMenu(){
    this.router.navigate(['/menu/(my:dashboard)'])
  }
}
