import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepositoryComponent } from './components/repository/repository.component';
import { UserComponent } from './components/user/user.component';
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';



const routes: Routes = [
  { path: '', component: UserComponent },
  { path: 'repository/:id', component: RepoDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
