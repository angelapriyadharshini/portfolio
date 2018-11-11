import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  },
  {
    path: 'blog',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://medium.com/"
    }
  },
  {
    path: 'codepen',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://codepen.io/apdharshini/"
    }
  },
  {
    path: 'github',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://github.com/angelapriyadharshini"
    }
  },
  {
    path: 'linkedin',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://www.linkedin.com/in/angela-amarapala/"
    }
  },
  {
    path: 'stackoverflow',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://stackoverflow.com/users/6284797/angela-amarapala"
    }
  },
  {
    path: 'twitter',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://twitter.com/apdharshi"
    }
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
