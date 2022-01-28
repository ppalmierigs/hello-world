import { Component, OnInit } from '@angular/core'
import { LogService } from 'src/app/services/log/log.service'
import { AssistantCoreBaseComponent } from '../assistant-core-base/assistant-core-base.component'

@Component({
   selector: 'app-assistant-complete-card',
   templateUrl: './assistant-complete-card.component.html',
   styleUrls: ['./assistant-complete-card.component.scss', './assistant-complete-card-type.component.scss', './assistant-complete-card-padding.component.scss'],
})
export class AssistantCompleteCardComponent extends AssistantCoreBaseComponent implements OnInit {
   className = 'AssistantCompleteCardComponent'

   bodyHeight!: string

   isMinimized: boolean = false

   constructor(private logService: LogService) {
      super()
   }

   ngOnInit(): void {
      this.logService.info(this.className, this.ngOnInit.name, this.logService.START)
      this.bodyHeight = this.dynamicBodyHeight()
      this.logService.info(this.className, this.ngOnInit.name, this.logService.DONE)
   }

   dynamicBodyHeight(): string {
      this.logService.debug(this.className, this.dynamicBodyHeight.name, this.logService.START)
      let value
      let screenHeight = window.innerHeight
      switch (this.size) {
         case 'xxs': {
            screenHeight = screenHeight * 0.1
            break
         }
         case 'xs': {
            screenHeight = screenHeight * 0.2
            break
         }
         case 's': {
            screenHeight = screenHeight * 0.4
            break
         }
         case 'm': {
            screenHeight = screenHeight * 0.5
            break
         }
         case 'l': {
            screenHeight = screenHeight * 0.6
            break
         }
         case 'xl': {
            screenHeight = screenHeight * 0.8
            break
         }
         case 'xxl': {
            screenHeight = screenHeight * 1
            break
         }
      }

      if (this.verticalExcess != '') {
         let excess: number = +this.verticalExcess.replace('px', '')
         value = screenHeight - excess
      } else {
         value = screenHeight
      }

      value = value + 'px'

      this.logService.debug(this.className, this.dynamicBodyHeight.name, 'value', value)
      this.logService.debug(this.className, this.dynamicBodyHeight.name, this.logService.START)
      return value
   }
}
