import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantTitleComponent } from './assistant-title.component'

describe('AssistantTitleComponent', () => {
   let component: AssistantTitleComponent
   let fixture: ComponentFixture<AssistantTitleComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantTitleComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantTitleComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
