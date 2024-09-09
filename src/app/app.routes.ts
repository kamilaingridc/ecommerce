import { Routes } from '@angular/router';
import { LoginComponent } from './Paginas/login/login.component';
import { HomeComponent } from './Paginas/home/home.component';
import { NotFoundComponent } from '../not-found/not-found.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
    },
    {
        path: "home",
        component: HomeComponent
    },
    {
        path: "**",
        component: NotFoundComponent
    }
];
