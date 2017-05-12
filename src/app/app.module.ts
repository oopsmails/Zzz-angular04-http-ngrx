import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';

import {Ng2PageScrollModule} from 'ng2-page-scroll';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { customerReducer } from './ngstore/customer.reducer';
import { ValuesPipe } from './pipe/values.pipe';

import { CustomerService } from './services/customer.service';

import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { BootstrapCssComponent } from './components/bootstrap-css/bootstrap-css.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ValuesPipe,
    CustomerListComponent,
    BootstrapCssComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Ng2PageScrollModule.forRoot(),
    AppRoutingModule,
    StoreModule.provideStore({ customerAppStore: customerReducer })
  ],
  providers: [
    CustomerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
