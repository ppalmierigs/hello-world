import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantSpacerComponent } from './assistant-spacer.component'

@NgModule({
   declarations: [AssistantSpacerComponent],
   imports: [SharedModule],
   exports: [AssistantSpacerComponent],
})
export class AssistantSpacerModule {}
