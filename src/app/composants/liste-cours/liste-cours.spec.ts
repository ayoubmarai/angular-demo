import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListeCoursComponent } from './liste-cours';

describe('ListeCours', () => {
  let component: ListeCoursComponent;
  let fixture: ComponentFixture<ListeCoursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeCoursComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ListeCoursComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
