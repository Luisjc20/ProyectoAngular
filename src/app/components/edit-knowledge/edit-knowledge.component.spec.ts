import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditKnowledgeComponent } from './edit-knowledge.component';

describe('EditKnowledgeComponent', () => {
  let component: EditKnowledgeComponent;
  let fixture: ComponentFixture<EditKnowledgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditKnowledgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditKnowledgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
