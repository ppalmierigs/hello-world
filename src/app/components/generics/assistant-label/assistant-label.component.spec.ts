import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AssistantLabelComponent } from './assistant-label.component'

describe('AssistantLabelComponent', () => {
   let component: AssistantLabelComponent
   let fixture: ComponentFixture<AssistantLabelComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantLabelComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantLabelComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
