import { Component , OnInit} from '@angular/core';
import { studentservice } from './studentdemo.service';

@Component({
    selector:'app-college',
    templateUrl:'college.component.html',
    styleUrls:['college.component.css']
})

export class collegecomponent {

    name:string="services";
    public student:any;


    public constructor(private st:studentservice){
        //this.student=this.st.getstudentinfo(); 
        //[can be used here  but  we cant call  the method on onclick] 

    }

    //public ngOnInit(){
        //this.Mystudentinfo()
    //}

    public Mystudentinfo(){
        this.student=this.st.getstudentinfo();
        
    }



}