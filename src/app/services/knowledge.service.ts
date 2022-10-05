import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Knowledge } from '../models/knowledge';

@Injectable({
  providedIn: 'root',
})
export class KnowledgeService {
  basePath: string = environment.basePath;

  constructor(private http: HttpClient) {}

  getKnowledges() {
    return this.http.get<Knowledge[]>(this.basePath);
  }

  getKnowledgeId(id: any) {
    return this.http.get<Knowledge>(`${this.basePath}/${id}`);
  }

  addKnowledge(knowledge: Knowledge) {
    return this.http.post<Knowledge>(this.basePath, knowledge);
  }

  updateKnowledge(id: any, knowledge: Knowledge) {
    return this.http.put<Knowledge>(`${this.basePath}/${id}`, knowledge);
  }

  deleteKnowledge(id: any) {
    return this.http.delete<Knowledge>(`${this.basePath}/${id}`);
  }
}
