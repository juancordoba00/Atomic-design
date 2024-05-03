import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WithAtomicDesignComponent } from './components/pages/with-atomic-design/with-atomic-design.component';
import { WithoutAtomicDesignComponent } from './components/pages/without-atomic-design/without-atomic-design.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { ListItemComponent } from './components/atoms/list-item/list-item.component';
import { NavHeaderComponent } from './components/molecules/nav-header/nav-header.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { InputComponent } from './components/atoms/input/input.component';
import { SearchFieldComponent } from './components/molecules/search-field/search-field.component';
import { BurguerMenuComponent } from './components/molecules/burguer-menu/burguer-menu.component';
import { HeaderComponent } from './components/organisms/header/header.component';
import { FooterBottomComponent } from './components/atoms/footer-bottom/footer-bottom.component';
import { SocialIconComponent } from './components/atoms/social-icon/social-icon.component';
import { FooterSocialComponent } from './components/molecules/footer-social/footer-social.component';
import { FooterContactComponent } from './components/molecules/footer-contact/footer-contact.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { CardProductComponent } from './components/molecules/card-product/card-product.component';
import { ProductSectionComponent } from './components/organisms/product-section/product-section.component';
import { MainTemplateComponent } from './components/templates/main-template/main-template.component';

@NgModule({
  declarations: [
    AppComponent,
    WithAtomicDesignComponent,
    WithoutAtomicDesignComponent,
    LogoComponent,
    ListItemComponent,
    NavHeaderComponent,
    ButtonComponent,
    InputComponent,
    SearchFieldComponent,
    BurguerMenuComponent,
    HeaderComponent,
    FooterBottomComponent,
    SocialIconComponent,
    FooterContactComponent,
    FooterComponent,
    CardProductComponent,
    ProductSectionComponent,
    FooterSocialComponent,
    MainTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [MainTemplateComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
