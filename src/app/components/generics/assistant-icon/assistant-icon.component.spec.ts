import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantIconComponent } from './assistant-icon.component'

describe('AssistantIconComponent', () => {
   let component: AssistantIconComponent
   let fixture: ComponentFixture<AssistantIconComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantIconComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantIconComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
