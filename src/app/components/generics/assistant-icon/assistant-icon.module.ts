import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantIconComponent } from './assistant-icon.component'

@NgModule({
   declarations: [AssistantIconComponent],
   imports: [SharedModule],
   exports: [AssistantIconComponent],
})
export class AssistantIconModule {}
