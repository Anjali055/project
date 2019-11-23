import{Component} from '@angular/core'
import { hospitalService } from './hospital.service';


@Component({
    selector:'app-hospital',
    templateUrl:'hospital.component.html',
    styleUrls:['hospital.component.css'],
    providers:[hospitalService]
        
})

export class HospitalComponent{
    name="httpServices";

    public myuser:any;
    show=true;
    public  showHide()
        {
            this.show=!this.show;
         }
    

    constructor(private ss:hospitalService){
    
        //subscribe method cannot be used in constructor
    }

    public getUsers(){
        this.ss.getAllUSer().subscribe(
            res =>{this.myuser=res},
            err =>{this.myuser=err},
        )   
        //this.showHide();  
        
        
       
     }

     public postsaveUser(){
        let data={
            name:'anjali',
            des:123
        }
        this.ss.postUser(data).subscribe(
        res =>{this.myuser=res},
        err =>{this.myuser=err} 
       )
    }


    public cputuser(){
        let  putdata={
            name:"hello",
            des:123
        }
        this.ss.putuser(putdata).subscribe(
            res =>{this.myuser=res},
            err =>{this.myuser=err}
        )
    }

    public cdeleteuser(deletedata){
        this.ss.DeleteUser(deletedata).subscribe(
            res=>{this.myuser=res},
            err=>{this.myuser=err},

        )
        
    }

}


    

