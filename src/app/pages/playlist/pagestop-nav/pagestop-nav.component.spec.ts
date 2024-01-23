import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagestopNavComponent } from './pagestop-nav.component';

describe('PagestopNavComponent', () => {
  let component: PagestopNavComponent;
  let fixture: ComponentFixture<PagestopNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagestopNavComponent]
    });
    fixture = TestBed.createComponent(PagestopNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
