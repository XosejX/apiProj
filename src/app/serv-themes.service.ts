import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable, Subject} from 'rxjs/Rx';

@Injectable()
export class ServThemesService {

    private bool: Subject<any> = new Subject<any>();
    private bl: any;
    
    constructor() {
        this.bl = false;
    }
    
    checkTheme(){
        if (this.bl){
            this.bl = false;
            this.bool.next(this.bl);
        }
        else {
            this.bl = true;
            this.bool.next(this.bl);
        }
    }
    
    obs(): Observable<any>{
        return this.bool.asObservable();
    }
}