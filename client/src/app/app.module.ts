import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductsService } from './services/products.service';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { MainComponent } from './components/main/main.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { BannerItemComponent } from './components/banner-item/banner-item.component';
import { AlbumCarouselComponent } from './components/album-carousel/album-carousel.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { ArtistListClientComponent } from './components/artist-list-client/artist-list-client.component';
import { ProductListClientComponent } from './components/product-list-client/product-list-client.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BuyFormComponent } from './components/buy-form/buy-form.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    ProductFormComponent,
    ProductListComponent,
    ArtistListComponent,
    ArtistFormComponent,
    MainComponent,
    ContactUsComponent,
    BannerItemComponent,
    AlbumCarouselComponent,
    SingleArtistComponent,
    SingleCategoryComponent,
    ArtistListClientComponent,
    ProductListClientComponent,
    SingleProductComponent,
    BuyFormComponent,
    LoginComponent,
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
