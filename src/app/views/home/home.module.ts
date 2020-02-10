import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeContainerComponent} from './container/home-container.component';

export const routes: Routes = [
  {path: '', component: HomeContainerComponent}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeContainerComponent
  ]
})
export class HomeModule {
}
