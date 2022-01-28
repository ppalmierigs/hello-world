import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantButtonComponent } from './assistant-button.component'

describe('AssistantButtonComponent', () => {
   let component: AssistantButtonComponent
   let fixture: ComponentFixture<AssistantButtonComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantButtonComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantButtonComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
