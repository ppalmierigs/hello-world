import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import AssistantVerticalCheckpointsTimelineElement from 'src/app/models/generics/assistant-vertical-checkpoints-timeline-element'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-vertical-checkpoints-timeline',
   templateUrl: './assistant-vertical-checkpoints-timeline.component.html',
   styleUrls: ['./assistant-vertical-checkpoints-timeline.component.scss'],
})
export class AssistantVerticalCheckpointsTimelineComponent extends AssistantCoreBaseComponent implements OnChanges {
   @Input() elements!: AssistantVerticalCheckpointsTimelineElement[]

   @Input() boxWidth: string = '500px'

   selectedElement!: AssistantVerticalCheckpointsTimelineElement | any
   array: any

   @Output() boxClick = new EventEmitter<AssistantVerticalCheckpointsTimelineElement>()

   @Output() thumbClick = new EventEmitter<AssistantVerticalCheckpointsTimelineElement>()

   ngOnChanges(changes: SimpleChanges): void {
      if (changes.elements) {
         this.array = []
         this.array.push(null)
         this.elements.forEach((element) => {
            this.array.push(element)
         })
         this.array.push(null)
      }
   }
}
