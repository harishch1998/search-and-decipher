import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { RanksComponent } from './ranks/ranks.component';
import { TopicModellingComponent } from './topic-modelling/topic-modelling.component';
import { TopicModellingSpanishComponent } from './topic-modelling-spanish/topic-modelling-spanish.component';

const routes: Routes = [
  { path: 'images-grid', component: ImagesGridComponent },
  { path: 'ranks', component: RanksComponent },
  { path: 'topic-modelling', component: TopicModellingComponent },
  { path: 'topic-modelling-spanish', component: TopicModellingSpanishComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
