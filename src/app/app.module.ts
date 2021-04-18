import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecurePrivacyService } from './services/securePrivacy.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ClickDirective } from './directives/click.directive';

@NgModule({
  declarations: [
    AppComponent, ClickDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [SecurePrivacyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
