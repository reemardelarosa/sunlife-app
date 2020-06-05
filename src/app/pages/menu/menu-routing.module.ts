import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { DashboardPage } from '../dashboard/dashboard.page';
import { PoliciesPage } from '../policies/policies.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'dashboard',
        outlet: 'my',
        component: DashboardPage
      },
      {
        path: 'policies',
        outlet: 'my',
        component: PoliciesPage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/(my:dashboard)',
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ], exports: [RouterModule]
})
export class MenuRoutingModule { }
