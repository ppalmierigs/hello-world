import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { InputTextModule } from 'primeng/inputtext'
import { PasswordModule } from 'primeng/password'
import { SharedModule } from 'src/app/shared.module'
import { AssistantInputTypeComponent } from './assistant-input-type.component'

@NgModule({
   declarations: [AssistantInputTypeComponent],
   imports: [SharedModule, FormsModule, ReactiveFormsModule, InputTextModule, PasswordModule],
   exports: [AssistantInputTypeComponent],
})
export class AssistantInputTypeModule {}
