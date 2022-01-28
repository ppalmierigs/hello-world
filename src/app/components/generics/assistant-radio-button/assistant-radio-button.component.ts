import { Component } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-radio-button',
   templateUrl: './assistant-radio-button.component.html',
   styleUrls: [
      './assistant-radio-button.component.scss',
      './assistant-radio-button-type-primary-secondary-third.component.scss',
      './assistant-radio-button-type-alert-confirm-other.component.scss',
   ],
})
export class AssistantRadioButtonComponent extends AssistantCoreBaseComponent {}
