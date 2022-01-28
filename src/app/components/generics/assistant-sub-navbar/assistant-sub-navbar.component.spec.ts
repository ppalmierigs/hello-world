import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantSubNavbarComponent } from './assistant-sub-navbar.component'

describe('AssistantSubNavbarComponent', () => {
   let component: AssistantSubNavbarComponent
   let fixture: ComponentFixture<AssistantSubNavbarComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantSubNavbarComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantSubNavbarComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
