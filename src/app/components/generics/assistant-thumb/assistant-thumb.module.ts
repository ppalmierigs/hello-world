import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantThumbComponent } from './assistant-thumb.component'

@NgModule({
   declarations: [AssistantThumbComponent],
   imports: [SharedModule],
   exports: [AssistantThumbComponent],
})
export class AssistantThumbModule {}
