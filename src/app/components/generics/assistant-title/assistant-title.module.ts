import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantTitleComponent } from './assistant-title.component'

@NgModule({
   declarations: [AssistantTitleComponent],
   imports: [SharedModule],
   exports: [AssistantTitleComponent],
})
export class AssistantTitleModule {}
