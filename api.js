import {Constants} from "expo";
import uuid from 'uuid';
let base64 = require('base-64');

const api = Constants.manifest.packagerOpts.dev
  ? Constants.manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
: `api.example.com`;


const urltoys = `http://172.20.18.5:8080/app/toys/`;
//const urltoys = `http://${api}/toys`;
const urltrades = `http://${api}/trades`;


export function getToys(){
return fetch(urltoys)
.then(response => response.json()).
then(resp=>resp.results)
//then(resp=>resp)
}

export function getTrades(){
return fetch(urltrades)
.then(response => response.json()).
then(resp=>resp)
}

export function logIn(login, password){
let headers = new Headers();
headers.append('Authorization', 'Basic ' + base64.encode(login + ":" + password));
return fetch(urltoys, {method:'GET',
        headers: headers,
       })
.then(response => response)
}


