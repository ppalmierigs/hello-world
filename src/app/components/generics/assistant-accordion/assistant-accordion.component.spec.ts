import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantAccordionComponent } from './assistant-accordion.component'

describe('AssistantAccordionComponent', () => {
   let component: AssistantAccordionComponent
   let fixture: ComponentFixture<AssistantAccordionComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantAccordionComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantAccordionComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
