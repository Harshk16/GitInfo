import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepositoryComponent } from './components/repository/repository.component';
import { RespositoryService } from './services/respository.service';
import { HttpClientModule } from '@angular/common/http';
import { RepositoryListComponent } from "./components/repository-list/repository-list.component";
import { UserComponent } from './components/user/user.component';
import { FormsModule } from "@angular/forms";
import { RepoDetailComponent } from './components/repo-detail/repo-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    RepositoryComponent,
    RepositoryListComponent,
    UserComponent,
    RepoDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [RespositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
