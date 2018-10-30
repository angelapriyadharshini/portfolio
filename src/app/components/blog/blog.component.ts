import { Injectable, Component } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Component({
  selector: 'app-blog',
  template:'Redirecting...',
  //templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})

@Injectable()
export class BlogComponent implements CanActivate {

  constructor() { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    window.location.href = route.data['externalUrl'];
    return true;
  }
}
