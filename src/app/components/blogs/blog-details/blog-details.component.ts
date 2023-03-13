import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogModel } from 'src/app/models/blog.model';
import { BlogService } from 'src/app/services/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent {
  blog: BlogModel = new BlogModel();
  blogId: number = 0;

  constructor(
    private _activated: ActivatedRoute,
    private _blog: BlogService
  ) {
  this._activated.params.subscribe(res=>{
    this.blogId = res["id"];
    this._blog.getById(this.blogId).subscribe(res=>{
      this.blog = res[0];
    })
  })
  }

}
