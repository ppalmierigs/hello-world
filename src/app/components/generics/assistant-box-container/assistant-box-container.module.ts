import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantBoxContainerComponent } from './assistant-box-container.component'

@NgModule({
   declarations: [AssistantBoxContainerComponent],
   imports: [SharedModule],
   exports: [AssistantBoxContainerComponent],
})
export class AssistantBoxContainerModule {}
