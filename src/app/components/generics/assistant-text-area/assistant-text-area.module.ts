import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputTextareaModule } from 'primeng/inputtextarea'
import { SharedModule } from 'src/app/shared.module'
import { AssistantTextAreaComponent } from './assistant-text-area.component'

@NgModule({
   declarations: [AssistantTextAreaComponent],
   imports: [SharedModule, InputTextareaModule, ReactiveFormsModule, FormsModule],
   exports: [AssistantTextAreaComponent],
})
export class AssistantTextAreaModule {}
