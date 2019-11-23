
import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name:'cube'
})


export class cubePipe implements PipeTransform{
    // transform(value:number,addNum:number){
    //     if(addNum){
    //         return(value*value*value)+addNum;
    //     }else{
    //         return(value*value*value)
    //     }

    // }

    transform(value:number) {
        return(value)

    }

}