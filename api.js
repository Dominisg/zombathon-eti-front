import {Constants} from "expo";
import uuid from 'uuid';

const api = Constants.manifest.packagerOpts.dev
  ? Constants.manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
: `api.example.com`;

const urltoys = `http://${api}/toys`;
const urltrades = `http://${api}/trades`;

export function getToys(){
return fetch(urltoys)
.then(response => response.json()).
then(resp=>resp)
}

export function getTrades(){
return fetch(urltrades)
.then(response => response.json()).
then(resp=>resp)
}

