
import{Component} from  '@angular/core'
import { stringify } from 'querystring';

@Component({
    selector:'app-templateform',
    templateUrl:'templateform.component.html',
    styleUrls:['templateform.component.css']
    


})

export class templateform{

    logindata(data:any){
        // console.log(stringify(data));

        alert(JSON.stringify(data))

    }

}