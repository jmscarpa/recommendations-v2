import { Component } from '@angular/core';
import { AppToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent {
  constructor(public toastService: AppToastService) {}
}
