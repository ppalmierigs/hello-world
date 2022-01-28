import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantCheckboxComponent } from './assistant-checkbox.component'

describe('AssistantCheckboxComponent', () => {
   let component: AssistantCheckboxComponent
   let fixture: ComponentFixture<AssistantCheckboxComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantCheckboxComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantCheckboxComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
