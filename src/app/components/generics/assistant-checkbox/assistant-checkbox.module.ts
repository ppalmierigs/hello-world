import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CheckboxModule } from 'primeng/checkbox'
import { SharedModule } from 'src/app/shared.module'
import { AssistantLabelModule } from '../assistant-label/assistant-label.module'
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module'
import { AssistantCheckboxComponent } from './assistant-checkbox.component'

@NgModule({
   declarations: [AssistantCheckboxComponent],
   imports: [SharedModule, CheckboxModule, AssistantSpacerModule, FormsModule, ReactiveFormsModule, AssistantLabelModule],
   exports: [AssistantCheckboxComponent],
})
export class AssistantCheckboxModule {}
