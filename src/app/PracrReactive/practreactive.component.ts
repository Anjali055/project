import{Component} from '@angular/core'
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
    selector:'app-practReactive',
    templateUrl:'./practreactive.component.html'

})
export class reactivepract{
    myLoginDemo: FormGroup;

constructor(){
    this.myLoginDemo=new FormGroup({
        name:new FormControl('',[Validators.required,Validators.minLength(4)]),
        email: new FormControl('',[Validators.required]),
    

        Skills:new FormGroup({
            Skillname:new FormControl(),
            experience:new FormControl(),
            proficiency: new FormControl(),
           }),

       address:new FormGroup({
           Street:new FormControl('',[Validators.required]),
           city:new FormControl(),
           postalCode:new FormControl()

       }),

     

    

    });

   
      
}

public mysubmit(data:any){

    alert(JSON.stringify(data));
    // this.myLoginDemo.setValue({
    //     name:'anjali',
    //     email:'anjalijadhav055@gmail.com',
    //     skills:{
    //         skillname:'c',
    //         experience:5,
    //         proficiency:3,
    //     }
    // })
    
   
        
}


}