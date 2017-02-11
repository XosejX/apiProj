import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ServApiService} from '../serv-api.service';

@Component({
    selector: 'app-body-main',
    templateUrl: './body-main.component.html',
    styleUrls: ['./body-main.component.css'],
    animations: [routerTransition()],
    host: {'[@routerTransition]': ''}
})
export class BodyMainComponent implements OnInit {
    name: any;
    
    constructor(private serv: ServApiService) {
        this.name="";
    }

    ngOnInit() {}
    
    getJson(){
        if (this.name.length > 5) {
            this.serv.getMain(this.name);
        }
    }
}
