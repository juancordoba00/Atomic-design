import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './pages/home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { WithAtomicDesignComponent } from './pages/with-atomic-design/with-atomic-design.component';
import { WithoutAtomicDesignComponent } from './pages/without-atomic-design/without-atomic-design.component';
import { LogoComponent } from './atoms/logo/logo.component';
import { ListItemComponent } from './atoms/list-item/list-item.component';
import { NavHeaderComponent } from './molecules/nav-header/nav-header.component';
import { ButtonComponent } from './atoms/button/button.component';
import { InputComponent } from './atoms/input/input.component';
import { SearchFieldComponent } from './molecules/search-field/search-field.component';
import { BurguerMenuComponent } from './molecules/burguer-menu/burguer-menu.component';
import { HeaderComponent } from './organisms/header/header.component';
import { FooterBottomComponent } from './atoms/footer-bottom/footer-bottom.component';
import { SocialIconComponent } from './atoms/social-icon/social-icon.component';
import { FooterContactComponent } from './molecules/footer-contact/footer-contact.component';
import { FooterComponent } from './organisms/footer/footer.component';
import { CardProductComponent } from './molecules/card-product/card-product.component';
import { ProductSectionComponent } from './organisms/product-section/product-section.component';
import { FooterSocialComponent } from './molecules/footer-social/footer-social.component';
import { MainTemplateComponent } from './templates/main-template/main-template.component';



@NgModule({
  declarations: [
    HomeComponent,
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
    CommonModule,
    MainRoutingModule
  ],
  exports: [MainTemplateComponent],
})
export class MainModule { }
