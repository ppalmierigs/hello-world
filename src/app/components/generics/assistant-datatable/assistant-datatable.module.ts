import { NgModule } from '@angular/core'
import { ProgressBarModule } from 'primeng/progressbar'
import { SharedModule } from 'src/app/shared.module'
import { AssistantIconButtonModule } from '../assistant-icon-button/assistant-icon-button.module'
import { AssistantIconModule } from '../assistant-icon/assistant-icon.module'
import { AssistantLabelModule } from '../assistant-label/assistant-label.module'
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module'
import { AssistantDatatableComponent } from './assistant-datatable.component'

@NgModule({
   declarations: [AssistantDatatableComponent],
   imports: [SharedModule, AssistantLabelModule, AssistantIconModule, AssistantIconButtonModule, AssistantSpacerModule, ProgressBarModule],
   exports: [AssistantDatatableComponent],
})
export class AssistantDatatableModule {}
