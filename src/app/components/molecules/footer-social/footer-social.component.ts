import { Component } from '@angular/core';
import { ISocialIcon } from '../../atoms/social-icon/social-icon.component';


@Component({
  selector: 'app-footer-social',
  templateUrl: './footer-social.component.html',
  styleUrls: ['./footer-social.component.scss'],
})
export class FooterSocialComponent {
  socialNetworks: ISocialIcon[] = [
    {
      icon: '../assets/facebook.png',
    },
    {
      icon: '../assets/gorjeo.png',
    },
    {
      icon: '../assets/social.png',
    },
  ];
}
