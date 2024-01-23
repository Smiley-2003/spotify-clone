import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchComponent } from './pages/search/search.component';
import { PlaylistComponent } from './pages/playlist/playlist.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { PagestopNavComponent } from './pagestop-nav/pagestop-nav.component';
import { ComponentsComponent } from './components/components.component';
import { SongCardComponent } from './components/song-card/song-card.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    PlaylistComponent,
    SignUpComponent,
    PagestopNavComponent,
    ComponentsComponent,
    SongCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
