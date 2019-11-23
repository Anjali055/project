import{Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class hospitalService{
constructor(private http:HttpClient){


}
public getAllUSer(){
    //return this.ser.get("https://reqres.in/api/users?page=2");

    return this.http.get("https://restcountries.eu/rest/v2/all");
}


//post service
public postUser(reqbody:any){
    return this.http.post('https://reqres.in/api/users',reqbody);
    //return this.http.post('https://reqres.in/api/register',reqbody);
            
            
}

public putuser(req:any){
    return this.http.put('https://reqres.in/api/users/2',req);
}

public DeleteUser(Dreq:any){
    return this.http.delete('https://reqres.in/api/users?page=2',Dreq);
}


    
}