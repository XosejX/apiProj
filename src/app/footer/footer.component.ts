import { Component, OnInit } from '@angular/core';
import {ServThemesService} from '../serv-themes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})

export class FooterComponent implements OnInit {
    theme: any;
    
    constructor(private serv: ServThemesService) {}

    ngOnInit() {
        this.serv.obs().subscribe(
            data => {
                this.theme = data;
            }
        );
    }
}