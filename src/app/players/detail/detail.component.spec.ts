import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayersDetailComponent } from './detail.component';

describe('PlayersDetailComponent', () => {
  let component: PlayersDetailComponent;
  let fixture: ComponentFixture<PlayersDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayersDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayersDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
