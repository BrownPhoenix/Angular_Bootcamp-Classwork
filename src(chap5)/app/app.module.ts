import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './product.component';
import { ProductsComponent } from './products.component';
import { ProductService } from './product.service';
import { RatingComponent } from './rating.component';
import { TruncatePipe } from './truncate.pipe';
import { JumboTronComponent } from './bs-jumbotron.component';

// import { ProductsComponent} from './app.component';


@NgModule({
  declarations: [
    AppComponent,
     ProductComponent,
     ProductsComponent,
     RatingComponent,
     TruncatePipe,
     JumboTronComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
