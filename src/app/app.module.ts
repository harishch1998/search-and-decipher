import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImagesGridComponent } from './images-grid/images-grid.component';
import { RanksComponent } from './ranks/ranks.component';
import { FormsModule } from '@angular/forms';
import { TopicModellingComponent } from './topic-modelling/topic-modelling.component';
import { HttpClientModule } from '@angular/common/http';
import { TopicModellingSpanishComponent } from './topic-modelling-spanish/topic-modelling-spanish.component';

@NgModule({
  declarations: [
    AppComponent,
    ImagesGridComponent,
    RanksComponent,
    TopicModellingComponent,
    TopicModellingSpanishComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
