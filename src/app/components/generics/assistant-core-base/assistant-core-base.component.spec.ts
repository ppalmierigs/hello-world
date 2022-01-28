import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantCoreBaseComponent } from './assistant-core-base.component'

describe('AssistantCoreBaseComponent', () => {
   let component: AssistantCoreBaseComponent
   let fixture: ComponentFixture<AssistantCoreBaseComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantCoreBaseComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantCoreBaseComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
