import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { RadioButtonModule } from 'primeng/radiobutton'
import { SharedModule } from 'src/app/shared.module'
import { AssistantLabelModule } from '../assistant-label/assistant-label.module'
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module'
import { AssistantRadioButtonComponent } from './assistant-radio-button.component'

@NgModule({
   declarations: [AssistantRadioButtonComponent],
   imports: [SharedModule, RadioButtonModule, AssistantSpacerModule, AssistantLabelModule, BrowserModule, FormsModule, ReactiveFormsModule],
   exports: [AssistantRadioButtonComponent],
})
export class AssistantRadioButtonModule {}
