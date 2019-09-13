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

    //  this.dashboardPermissionChart=[{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'}];
 
  }

  
  startWebWorker() {
    this.dashboardPermissionChart=[{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'},{id:1,name:'Suchin'}];
    if (typeof Worker !== 'undefined') {
      debugger;
      // Create a new
      const worker = new Worker('./web-worker.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        debugger;
        // console.log(`page got message: ${data}`);
        this.loading = false; // Hide loading widget
      };
      this.loading = true; // Display loading widget
      worker.postMessage(this.dashboardPermissionChart);
    } else {
      debugger;
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }

  startMain() {

    // Does not display, because Main thread is blocked.
    this.loading = true;

    console.log('Data Size: ' + this.dataSize);
    console.time('Main')
    let val = 'a';
    for (let k = 0; k <= 10; k++) {
      val = 'a';
      for (let i = 0; i <= this.dataSize; i++) {
        val += 'a';
      }
    }
    console.timeEnd('Main');
    this.loading = false;

  }

}
