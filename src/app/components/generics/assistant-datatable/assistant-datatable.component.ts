import { Component, Input } from '@angular/core'
import AssistantDTRowData from 'src/app/models/assistant-dt-row-data'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-datatable',
   templateUrl: './assistant-datatable.component.html',
   styleUrls: ['./assistant-datatable.component.scss'],
})
export class AssistantDatatableComponent extends AssistantCoreBaseComponent {
   @Input() data: AssistantDTRowData[] = []
}
