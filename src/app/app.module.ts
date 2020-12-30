import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpModule } from '@angular/http'; 
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ServiceWorkerModule } from '@angular/service-worker';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import { environment } from '../environments/environment';
import { PostsComponent } from './posts/posts.component';
import { HomeComponent, DialogContentExampleDialog } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ThemeService } from './services/theme.service';
import { NewsService } from './services/news.service';

@NgModule({
  exports: [
    MatDialogModule
  ],
  declarations: [
    AppComponent,
    PostsComponent,
    HomeComponent,
    NavbarComponent,
    DialogContentExampleDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [DialogContentExampleDialog],
  providers: [ThemeService, NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
