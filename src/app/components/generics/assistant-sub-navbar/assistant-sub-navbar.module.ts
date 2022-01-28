import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { AssistantSubNavbarComponent } from './assistant-sub-navbar.component'

@NgModule({
   declarations: [AssistantSubNavbarComponent],
   imports: [SharedModule],
   exports: [AssistantSubNavbarComponent],
})
export class AssistantSubNavbarModule {}
