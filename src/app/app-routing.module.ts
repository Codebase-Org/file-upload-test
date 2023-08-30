import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {FrontpageComponent} from "./home/frontpage/frontpage.component";
import {UploadComponent} from "./home/upload/upload.component";
import {DetailsComponent} from "./home/details/details.component";

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'home/frontpage'},
  {path: 'home', component: HomeComponent, children: [
      {path: 'frontpage', component: FrontpageComponent},
      {path: 'upload', component: UploadComponent},
      {path: 'details/:id', component: DetailsComponent}
    ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
