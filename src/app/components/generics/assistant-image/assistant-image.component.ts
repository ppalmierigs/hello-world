import { Component, Input } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-image',
   templateUrl: './assistant-image.component.html',
   styleUrls: ['./assistant-image.component.scss'],
})
export class AssistantImageComponent extends AssistantCoreBaseComponent {
   //default mocked image
   @Input() url: string = '../../../../assets/images/mock___modules-single-machine.png'

   //border-color: default value setted to secondary
   border = true
   type = 'secondary'
}
