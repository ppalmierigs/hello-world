import { Component } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-button',
   templateUrl: './assistant-button.component.html',
   styleUrls: ['./assistant-button.component.scss', './assistant-button-size.component.scss'],
})
export class AssistantButtonComponent extends AssistantCoreBaseComponent {}
