import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCartoesComponent } from './modal-cartoes.component';

describe('ModalCartoesComponent', () => {
  let component: ModalCartoesComponent;
  let fixture: ComponentFixture<ModalCartoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCartoesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCartoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
