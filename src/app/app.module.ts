import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { FilterComponent } from './filter/filter.component';
import { CartComponent } from './cart/cart.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { TestComponent } from './test/test.component';

import { ProductsService } from './products.service';
import { HighlightDirective } from './highlight.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterFormComponent } from './register-form/register-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes = [
  {path: '', redirectTo: 'products', pathMatch: 'full'},
  {path: 'products', pathMatch: 'full', component: ShoppingCartComponent},
  {path: 'products/:id', pathMatch: 'full', component: ProductDetailComponent},
  {path: 'login', component: LoginFormComponent},
  {path: 'register', component: RegisterFormComponent},
  // {path: 'test', component: TestComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    ProductListComponent,
    FilterComponent,
    CartComponent,
    ProductItemComponent,
    ShoppingCartComponent,
    TestComponent,
    HighlightDirective,
    PageNotFoundComponent,
    RegisterFormComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
