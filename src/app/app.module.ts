import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListKnowledgeComponent } from './components/list-knowledge/list-knowledge.component';
import { AddKnowledgeComponent } from './components/add-knowledge/add-knowledge.component';
import { EditKnowledgeComponent } from './components/edit-knowledge/edit-knowledge.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './components/shared/angular-material/angular-material.module';

@NgModule({
  declarations: [
    AppComponent,
    ListKnowledgeComponent,
    AddKnowledgeComponent,
    EditKnowledgeComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
