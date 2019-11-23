import { Injectable } from '@angular/core';

@Injectable()
export class studentservice{   

    public studentinfo=[
        { name:"anjali",comp:"ass"},
        { name:"jadhav",comp:"bbb"},

    ]

    public getstudentinfo(){
        return this.studentinfo;
    }

}