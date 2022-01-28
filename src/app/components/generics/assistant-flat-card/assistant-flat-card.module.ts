import { NgModule } from '@angular/core'
import { CardModule } from 'primeng/card'
import { SharedModule } from 'src/app/shared.module'
import { AssistantFlatCardComponent } from './assistant-flat-card.component'

@NgModule({
   declarations: [AssistantFlatCardComponent],
   imports: [SharedModule, CardModule],
   exports: [AssistantFlatCardComponent],
})
export class AssistantFlatCardModule {}
