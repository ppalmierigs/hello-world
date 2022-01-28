import { Component } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-text-area',
   templateUrl: './assistant-text-area.component.html',
   styleUrls: ['./assistant-text-area.component.scss', './assistant-text-area-size.component.scss'],
})
export class AssistantTextAreaComponent extends AssistantCoreBaseComponent {}
