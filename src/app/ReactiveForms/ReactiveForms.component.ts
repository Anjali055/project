import{Component} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector:'app-reactive',
    templateUrl:'ReactuveForms.component.html',
    styleUrls:['ReactiveForms.component.css']

})
export class reactiveCompnent{
    loginModel:FormGroup

    constructor(){
       this.loginModel=new FormGroup({
           username:new FormControl('',[Validators.required,Validators.minLength(4)]),
           password:new FormControl(),
            address:new FormGroup({
                city:new FormControl(),
                State:new FormControl(),
                lane:new  FormControl()

            })
       })



    }

    public validate(data:any){
        alert(JSON.stringify(data));
    }


}