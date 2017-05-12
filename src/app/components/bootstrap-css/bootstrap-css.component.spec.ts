import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BootstrapCssComponent } from './bootstrap-css.component';

describe('BootstrapCssComponent', () => {
  let component: BootstrapCssComponent;
  let fixture: ComponentFixture<BootstrapCssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BootstrapCssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BootstrapCssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
