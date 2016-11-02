import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import  'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username = 'snagy22000';
    private client_id = '5dca4976e13a47bbad8c';
    private client_secrect = '8f513f6b62c28b2c3af66f75666c7d051ee98b61';

    constructor(private _http:Http){
        console.log("Github Service init");
    }

    getUser(){
       return this._http.get('https://api.github.com/users/' + this.username)
        .map(res => res.json());

    }

     getRepos(){
       return this._http.get('https://api.github.com/users/' + this.username + '/repos')
        .map(res => res.json());

    }

    updateUserName(username:string){
        this.username = username;
    }
}

