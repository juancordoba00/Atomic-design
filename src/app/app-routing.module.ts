import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WithAtomicDesignComponent } from './components/pages/with-atomic-design/with-atomic-design.component';
import { WithoutAtomicDesignComponent } from './components/pages/without-atomic-design/without-atomic-design.component';

const routes: Routes = [
  {
    path: 'without-atomic-design',
    component: WithoutAtomicDesignComponent,
  },
  {
    path: 'with-atomic-design',
    component: WithAtomicDesignComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
