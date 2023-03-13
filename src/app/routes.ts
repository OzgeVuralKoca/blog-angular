import { Routes } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { BlogAddComponent } from "./components/blogs/blog-add/blog-add.component";
import { BlogDetailsComponent } from "./components/blogs/blog-details/blog-details.component";
import { BlogsComponent } from "./components/blogs/blogs.component";
import { HomeComponent } from "./components/home/home.component";
import { LayoutsComponent } from "./components/layouts/layouts.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";

export const routes: Routes = [
    {
        path:"",
        component: LayoutsComponent,
        children: [
            {
                path: "",
                component: HomeComponent
            },
            {
                path: "login",
                component: LoginComponent
            },
            {
                path: "register",
                component: RegisterComponent
            },
            {
                path: "about",
                component: AboutComponent
            },
            {
                path: "blogs",
                children: [
                    {
                        path:"",
                        component: BlogsComponent
                    },
                    {
                        path: "add",
                        component: BlogAddComponent
                    },
                    {
                        path: ":id",
                        component: BlogDetailsComponent
                    }
                ]
            }
        ]
    }
]