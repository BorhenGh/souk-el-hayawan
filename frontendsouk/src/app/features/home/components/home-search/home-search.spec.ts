import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSearch } from './home-search';

describe('HomeSearch', () => {
  let component: HomeSearch;
  let fixture: ComponentFixture<HomeSearch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSearch],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeSearch);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
