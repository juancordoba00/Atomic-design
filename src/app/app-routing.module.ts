import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/pages/login/login.component';
import { LoginGuard } from './components/guards/feature-flag.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./components/main.module').then(m => m.MainModule),
    canActivate: [LoginGuard.canActivate()]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
