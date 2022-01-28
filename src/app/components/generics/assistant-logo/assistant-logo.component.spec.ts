import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantLogoComponent } from './assistant-logo.component'

describe('AssistantLogoComponent', () => {
   let component: AssistantLogoComponent
   let fixture: ComponentFixture<AssistantLogoComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantLogoComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantLogoComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
