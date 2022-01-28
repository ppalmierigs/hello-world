import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantTextAreaComponent } from './assistant-text-area.component'

describe('AssistantTextAreaComponent', () => {
   let component: AssistantTextAreaComponent
   let fixture: ComponentFixture<AssistantTextAreaComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantTextAreaComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantTextAreaComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
