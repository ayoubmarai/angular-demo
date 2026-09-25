import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tete } from './tete';

describe('Tete', () => {
  let component: Tete;
  let fixture: ComponentFixture<Tete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tete],
    }).compileComponents();

    fixture = TestBed.createComponent(Tete);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
