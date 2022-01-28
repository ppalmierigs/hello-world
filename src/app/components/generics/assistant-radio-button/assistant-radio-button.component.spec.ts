import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantRadioButtonComponent } from './assistant-radio-button.component'

describe('AssistantRadioButtonComponent', () => {
   let component: AssistantRadioButtonComponent
   let fixture: ComponentFixture<AssistantRadioButtonComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantRadioButtonComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantRadioButtonComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
