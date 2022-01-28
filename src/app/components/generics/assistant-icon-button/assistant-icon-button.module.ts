import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { SharedModule } from 'src/app/shared.module'
import { AssistantIconButtonComponent } from './assistant-icon-button.component'

@NgModule({
   declarations: [AssistantIconButtonComponent],
   imports: [SharedModule, ButtonModule],
   exports: [AssistantIconButtonComponent],
})
export class AssistantIconButtonModule {}
