import { Component, Input } from '@angular/core';

@Component({
  selector: 'custom-icon',
  templateUrl: './custom-icon.component.html',
  styleUrls: ['./custom-icon.component.scss']
})
export class CustomIconComponent {
  @Input() name!: CustomIcon;
  @Input() width: number = 80;
  @Input() color: string = 'currentColor';
  @Input() wrapperClasses: string = '';
  @Input() rotate = 0;
  @Input() transition: string = 'all 0s ease 0s'; // eg: 'all 300ms ease-in-out'
  @Input() tooltip: string = '';
}

export enum CustomIcon {
  'menu' = 'menu',
  'school' = 'school',
  'work' = 'work',
  'reference' = 'reference',
  'message' = 'message',
  'translate' = 'translate',
  'downlode' = 'downlode'
}
