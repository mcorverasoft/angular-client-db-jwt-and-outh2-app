import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, UrlTree } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css',
  "../../../../src/assets/css/animate.css",
  "../../../../src/assets/css/magnific-popup.css",
  "../../../../src/assets/css/owl.carousel.css",
  "../../../../src/assets/css/owl.theme.css"
]
})
export class RedirectComponent implements OnInit {

  private urlReturn:UrlTree;
  private token:string;
  private tokenType:string;
  private error:string;
  ;

  constructor(private router: Router, private location:Location, private authService:AuthService) {
    this.urlReturn = this.router.parseUrl(this.router.url);
    this.token = this.urlReturn.queryParams['token'];
    this.tokenType = this.urlReturn.queryParams['tokenType'];
    this.error = this.urlReturn.queryParams['error'];
    this.authService.setToken(this.tokenType+"<"+this.token+">");
    this.location.replaceState('/');
    this.router.navigate(['/profile']);
  }

  ngOnInit(): void {

  }
}
