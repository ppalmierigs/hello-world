import { Component, Input } from '@angular/core'

@Component({
   selector: 'app-assistant-main-layout',
   templateUrl: './assistant-main-layout.component.html',
   styleUrls: ['./assistant-main-layout.component.scss'],
})
export class AssistantMainLayoutComponent {
   @Input() titleParam!: string | number
   className = 'AssistantMainLayoutComponent'
}
