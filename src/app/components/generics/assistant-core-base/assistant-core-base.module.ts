import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { AssistantCoreBaseComponent } from './assistant-core-base.component'

@NgModule({
   declarations: [AssistantCoreBaseComponent],
   imports: [CommonModule],
   exports: [AssistantCoreBaseComponent],
})
export class AssistantCoreBaseModule {}
