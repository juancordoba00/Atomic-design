import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WithoutAtomicDesignComponent } from './pages/without-atomic-design/without-atomic-design.component';
import { WithAtomicDesignComponent } from './pages/with-atomic-design/with-atomic-design.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'without-atomic-design',
    component: WithoutAtomicDesignComponent,
  },
  {
    path: 'with-atomic-design',
    component: WithAtomicDesignComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MainRoutingModule {}
