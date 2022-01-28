import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantBoxContainerComponent } from './assistant-box-container.component'

describe('AssistantBoxContainerComponent', () => {
   let component: AssistantBoxContainerComponent
   let fixture: ComponentFixture<AssistantBoxContainerComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantBoxContainerComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantBoxContainerComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
