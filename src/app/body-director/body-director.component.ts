import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ServApiService} from '../serv-api.service';

@Component({
  selector: 'app-body-director',
  templateUrl: './body-director.component.html',
  styleUrls: ['./body-director.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BodyDirectorComponent implements OnInit {
    constructor(private serv: ServApiService) {}
    ngOnInit() {}
}
