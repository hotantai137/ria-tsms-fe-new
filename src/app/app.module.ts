import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppMainComponent } from './shared/layouts/main/main.component';
import { AppHeaderComponent } from './shared/layouts/header/header.component';
import { AppFooterComponent } from './shared/layouts/footer/footer.component';
import { AppSidebarComponent } from './shared/layouts/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppSidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
