import { NgModule } from '@angular/core'
import { SharedModule } from 'src/app/shared.module'
import { NavabarModule } from '../../navabar/navabar.module'
import { SidebarModule } from '../../sidebar/sidebar.module'
import { AssistantMainLayoutComponent } from './assistant-main-layout.component'

@NgModule({
   declarations: [AssistantMainLayoutComponent],
   imports: [SharedModule, NavabarModule, SidebarModule],
   exports: [AssistantMainLayoutComponent],
})
export class AssistantMainLayoutModule {}
