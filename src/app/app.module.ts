import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';

import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const material = [

  MatToolbarModule,
  MatMenuModule,
  MatTableModule,
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutMeComponent,
    RankingComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule,BrowserAnimationsModule, material],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
