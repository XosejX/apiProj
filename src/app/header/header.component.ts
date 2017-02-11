import { Component, OnInit } from '@angular/core';
import {ServThemesService} from '../serv-themes.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    theme: any;
    
    constructor(private serv: ServThemesService) { }

    ngOnInit() {
        this.serv.obs().subscribe(
            data => {
                this.theme=data
            }
        );
    }
    
    changeTheme(){
        this.serv.checkTheme();
    }
}