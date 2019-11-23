import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name:'Checkgender'
})

export class genderPipe implements PipeTransform{

    transform(value:String,gender:String){

        if(gender=='male'){
            return 'mr'+value;
        }
        else {
            return 'mrs'+value;
        }

    }
}