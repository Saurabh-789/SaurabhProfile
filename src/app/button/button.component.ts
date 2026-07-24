import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() buttonName: string = '';

  onButtonClick() {
    if (this.buttonName === 'Download CV') {
      window.open('assets/resume/Saurabh_JavaFullStack_4YOE.pdf', '_blank');
    } else if (this.buttonName === 'Contact Me') {
      window.location.hash = '#footer';
    }
  }
}
