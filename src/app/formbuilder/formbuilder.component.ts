import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
    selector:'App-formbuilder',
    templateUrl:'formbuilder.component.html',


})

export class FormbuilderComponent{
    LoginDetails:FormGroup

   /* public constructor(){
        this.LoginDetails=new FormGroup({
           name:new FormControl(),
           lastname:new FormControl(),
           password:new FormControl(),
           confirmPassword:new FormControl(),

    
        paddress:new FormGroup({
            street:new FormControl(),
            lane1: new FormControl(),
            city:new FormControl()
        })

        
    })*/

public constructor( private fb:FormBuilder){
    this.LoginDetails=this.fb.group({

        name:[''],
           lastname:[''],
           password:[''],
           confirmPassword:[''],

           paddress:this.fb.group({
            street:[''],
            lane1:[''],
            city:['']
        })

        
    })

}


        
}
    


