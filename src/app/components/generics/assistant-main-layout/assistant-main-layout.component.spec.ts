import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantMainLayoutComponent } from './assistant-main-layout.component'

describe('AssistantMainLayoutComponent', () => {
   let component: AssistantMainLayoutComponent
   let fixture: ComponentFixture<AssistantMainLayoutComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantMainLayoutComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantMainLayoutComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
