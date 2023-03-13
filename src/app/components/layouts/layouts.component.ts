import { Component } from '@angular/core';
import { SiteModel } from 'src/app/models/site.model';
import { SocialMediaModel } from 'src/app/models/social-media.model';

@Component({
  selector: 'app-layouts',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})

export class LayoutsComponent {
  site: SiteModel = new SiteModel();
  socialMedias: SocialMediaModel[] = [];

constructor(){
  
  this.socialMedias = [
    {
      id:0,
      icon: "fab fa-github",
      link: "https://github.com/OzgeVuralKoca",
      name: "GitHub",
      btnClass: "btn-github"
    },
    {
      id:0,
      icon: "fab fa-linkedin",
      link: "https://www.linkedin.com/in/%C3%B6zge-vural-koca/",
      name: "LinkedIn",
      btnClass: "btn-linkedin"
    },
    {
      id:0,
      icon: "fab fa-instagram",
      link: "https://www.linkedin.com/in/%C3%B6zge-vural-koca/",
      name: "Instagram",
      btnClass: "btn-github"
    }
  ]
}
}
