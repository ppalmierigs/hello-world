import { NgModule } from '@angular/core'
import { ProgressBarModule } from 'primeng/progressbar'
import { TimelineModule } from 'primeng/timeline'
import { SharedModule } from 'src/app/shared.module'
import { AssistantDatatableModule } from '../assistant-datatable/assistant-datatable.module'
import { AssistantLabelModule } from '../assistant-label/assistant-label.module'
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module'
import { AssistantVerticalCheckpointsTimelineComponent } from './assistant-vertical-checkpoints-timeline.component'

@NgModule({
   declarations: [AssistantVerticalCheckpointsTimelineComponent],
   imports: [SharedModule, TimelineModule, ProgressBarModule, AssistantLabelModule, AssistantDatatableModule],
   exports: [AssistantVerticalCheckpointsTimelineComponent],
})
export class AssistantVerticalCheckpointsTimelineModule {}
