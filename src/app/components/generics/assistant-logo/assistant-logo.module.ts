import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantLogoComponent } from './assistant-logo.component'

@NgModule({
   declarations: [AssistantLogoComponent],
   imports: [SharedModule],
   exports: [AssistantLogoComponent],
})
export class AssistantLogoModule {}
