import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greet'
})
export class GreetPipe implements PipeTransform {

  transform(value:Number) {

    if( value<12){
      

      return 'good morning' ;

    }

    else if (value >= 12 && value <= 17){
    

    return 'Good Afternoon';
    }

    else if(value>=17 && value<=24){
     
      
      return  'good evening';

    }


    
    
  }

}
