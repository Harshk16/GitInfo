import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRepository } from '../interfaces/IRepository';
import { Observable } from 'rxjs/';

@Injectable({
  providedIn: 'root'
})
export class RespositoryService {

  private BASE_URL = "https://localhost:44362/api/";


  constructor(private http: HttpClient) {
  }

  getRepository(username: string): Observable<any> {
    return this.http.post(this.BASE_URL + 'repo/GetRepos', { username });
  }

  // public getAllTodos(username: string): Observable<IRepository[]> {
  //   return this.http
  //     .get(this.BASE_URL + username + '/repos')
  //     .map(response => {
  //       const todos = response.json();
  //       return todos.map((todo) => new IRepository(todo));
  //     })
  //     .catch(this.handleError);
  // }



  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
