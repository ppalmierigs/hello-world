import { Component, Input } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-accordion',
   templateUrl: './assistant-accordion.component.html',
   styleUrls: ['./assistant-accordion.component.scss'],
})
export class AssistantAccordionComponent extends AssistantCoreBaseComponent {
   @Input() show: boolean = false
}
