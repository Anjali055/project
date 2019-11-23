import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponet } from './Student/student.component';
import { cubePipe } from './cube.pipe';
import { PractComponnent } from './PractPipe/practPipe.component';
import { genderPipe } from './PractPipe/Gender.pipe';
import { GreetPipe } from './greet.pipe';
import { templateform } from './TemplateDriven/templateform.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { TempcollegeComponent } from './tempcollege/tempcollege.component'
import { reactiveCompnent } from './ReactiveForms/ReactiveForms.component';
import { reactivepract } from './PracrReactive/practreactive.component';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { collegecomponent } from './service/colleg.component';
import { studentservice } from './service/studentdemo.service';
import { HospitalComponent } from './hospital/hospital.component';
import { HttpClientModule} from  '@angular/common/http';
//import { DeletedemoComponent } from './deletedemo/deletedemo.component'
import { MasterComponent } from './routing/master.component ';
import { AboutComponent } from './routing/about.component';
import { HomeComponent } from './routing/home.component';
import { ContactComponent } from './routing/contact.component';
import { RouterModule } from '@angular/router';
import { myRoutes } from './routing/route.config';
import { VisionComponent } from './routing/vision.component';
import { PractmasterCOmponent } from 'src/routingDemo/practMaster.component';
import { PracthomeCOmponent } from 'src/routingDemo/PractHome.component';
import { PractaboutCOmponent } from 'src/routingDemo/practAbout.component';
import { PractvisionCOmponent } from 'src/routingDemo/PractVision.component';


@NgModule({
  declarations: [
    AppComponent,StudentComponet,cubePipe,PractComponnent,genderPipe, GreetPipe,
    templateform,
    TempcollegeComponent,reactiveCompnent,reactivepract,FormbuilderComponent,collegecomponent,
    HospitalComponent,
    //DeletedemoComponent,
    //routing files
    MasterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    //chid component
    VisionComponent,


    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,
    HttpClientModule,
    //importing the routing module
    RouterModule.forRoot(myRoutes)

  ],
  providers: [studentservice],
  bootstrap: [MasterComponent]
})
export class AppModule { }
