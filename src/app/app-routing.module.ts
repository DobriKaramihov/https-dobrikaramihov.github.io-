import { SigninComponent } from './Log/login/login.component';
import { SignupComponent } from './Log/register/register.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {path: 'login', component: SigninComponent},
    {path: 'register', component: SignupComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
