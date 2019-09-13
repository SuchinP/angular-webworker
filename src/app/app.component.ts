import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
   dashboardPermissionChart=[];
  data={};
  constructor() { 

     this.dashboardPermissionChart=[{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'}];
  }
}
