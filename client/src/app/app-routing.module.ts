import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ArtistListComponent } from './components/artist-list/artist-list.component';
import { ArtistFormComponent } from './components/artist-form/artist-form.component';
import { MainComponent } from './components/main/main.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SingleArtistComponent } from './components/single-artist/single-artist.component';
import { SingleCategoryComponent } from './components/single-category/single-category.component';
import { ArtistListClientComponent } from './components/artist-list-client/artist-list-client.component';
import { ProductListClientComponent } from './components/product-list-client/product-list-client.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { BuyFormComponent } from './components/buy-form/buy-form.component';
import { LoginComponent } from './components/login/login.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'products', component: ProductListClientComponent },
  { path: 'products/:id', component: SingleProductComponent },
  { path: 'admin/products', component: ProductListComponent ,data: { register: true }},
  { path: 'admin/products/add', component: ProductFormComponent ,data: { register: true }},
  { path: 'admin/products/edit/:id', component: ProductFormComponent,data: { register: true } },
  { path: 'artists', component: ArtistListClientComponent },
  { path: 'admin/artists', component: ArtistListComponent,data: { register: true } },
  { path: 'artists/products/:id', component:SingleArtistComponent },
  { path: 'admin/artists/add', component: ArtistFormComponent,data: { register: true } },
  { path: 'admin/artists/edit/:id', component: ArtistFormComponent,data: { register: true } },
  { path: 'contact', component: ContactUsComponent},
  { path: 'category/:id', component: SingleCategoryComponent },
  { path: 'comprar/:id/:cant', component: BuyFormComponent },
  { path: 'login', component: LoginComponent, data: { register: true } },
  { path: 'admin', component: AdminHomeComponent, data: { register: true } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
