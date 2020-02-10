import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CoreModule} from './core/core.module';
import {RouterModule, Routes} from '@angular/router';
import {AngularMaterialModule} from './angular-material.module';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    CoreModule,
    AngularMaterialModule,
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
