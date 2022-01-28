import { ComponentFixture, TestBed } from '@angular/core/testing'

import { AssistantVerticalCheckpointsTimelineComponent } from './assistant-vertical-checkpoints-timeline.component'

describe('AssistantVerticalCheckpointsTimelineComponent', () => {
   let component: AssistantVerticalCheckpointsTimelineComponent
   let fixture: ComponentFixture<AssistantVerticalCheckpointsTimelineComponent>

   beforeEach(async () => {
      await TestBed.configureTestingModule({
         declarations: [AssistantVerticalCheckpointsTimelineComponent],
      }).compileComponents()
   })

   beforeEach(() => {
      fixture = TestBed.createComponent(AssistantVerticalCheckpointsTimelineComponent)
      component = fixture.componentInstance
      fixture.detectChanges()
   })

   it('should create', () => {
      expect(component).toBeTruthy()
   })
})
