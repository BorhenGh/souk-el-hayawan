import { Routes } from '@angular/router';
import { PublicLayout } from './layouts/public-layout/public-layout';
import { Home } from './features/home/pages/home/home';

export const routes: Routes = [
{
    path: '',
    component: PublicLayout, // Ici angular il va charge tout d'abord le layout
    children: [
        {
            path: '',
            component: Home // les pages fils qui s'affichent dans le layout
        }
    ]
}

];
