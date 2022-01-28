import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantThumbComponent } from './assistant-thumb.component'

describe('AssistantThumbComponent', () => {
   let component: AssistantThumbComponent
   let fixture: ComponentFixture<AssistantThumbComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantThumbComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantThumbComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
