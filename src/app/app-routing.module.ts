import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { RanksComponent } from './ranks/ranks.component';
import { TopicModellingComponent } from './topic-modelling/topic-modelling.component';

const routes: Routes = [
  { path: 'images-grid', component: ImagesGridComponent },
  { path: 'ranks', component: RanksComponent },
  { path: 'topic-modelling', component: TopicModellingComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
