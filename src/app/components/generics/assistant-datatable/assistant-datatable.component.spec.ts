import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantDatatableComponent } from './assistant-datatable.component'

describe('AssistantDatatableComponent', () => {
   let component: AssistantDatatableComponent
   let fixture: ComponentFixture<AssistantDatatableComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantDatatableComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantDatatableComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
