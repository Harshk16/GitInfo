import { Component, OnInit } from '@angular/core';
import { IRepository } from 'src/app/interfaces/IRepository';
import { RespositoryService } from 'src/app/services/respository.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repo-detail',
  templateUrl: './repo-detail.component.html',
  styleUrls: ['./repo-detail.component.scss']
})
export class RepoDetailComponent implements OnInit {

  repositories: IRepository;
  param: string
  constructor(private repositoryService: RespositoryService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(param => {
      this.param = param.id;

      this.repositoryService.getRepository('harshk16').subscribe((repos) => {
        this.repositories = repos.filter(x => x.name === this.param)[0];
        console.log("ssfsf", this.repositories);
      });
    });

  }

  ngOnInit() {

  }

}
