import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantFlatCardComponent } from './assistant-flat-card.component'

describe('AssistantFlatCardComponent', () => {
   let component: AssistantFlatCardComponent
   let fixture: ComponentFixture<AssistantFlatCardComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantFlatCardComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantFlatCardComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
