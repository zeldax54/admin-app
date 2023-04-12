import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppLayoutComponent } from './layout/app.layout.component';

const routes: Routes = [
  { path: '', component: AppLayoutComponent,
    children:[{path: '',component:HomeComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
