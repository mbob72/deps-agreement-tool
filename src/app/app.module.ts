import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DepInputComponent } from './dep-input/dep-input.component';
import { OneAppDepsComponent } from './one-app-deps/one-app-deps.component';
import { CompareResultComponent } from './compare-result/compare-result.component';
import { PacksListComponent } from './packs-list/packs-list.component';
import { PackShowComponent } from './pack-show/pack-show.component';

@NgModule({
  declarations: [
    AppComponent,
    DepInputComponent,
    OneAppDepsComponent,
    CompareResultComponent,
    PacksListComponent,
    PackShowComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
