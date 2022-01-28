import { NgModule } from '@angular/core'
import { CardModule } from 'primeng/card'
import { SharedModule } from 'src/app/shared.module'
import { AssistantLabelModule } from '../assistant-label/assistant-label.module'
import { AssistantTitleModule } from '../assistant-title/assistant-title.module'
import { AssistantCompleteCardComponent } from './assistant-complete-card.component'

@NgModule({
   declarations: [AssistantCompleteCardComponent],
   imports: [SharedModule, AssistantTitleModule, CardModule, AssistantLabelModule],
   exports: [AssistantCompleteCardComponent],
})
export class AssistantCompleteCardModule {}
