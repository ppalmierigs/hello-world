import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantLabelComponent } from './assistant-label.component'

@NgModule({
   declarations: [AssistantLabelComponent],
   imports: [SharedModule],
   exports: [AssistantLabelComponent],
})
export class AssistantLabelModule {}
