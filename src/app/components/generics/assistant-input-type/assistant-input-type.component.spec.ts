import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantInputTypeComponent } from './assistant-input-type.component'

describe('AssistantInputTypeComponent', () => {
   let component: AssistantInputTypeComponent
   let fixture: ComponentFixture<AssistantInputTypeComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantInputTypeComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantInputTypeComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
