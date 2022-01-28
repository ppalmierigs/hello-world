import { Component } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-icon-button',
   templateUrl: './assistant-icon-button.component.html',
   styleUrls: [
      './assistant-icon-button.component.scss',
      './assistant-icon-button-type-primary-secondary-third.component.scss',
      './assistant-icon-button-type-alert-confirm-other.component.scss',
   ],
})
export class AssistantIconButtonComponent extends AssistantCoreBaseComponent {}
