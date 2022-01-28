import { NgModule } from '@angular/core'
import { AccordionModule } from 'primeng/accordion'
import { SharedModule } from 'src/app/shared.module'
import { AssistantAccordionComponent } from './assistant-accordion.component'

@NgModule({
   declarations: [AssistantAccordionComponent],
   imports: [SharedModule, AccordionModule],
   exports: [AssistantAccordionComponent],
})
export class AssistantAccordionModule {}
