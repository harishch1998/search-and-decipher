import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopicClusterComponent } from './topic-cluster.component';

describe('TopicClusterComponent', () => {
  let component: TopicClusterComponent;
  let fixture: ComponentFixture<TopicClusterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopicClusterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopicClusterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
