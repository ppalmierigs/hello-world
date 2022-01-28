import { Component, EventEmitter, Input, Output } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-dialog',
   templateUrl: './assistant-dialog.component.html',
   styleUrls: ['./assistant-dialog.component.scss'],
})
export class AssistantDialogComponent extends AssistantCoreBaseComponent {
   @Input() show: boolean = false
   @Input() closable: boolean = true
   @Input() titleParam: string = ''
   @Input() typeBtn1: string = 'primary'
   @Input() typeBtn0: string = 'alert'
   @Input() labelBtn1: string = ''
   @Input() labelBtn0: string = ''
   @Input() drawUrl?: string

   @Output() clickBtn1 = new EventEmitter()
   @Output() clickBtn0 = new EventEmitter()
   @Output() close = new EventEmitter()
}
