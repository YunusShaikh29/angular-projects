import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-observables';

  data: any[] = [];

  //1. Create Ovservable

  myObservable = new Observable((observer) => {
    // observer.next([1,2,3,4,5,6])
    setTimeout(() => {observer.next(1)}, 1000)
    setTimeout(() => {observer.next(2)}, 2000)
    setTimeout(() => {observer.next(3)}, 3000)
    setTimeout(() => {observer.next(4)}, 4000)
    setTimeout(() => {observer.next(5)}, 5000)
    setTimeout(() => {observer.next(6)}, 6000)
  })


  GetAsyncData(){

    //Observer
    
    //next, error, complete

    this.myObservable.subscribe((value: any) => {
      this.data.push(value)
    })
  }

  
}
