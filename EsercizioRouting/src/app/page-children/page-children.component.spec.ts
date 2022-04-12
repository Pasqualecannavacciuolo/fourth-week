import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageChildrenComponent } from './page-children.component';

describe('PageChildrenComponent', () => {
  let component: PageChildrenComponent;
  let fixture: ComponentFixture<PageChildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageChildrenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageChildrenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
