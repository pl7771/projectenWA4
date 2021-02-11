import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { RecipeModule } from './recipe/recipe.module';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    RecipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
