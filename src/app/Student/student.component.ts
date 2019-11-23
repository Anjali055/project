import { Component } from '@angular/core';

@Component({
    selector:'app-student',
    templateUrl:'./student.component.html',
    styleUrls:['./student.component.css']
})


export class StudentComponet{
 title:string='directiveDemo'
 mystyle:any={color:'red'}
 mybackground:any={background:'green'}

 isHide:boolean=true
 isHidden=false;
 num:number=3;


 toggle(){
     this.isHide=!this.isHide;
 }

 toggle2(){
     this.isHidden=!this.isHidden
 }

handelClick(){
this.mystyle ={color:'blue',background:'skyblue'}
}
 name:any=['anjali','ganesh','neha']


 studenInfo:any=[{name:'Anjali',Rollno:'1234',std:'fifth'},
                    {name:'Neha',Rollno:'1234',std:'fifth'},
                    {name:'Anu',Rollno:'1234',std:'fifth'}
                ]


}