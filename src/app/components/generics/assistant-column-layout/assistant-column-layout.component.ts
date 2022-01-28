import { Component, Input } from '@angular/core'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-column-layout',
   templateUrl: './assistant-column-layout.component.html',
   styleUrls: ['./assistant-column-layout.component.scss'],
})
export class AssistantColumnLayoutComponent extends AssistantCoreBaseComponent {
   @Input() leftId: string = 'assistantLeftColumn'

   @Input() rightId: string = 'assistantRightColumn'

   /*
   // excludeNavbarHeight: accepted values like 'true | false';
   @Input() subtractNavbarHeight: boolean = false

   // excludeSubNavbarHeight: accepted values like 'true | false';
   @Input() subtractSubNavbarHeight: boolean = false

   // font size: accepted values like 'xxs | xs | s | m | l | xl | xxl';
   @Input() subNavbarPadding: string = 'm'

   get globalFullHeightClass() {
      if (this.subtractNavbarHeight == true && this.subtractSubNavbarHeight == false) {
         return 'assistant-global-full-height-minus-' + NavabarComponent.NAVBAR_PADDING_SIZE + '-navbar'
      }

      if (this.subtractNavbarHeight == false && this.subtractSubNavbarHeight == true) {
         //return 'assistant-cl-exclude-' + this.subNavbarPadding + '-subnavbar-col'
         return 'assistant-global-full-height-minus-' + this.subNavbarPadding + '-subnavbar'
      }

      if (this.subtractNavbarHeight == true && this.subtractSubNavbarHeight == true) {
         return 'assistant-global-full-height-minus-' + NavabarComponent.NAVBAR_PADDING_SIZE + '-navbar-' + this.subNavbarPadding + '-subnavbar'
      }
      return ''
   }
   */
}
