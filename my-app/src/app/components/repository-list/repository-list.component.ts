import { Component, Input, OnInit } from "@angular/core";
import { IRepository } from 'src/app/interfaces/IRepository';
import { RespositoryService } from 'src/app/services/respository.service';

@Component({
    selector: "app-repository-list",
    templateUrl: "./repository-list.component.html",
    styleUrls: ["./repository-list.component.scss"]
})

export class RepositoryListComponent implements OnInit {
    repositories: IRepository[];

    constructor(private repositoryService: RespositoryService) {

    }

    ngOnInit() {
        this.repositoryService.getRepository('harshk16').subscribe((repos) => {
            this.repositories = repos;
        });
    }

}