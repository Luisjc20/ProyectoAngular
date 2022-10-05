import { Component, OnInit } from '@angular/core';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { Knowledge } from '../../models/knowledge';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  knowledges!: Knowledge[];

  constructor(private knowledgeService: KnowledgeService) {}

  ngOnInit(): void {
    this.knowledgeService.getKnowledges().subscribe((resp: any) => {
      console.log(resp);
      this.knowledges = resp;
    });
  }
}
