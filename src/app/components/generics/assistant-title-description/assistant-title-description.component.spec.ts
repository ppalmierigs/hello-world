import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantTitleDescriptionComponent } from './assistant-title-description.component'

describe('AssistantTitleDescriptionComponent', () => {
   let component: AssistantTitleDescriptionComponent
   let fixture: ComponentFixture<AssistantTitleDescriptionComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantTitleDescriptionComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantTitleDescriptionComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
