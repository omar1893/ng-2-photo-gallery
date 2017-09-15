import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from './routes'
import { AlertModule } from 'ngx-bootstrap/ng2-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ImageServiceService } from './image-service.service';
import { FilterPipe } from './filter.pipe';
import { ImageDetailComponent } from './image-detail/image-detail.component';

console.log(RouterModule);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GalleryComponent,
    ImageDetailComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ImageServiceService, FilterPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
