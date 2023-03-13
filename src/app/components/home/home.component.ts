import { Component, Input, OnInit } from '@angular/core';
import { BlogModel } from 'src/app/models/blog.model';
import { SiteModel } from 'src/app/models/site.model';
import { SocialMediaModel } from 'src/app/models/social-media.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() socialMedias: SocialMediaModel[] = [];
  blogs: BlogModel[] = []
  site: SiteModel = new SiteModel();

  constructor(
    public _blog: BlogService
  ) {
    this.site.id = 0;
    this.site.pageHeaderContent = "I'am a Frontend Developer. This is a example blog.";
    this.site.pageHeaderTitle = "Welcome My Blog";
    this.site.title = "My Blog Page";
    this.site.pageHeaderName = "-Özge Vural Koca-"
  }
  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this._blog.getAll().subscribe(res=>{
      this.blogs = res;
    })
  }
}
