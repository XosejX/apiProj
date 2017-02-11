import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

@Injectable()
export class ServApiService {
    objJsonActor: any;
    objJsonDirector: any;
    objJson: any;
    openM: any;
    api: any;
    error: any;
    
    constructor(private ajax:Http) {
        this.getActor();
        this.getDirector();
    }
    
    getActor(){
        this.api = "http://netflixroulette.net/api/api.php?actor=quentin%20tarantino";
        
        this.ajax.get(this.api).subscribe(        
            data => {this.objJsonActor=data.json()},
            err => console.log(err)
        );
    }
    
    getDirector(){
        this.api = "http://netflixroulette.net/api/api.php?director=quentin%20tarantino";
        
        this.ajax.get(this.api).subscribe(        
            data => {this.objJsonDirector=data.json()},
            err => console.log(err)
        );
    }
    
    getMain(name){
        this.api = "http://netflixroulette.net/api/api.php?actor=" + name;
        
        this.ajax.get(this.api).subscribe(        
            data => {this.objJson=data.json()},
            err => {this.error="true"},
            () => {this.error="false"}
        );
    }
    
    def(mov){
        window.scrollTo(0, 100);
        this.openM = mov;
    }
}
