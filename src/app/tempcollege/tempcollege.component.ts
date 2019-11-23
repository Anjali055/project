import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempcollege',
  templateUrl: './tempcollege.component.html',
  styleUrls: ['./tempcollege.component.css']
})
export class TempcollegeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitInfo(data:any){
    console.log(JSON.stringify(data));

  }

}
