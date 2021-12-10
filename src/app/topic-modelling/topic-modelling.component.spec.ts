import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicModellingComponent } from './topic-modelling.component';

describe('TopicModellingComponent', () => {
  let component: TopicModellingComponent;
  let fixture: ComponentFixture<TopicModellingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicModellingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicModellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
