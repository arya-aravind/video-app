import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { AddVideousComponent } from './add-videous/add-videous.component';

const adminroutes: Routes = [

  { path: 'list',  component: ListComponent },
  { path: 'add-videous',component:AddVideousComponent}
];



export const admin_routes = RouterModule.forChild(adminroutes);
