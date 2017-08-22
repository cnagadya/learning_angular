import { ModuleWithProviders } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import { TrialComponent } from './components/trial.component';
import { AboutComponent } from './components/about.component';

const  appRoutes: Routes = [
    {
        path: '',
        component: TrialComponent
    },
    {
        path: 'about',
        component: AboutComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes)