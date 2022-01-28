import { Component, Input } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-thumb',
   templateUrl: './assistant-thumb.component.html',
   styleUrls: ['./assistant-thumb.component.scss'],
})
export class AssistantThumbComponent extends AssistantCoreBaseComponent {
   //default mocked thumb
   @Input() url: string = '../../../../assets/images/mock___modules-single-machine_thumb.png'

   //border-color: default value setted to secondary
   border = true
   type = 'secondary'
}
