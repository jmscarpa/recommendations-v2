import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-empty-state[title][message]',
  templateUrl: './empty-state.component.html',
  styleUrls: ['./empty-state.component.scss']
})
export class EmptyStateComponent {

  @Input() title: string = '';
  @Input() message: string = '';

  constructor() { }

}
