import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantTitleDescriptionComponent } from './assistant-title-description.component'

@NgModule({
   declarations: [AssistantTitleDescriptionComponent],
   imports: [SharedModule],
   exports: [AssistantTitleDescriptionComponent],
})
export class AssistantTitleDescriptionModule {}
