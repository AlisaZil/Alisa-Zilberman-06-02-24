import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public isNavbarOpen: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  handleButtonLinkClick(e: string) {
    this.isNavbarOpen = false;
    this.router.navigateByUrl(e);
  }
}
