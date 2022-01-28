import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantColumnLayoutComponent } from './assistant-column-layout.component'

describe('AssistantColumnLayoutComponent', () => {
   let component: AssistantColumnLayoutComponent
   let fixture: ComponentFixture<AssistantColumnLayoutComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantColumnLayoutComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantColumnLayoutComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
