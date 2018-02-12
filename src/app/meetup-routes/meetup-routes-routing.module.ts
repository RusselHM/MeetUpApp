import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from '../app.component';
import {GroupsComponent} from '../Group/groups/groups.component';
import {CategoriesComponent} from '../Setting/categories/categories.component';


const routes: Routes = [
 {path: '', redirectTo:'/home', pathMatch:'full'},
 {path: 'home', component: AppComponent},
 {path: 'groups', component: GroupsComponent},
 {path: 'categories', component: CategoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class MeetupRoutesRoutingModule { }
