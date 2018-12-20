// Angular modules
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

// Api modules
import { HttpClientModule } from '@angular/common/http';
import { InMemoryDataService }  from './services/in-memory-data.service'; // Memory class
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'; // Api inside project for testing and dev

// All components
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesComponent } from './components/heroes/heroes.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		MessagesComponent,
		DashboardComponent,
		HeroDetailComponent,
		HeroSearchComponent,
	],
	imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
