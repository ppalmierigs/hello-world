import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantImageComponent } from './assistant-image.component'

@NgModule({
   declarations: [AssistantImageComponent],
   imports: [SharedModule],
   exports: [AssistantImageComponent],
})
export class AssistantImageModule {}
