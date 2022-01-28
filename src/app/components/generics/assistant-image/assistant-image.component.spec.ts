import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantImageComponent } from './assistant-image.component'

describe('AssistantImageComponent', () => {
   let component: AssistantImageComponent
   let fixture: ComponentFixture<AssistantImageComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantImageComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantImageComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
