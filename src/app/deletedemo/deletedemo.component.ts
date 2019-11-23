import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-deletedemo',
  templateUrl: './deletedemo.component.html',
  styleUrls: ['./deletedemo.component.css']
})
export class DeletedemoComponent {

  loginData:FormGroup;

  constructor() {
    this.loginData=new FormGroup({
      firstName:new FormControl(),
      lastName:new FormControl(),
      address:new FormControl(),
      designation:new FormControl()
      

    })

    }
   }




