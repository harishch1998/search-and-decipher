import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicChartsComponent } from './topic-charts.component';

describe('TopicChartsComponent', () => {
  let component: TopicChartsComponent;
  let fixture: ComponentFixture<TopicChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
