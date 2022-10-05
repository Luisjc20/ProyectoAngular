import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Knowledge } from 'src/app/models/knowledge';
import { KnowledgeService } from 'src/app/services/knowledge.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-knowledge',
  templateUrl: './list-knowledge.component.html',
  styleUrls: ['./list-knowledge.component.css'],
})
export class ListKnowledgeComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'title',
    'urlToImage',
    'summary',
    'content',
    'actions',
  ];
  dataSource = new MatTableDataSource<Knowledge>();

  knowledges!: Knowledge[];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;

  constructor(
    private knowledgeService: KnowledgeService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.getKnowledges();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getKnowledges() {
    this.knowledgeService.getKnowledges().subscribe((data: Knowledge[]) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }

  deleteKnowledge(id: number) {
    this.knowledgeService.deleteKnowledge(id).subscribe(() => {
      this.dataSource.data = this.dataSource.data.filter((e: Knowledge) => {
        return e.id !== id ? e : false;
      });
      this.snackBar.open('El knowledge fue eliminado con exito!', '', {
        duration: 6000,
      });
    });
  }
}
