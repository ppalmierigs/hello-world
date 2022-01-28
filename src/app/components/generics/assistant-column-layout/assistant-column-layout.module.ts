import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantColumnLayoutComponent } from './assistant-column-layout.component'

@NgModule({
   declarations: [AssistantColumnLayoutComponent],
   imports: [SharedModule],
   exports: [AssistantColumnLayoutComponent],
})
export class AssistantColumnLayoutModule {}
