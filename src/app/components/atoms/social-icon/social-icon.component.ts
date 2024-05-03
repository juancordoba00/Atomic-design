import { Component, Input } from '@angular/core';

export interface ISocialIcon {
  icon: string;
  link?: string;
}

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss']
})
export class SocialIconComponent {
  @Input() socialIcon: ISocialIcon = {
    icon: '',
  }
}
