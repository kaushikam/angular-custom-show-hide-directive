import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { CustomBreakPointsProvider } from './custom-breakpoints';
import { CustomShowHideDirective } from './custom-show-hide-directive/custom-show-hide.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FlexLayoutModule ],
  declarations: [ AppComponent, HelloComponent, CustomShowHideDirective ],
  bootstrap:    [ AppComponent ],
  providers: [ CustomBreakPointsProvider ]
})
export class AppModule { }
