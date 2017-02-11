import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ServApiService} from '../serv-api.service';

@Component({
  selector: 'app-body-actor',
  templateUrl: './body-actor.component.html',
  styleUrls: ['./body-actor.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class BodyActorComponent implements OnInit {
    constructor(private serv: ServApiService) { }
    ngOnInit() {}
}
