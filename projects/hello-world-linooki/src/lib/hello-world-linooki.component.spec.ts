import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloWorldLinookiComponent } from './hello-world-linooki.component';

describe('HelloWorldLinookiComponent', () => {
  let component: HelloWorldLinookiComponent;
  let fixture: ComponentFixture<HelloWorldLinookiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelloWorldLinookiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloWorldLinookiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
