import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isRegisterComponent = false;
  constructor(private router: Router) {}
  ngOnInit() {
    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        var root = this.router.routerState.snapshot.root;
        while (root) {
          if (root.children && root.children.length) {
            root = root.children[0];
          } else if (root.data && root.data["register"]) {
            this.isRegisterComponent = root.data["register"];
            console.log(this.isRegisterComponent);
            return;
          } else {
            return;
          }
        }
      });
    }

}
