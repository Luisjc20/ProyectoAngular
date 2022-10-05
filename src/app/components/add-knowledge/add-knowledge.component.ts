import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Knowledge } from 'src/app/models/knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-add-knowledge',
  templateUrl: './add-knowledge.component.html',
  styleUrls: ['./add-knowledge.component.css'],
})
export class AddKnowledgeComponent implements OnInit {
  myForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private knowledgeService: KnowledgeService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.reactiveForm();
  }

  reactiveForm() {
    this.myForm = this.fb.group({
      id: [''],
      title: ['', [Validators.required, Validators.maxLength(60)]],
      urlToImage: ['', [Validators.required]],
      summary: ['', [Validators.required]],
      content: [''],
    });
  }

  saveKnowledge(): void {
    const knowledge: Knowledge = {
      id: 0,
      title: this.myForm.get('title')!.value,
      urlToImage: this.myForm.get('urlToImage')!.value,
      summary: this.myForm.get('summary')!.value,
      content: this.myForm.get('content')!.value,
    };
    this.knowledgeService.addKnowledge(knowledge).subscribe({
      next: (data) => {
        this.snackBar.open('El knowledge fue registrado con exito!', '', {
          duration: 6000,
        });
        this.router.navigate(['/business/knowledges']);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
