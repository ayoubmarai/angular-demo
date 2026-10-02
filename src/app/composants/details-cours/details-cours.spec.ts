import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsCours } from './details-cours';

describe('DetailsCours', () => {
  let component: DetailsCours;
  let fixture: ComponentFixture<DetailsCours>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsCours],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailsCours);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
