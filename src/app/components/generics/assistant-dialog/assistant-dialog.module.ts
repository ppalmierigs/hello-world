import { NgModule } from '@angular/core'
import { DialogModule } from 'primeng/dialog'
import { SharedModule } from 'src/app/shared.module'
import { AssistantButtonModule } from '../assistant-button/assistant-button.module'
import { AssistantImageModule } from '../assistant-image/assistant-image.module'
import { AssistantLabelModule } from '../assistant-label/assistant-label.module'
import { AssistantSpacerModule } from '../assistant-spacer/assistant-spacer.module'
import { AssistantDialogComponent } from './assistant-dialog.component'

@NgModule({
   declarations: [AssistantDialogComponent],
   imports: [SharedModule, DialogModule, AssistantLabelModule, AssistantSpacerModule, AssistantButtonModule, AssistantImageModule],
   exports: [AssistantDialogComponent],
})
export class AssistantDialogModule {}
