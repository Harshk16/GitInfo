import { Component, Input, OnInit } from "@angular/core";
import { IRepository } from 'src/app/interfaces/IRepository';

@Component({
    selector: "app-repository",
    templateUrl: "./repository.component.html",
    styleUrls: ["./repository.component.scss"]
})

export class RepositoryComponent {
    @Input() repository: IRepository;


}