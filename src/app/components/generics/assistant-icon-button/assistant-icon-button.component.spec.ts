import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantIconButtonComponent } from './assistant-icon-button.component'

describe('AssistantIconButtonComponent', () => {
   let component: AssistantIconButtonComponent
   let fixture: ComponentFixture<AssistantIconButtonComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantIconButtonComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantIconButtonComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
