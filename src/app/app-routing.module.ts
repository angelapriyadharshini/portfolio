import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';

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
      externalUrl: "https://codepen.io/"
    }
  },
  {
    path: 'github',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://github.com/"
    }
  },
  {
    path: 'linkedin',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://linkedin.com/"
    }
  },
  {
    path: 'stackoverflow',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://stackoverflow.com/"
    }
  },
  {
    path: 'twitter',
    canActivate: [BlogComponent],
    component: BlogComponent,
    data: {
      externalUrl: "https://twitter.com/"
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
