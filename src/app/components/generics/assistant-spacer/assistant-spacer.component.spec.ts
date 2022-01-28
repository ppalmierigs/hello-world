import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantSpacerComponent } from './assistant-spacer.component'

describe('AssistantSpacerComponent', () => {
   let component: AssistantSpacerComponent
   let fixture: ComponentFixture<AssistantSpacerComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantSpacerComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantSpacerComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
