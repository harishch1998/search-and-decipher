import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { RanksComponent } from './ranks/ranks.component';
import { TopicModellingComponent } from './topic-modelling/topic-modelling.component';
import { TopicModellingSpanishComponent } from './topic-modelling-spanish/topic-modelling-spanish.component';
import { TopicChartsComponent } from './topic-charts/topic-charts.component';
import { TopicClusterComponent } from './topic-cluster/topic-cluster.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'images-grid', component: ImagesGridComponent },
  { path: 'ranks', component: RanksComponent },
  { path: 'topic-modelling', component: TopicModellingComponent },
  { path: 'topic-modelling-intertopic', component: TopicModellingSpanishComponent },
  { path: 'topic-charts', component: TopicChartsComponent },
  { path: 'topic-cluster', component: TopicClusterComponent },
  { path: 'about', component: AboutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
