import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KnobComponent } from './components/knob/knob.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BodyComponent } from './components/body/body.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

@NgModule({
  declarations: [AppComponent, KnobComponent, ToolbarComponent, BodyComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Specify ng-circle-progress as an import
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
