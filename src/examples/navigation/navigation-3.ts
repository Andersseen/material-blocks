import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'example-navigation-3',
  imports: [MatSidenavModule, MatListModule, MatIcon],
  template: `
    <mat-sidenav-container class="h-64 border rounded">
      <mat-sidenav mode="side" opened class="w-64 p-4">
        <mat-nav-list>
          <a mat-list-item href="#">
            <mat-icon matListItemIcon>home</mat-icon>
            <span matListItemTitle>Dashboard</span>
          </a>
          <a mat-list-item href="#">
            <mat-icon matListItemIcon>person</mat-icon>
            <span matListItemTitle>Profile</span>
          </a>
          <a mat-list-item href="#">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
        </mat-nav-list>
      </mat-sidenav>
      <mat-sidenav-content class="p-4">
        <h2 class="text-2xl font-bold mb-2">Content Area</h2>
        <p>Add your main content here.</p>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export default class Navigation3 {}
