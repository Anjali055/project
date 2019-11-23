import{Routes} from '@angular/router'
import { HomeComponent } from './home.component';
import { AboutComponent } from './about.component';
import { ContactComponent } from './contact.component';
import { Component } from '@angular/core';
import { VisionComponent } from './vision.component';


export const myRoutes:Routes=[
{path:'',component:HomeComponent},
{path:'about',component:AboutComponent,children:  [
    {path:'vision',component:VisionComponent,}
]},
    {path:'contact',component:ContactComponent }

]