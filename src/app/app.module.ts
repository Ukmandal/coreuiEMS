import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true
};

import { AppComponent } from './app.component';

import { DefaultLayoutComponent } from './containers';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

import {
  AppAsideModule,
  AppBreadcrumbModule,
  AppHeaderModule,
  AppFooterModule,
  AppSidebarModule,
} from '@coreui/angular'

import { AppRoutingModule } from './app.routing';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './pages/not-found/not-found-.component';
import { AuthService } from './pages/authentication/services/auth.service';
import { AuthGuardService } from './pages/authentication/services/auth-guard.service';
import { LoginComponent } from './pages/authentication/login/login.component';
import { HttpModule } from '@angular/http';
import { RegisterComponent } from './pages/authentication/register/register.component';
import { MatSnackBarModule, MatTableModule, MatTabsModule, MatIconModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './pages/shared/customer.service';
import { CustomerModule } from './pages/profile/customer.module';
import { SettingComponent } from './pages/settings/setting.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,    
    AppAsideModule,
    MatIconModule,
    AppBreadcrumbModule.forRoot(),
    AppFooterModule,
    AppHeaderModule,
    AppSidebarModule,
    PerfectScrollbarModule,
    BsDropdownModule.forRoot(),
    TabsModule.forRoot(),
    ChartsModule,
    MatSnackBarModule,
    MatTableModule,
    CustomerModule
  ],
  declarations: [
    AppComponent,
    ...APP_CONTAINERS,
    RegisterComponent,
    NotFoundComponent,
    LoginComponent,
    SettingComponent,
    ContactComponent
 
  ],
  providers: [CustomerService, AuthService, AuthGuardService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
