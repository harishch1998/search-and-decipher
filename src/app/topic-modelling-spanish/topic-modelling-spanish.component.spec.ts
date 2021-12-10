import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicModellingSpanishComponent } from './topic-modelling-spanish.component';

describe('TopicModellingSpanishComponent', () => {
  let component: TopicModellingSpanishComponent;
  let fixture: ComponentFixture<TopicModellingSpanishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicModellingSpanishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicModellingSpanishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
