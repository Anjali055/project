import { Component } from '@angular/core';



@Component({
    selector:'app-practPipe',
    templateUrl:'practPipe.component.html',
    styleUrls:['practPipe.component.css']
})





export class PractComponnent{
    mystyle={color:'red'}
    birthday=new Date(1993,8,10);
    currentDate=new Date();

    date=new Date();
    time=new Date().getHours();
    
    months:['jan','feb','mar']

    title='Hello';
    employee:any[]=[
        {code:123,name:'anjali',gender:'female'},
        {code:120,name:'jadhav',gender:'male'},
    ];



 

}