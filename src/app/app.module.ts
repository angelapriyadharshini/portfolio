import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectService } from './services/project-service/project.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutService } from './services/about-service/about.service';
import { ProfileContentComponent } from './components/profile-content/profile-content.component';
import { ProfileFooterComponent } from './components/profile-footer/profile-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    ProfileContentComponent,
    ProfileFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [ProjectService, AboutService],
  bootstrap: [AppComponent]
})

export class AppModule { }
