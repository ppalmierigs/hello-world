import { Component } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-box-container',
   templateUrl: './assistant-box-container.component.html',
   styleUrls: ['./assistant-box-container.component.scss', './assistant-box-container-type.component.scss', './assistant-box-container-padding.component.scss'],
})
export class AssistantBoxContainerComponent extends AssistantCoreBaseComponent {}
