import {Constants} from "expo";
import uuid from 'uuid';

const api = Constants.manifest.packagerOpts.dev
  ? Constants.manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
: `api.example.com`;

const url = `http://${api}/toys`;

export function getToys(){
return fetch(url)
.then(response => response.json()).
then(resp=>resp)
}

