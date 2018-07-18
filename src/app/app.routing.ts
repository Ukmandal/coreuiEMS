import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './containers';

import { LoginComponent } from './pages/authentication/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found-.component';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { CustomerListComponent } from './pages/profile/customer-list.component';
import { CustomerDetailComponent } from './pages/profile/details/customer-detail.component';
import { SettingComponent } from './pages/settings/setting.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
      },
      {
        path: 'theme',
        loadChildren: './pages/theme/theme.module#ThemeModule'
      },
      {
        path: 'profile',
        component: CustomerListComponent,
        data: {
          title: 'Profile Page'
        }
      },
      {
        path: 'details/:id',
        component: CustomerDetailComponent,
        data: {
          title: 'Details Page'
        },
        children: [
          {
            path: 'setting',
            component: SettingComponent,
            data: {
              title: 'Setting Page'
            }
          },
          {
            path: 'contact',
            component: ContactComponent,
            data: {
              title: 'Contact Page'
            }
          },
        ]
      },
      {
        path: 'login',
        component: LoginComponent,
        data: {
          title: 'Login Page'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register Page'
        }
      },
      { path: '**', component: NotFoundComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
