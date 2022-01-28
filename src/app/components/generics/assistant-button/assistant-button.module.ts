import { NgModule } from '@angular/core'
import { ButtonModule } from 'primeng/button'
import { SharedModule } from 'src/app/shared.module'
import { AssistantButtonComponent } from './assistant-button.component'

@NgModule({
   declarations: [AssistantButtonComponent],
   imports: [SharedModule, ButtonModule],
   exports: [AssistantButtonComponent],
})
export class AssistantButtonModule {}
