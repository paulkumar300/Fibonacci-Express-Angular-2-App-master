import { Component,OnInit } from '@angular/core';

import { AppService } from './app.service';
declare var $:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Fibonacci Series Generator';

  private num:number = 0;
  
  private series:string[] = [];

  constructor(private appService:AppService){}
  ngOnInit(){
    
  }
  private getFibonacciSeries(){
    this.appService.getFibonacciSeries(this.num)
        .subscribe((result) =>{
          this.series = result;
        });
  }
}
