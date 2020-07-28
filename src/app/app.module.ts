import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatMenuModule} from '@angular/material/menu';
import {RouterModule, Routes} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import { PhotographyComponent } from './photography/photography.component';
import { SmartHomeComponent } from './smart-home/smart-home.component';
import { ComputerComponent } from './computer/computer.component';
import { HomeComponent } from './home/home.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import { ContactSheetComponent } from './contact-sheet/contact-sheet.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'photography', component: PhotographyComponent},
  {path: 'smartHome', component: SmartHomeComponent},
  {path: 'computer', component: ComputerComponent},
  {path: ' ', component: HomeComponent}, // default
  {path: '**', component: HomeComponent} // 404
];

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    PhotographyComponent,
    SmartHomeComponent,
    ComputerComponent,
    HomeComponent,
    ContactSheetComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    MatMenuModule,
    RouterModule,
    MatButtonModule,
    MatRippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
