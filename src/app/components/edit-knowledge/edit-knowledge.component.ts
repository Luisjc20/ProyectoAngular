import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Knowledge } from 'src/app/models/knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';

@Component({
  selector: 'app-edit-knowledge',
  templateUrl: './edit-knowledge.component.html',
  styleUrls: ['./edit-knowledge.component.css'],
})
export class EditKnowledgeComponent implements OnInit {
  myForm!: FormGroup;
  knowledge!: Knowledge;
  idKnowledge: any;

  constructor(
    private fb: FormBuilder,
    private knowledgeService: KnowledgeService,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadKnowledge();
  }

  loadKnowledge() {
    this.idKnowledge = this.route.snapshot.paramMap.get('id');
    this.knowledgeService.getKnowledgeId(this.idKnowledge).subscribe((data) => {
      this.knowledge = data;
      this.myForm = this.fb.group({
        id: this.idKnowledge,
        title: [
          this.knowledge.title,
          [Validators.required, Validators.maxLength(60)],
        ],
        urlToImage: [this.knowledge.urlToImage, [Validators.required]],
        summary: [this.knowledge.summary, [Validators.required]],
        content: [this.knowledge.content],
      });
    });
  }

  updateKnowledge(): void {
    const knowledge: Knowledge = {
      id: this.idKnowledge,
      title: this.myForm.get('title')!.value,
      urlToImage: this.myForm.get('urlToImage')!.value,
      summary: this.myForm.get('summary')!.value,
      content: this.myForm.get('content')!.value,
    };
    this.knowledgeService
      .updateKnowledge(this.idKnowledge, knowledge)
      .subscribe({
        next: (data) => {
          this.snackBar.open('El knowledge fue actualizado con exito!', '', {
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
