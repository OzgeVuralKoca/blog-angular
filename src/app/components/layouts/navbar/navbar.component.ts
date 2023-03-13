import { Component, Input } from '@angular/core';
import { SocialMediaModel } from 'src/app/models/social-media.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Input() socialMedias: SocialMediaModel[] = [];

  constructor(
    public _auth: AuthService
  ){}

  
}
