import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { PokemonListComponent } from './components/pokemon-list/pokemon-list.component';
import { AppRoutingModule } from './app-routing.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { TeamComponent } from './components/team/team.component';
import { TrainerComponent } from './components/trainer/trainer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PokemonListComponent,
    NavBarComponent,
    TeamComponent,
    TrainerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
