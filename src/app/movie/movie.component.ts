import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import {ServApiService} from '../serv-api.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class MovieComponent implements OnInit {

  constructor(private serv: ServApiService) { }

  ngOnInit() {
  }

}
