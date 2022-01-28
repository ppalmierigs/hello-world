import { NgModule } from '@angular/core'
import { ProgressSpinnerModule } from 'primeng/progressspinner'
import { SharedModule } from 'src/app/shared.module'
import { AssistantLoaderComponent } from './assistant-loader.component'

@NgModule({
   declarations: [AssistantLoaderComponent],
   imports: [SharedModule, ProgressSpinnerModule],
   exports: [AssistantLoaderComponent],
})
export class AssistantLoaderModule {}
