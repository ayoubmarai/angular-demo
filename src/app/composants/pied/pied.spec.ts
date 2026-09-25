import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pied } from './pied';

describe('Pied', () => {
  let component: Pied;
  let fixture: ComponentFixture<Pied>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pied],
    }).compileComponents();

    fixture = TestBed.createComponent(Pied);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
