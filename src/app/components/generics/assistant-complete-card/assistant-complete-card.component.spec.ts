import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantCompleteCardComponent } from './assistant-complete-card.component'

describe('AssistantCompleteCardComponent', () => {
   let component: AssistantCompleteCardComponent
   let fixture: ComponentFixture<AssistantCompleteCardComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantCompleteCardComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantCompleteCardComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
