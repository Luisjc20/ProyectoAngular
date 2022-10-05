import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddKnowledgeComponent } from './components/add-knowledge/add-knowledge.component';
import { EditKnowledgeComponent } from './components/edit-knowledge/edit-knowledge.component';
import { HomeComponent } from './components/home/home.component';
import { ListKnowledgeComponent } from './components/list-knowledge/list-knowledge.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'business/knowledges', component: ListKnowledgeComponent },
  { path: 'admin/knowledge/new', component: AddKnowledgeComponent },
  { path: 'admin/knowledge/edit/:id', component: EditKnowledgeComponent },
  { path: '', redirectTo: 'home ', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
