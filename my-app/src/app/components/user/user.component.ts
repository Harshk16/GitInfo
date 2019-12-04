import { Component, Input, OnInit } from "@angular/core";
import { IRepository } from 'src/app/interfaces/IRepository';
import { RespositoryService } from 'src/app/services/respository.service';

@Component({
    selector: "app-user",
    templateUrl: "./user.component.html",
    styleUrls: ["./user.component.scss"]
})

export class UserComponent implements OnInit {

    constructor(private reposService: RespositoryService) {

    }
    user: string;
    disabled: boolean;
    repositories: IRepository[];

    ngOnInit() {

    }

    handleInputChange() {
        if (!!this.user) {
            this.disabled = true;
        } else {
            this.disabled = false;
        }
    }

    Submit() {
        console.log(this.user);
        this.reposService.getRepository(this.user).subscribe((data) => {
            this.repositories = data;
            console.log("this user", this.user);
        });
    }
}