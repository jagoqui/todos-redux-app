import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {TodoModule} from "./todos/todo.module";
import {FooterComponent} from './footer/footer.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';
import {StoreModule} from '@ngrx/store';
import {ReactiveFormsModule} from "@angular/forms";
import {appReducers} from "./app-reducer";

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    TodoModule,
    StoreModule.forRoot(appReducers, {}),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production, autoPause: true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
