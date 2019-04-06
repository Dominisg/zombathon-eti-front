import {Constants} from "expo";
import uuid from 'uuid';

const api = Constants.manifest.packagerOpts.dev
  ? Constants.manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
: `api.example.com`;

// const urltoys = `http://172.20.19.194:8000/app/toys`;
// const urltrades = `http://${api}/trades`;

const urltoys = `http://172.20.17.60:3000/toys`;
const urltrades = `http://172.20.17.60:3000/trades`;

export function getToys(){
return fetch(urltoys)
.then(response => response.json()).
//then(resp=>resp.results)
then(resp=>resp)
}

export function getTrades(){
return fetch(urltrades)
.then(response => response.json()).
then(resp=>resp)
}
