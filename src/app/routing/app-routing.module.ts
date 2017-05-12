import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { CustomerListComponent } from '../components/customer-list/customer-list.component';
import { BootstrapCssComponent } from '../components/bootstrap-css/bootstrap-css.component';

const appRoutes: Routes = [
    {
        path: 'customers',
        component: CustomerListComponent
    },
    {
        path: 'bootstrapcss',
        component: BootstrapCssComponent
    },
    {
        path: 'test',
        redirectTo: '/test.html', pathMatch: 'full'
    },
    {
        path: '',
        redirectTo: '/customers', pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
