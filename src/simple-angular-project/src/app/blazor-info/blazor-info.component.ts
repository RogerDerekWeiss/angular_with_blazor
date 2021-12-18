import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BlazorAdapterComponent } from '../blazor-adapter/blazor-adapter.component';

@Component({
  selector: 'blazor-info',
  template: '',
})

export class BlazorInfoComponent extends BlazorAdapterComponent {
  @Input() message: string | null = null;
}
