import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivateGuard } from './activate.guard';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SearchComponent } from './components/search/search.component';
import { DeactivateGuard } from './deactivate.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [ActivateGuard] },
  { path: 'search', component: SearchComponent, canActivate: [ActivateGuard] },
  { path: 'register', component: RegisterComponent, canActivate: [ActivateGuard], canDeactivate: [DeactivateGuard] },
  { path: 'login', component: LoginComponent },
  
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
