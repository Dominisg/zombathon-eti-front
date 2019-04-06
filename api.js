import {Constants} from "expo";
import uuid from 'uuid';

const api = Constants.manifest.packagerOpts.dev
  ? Constants.manifest.debuggerHost.split(`:`).shift().concat(`:3000`)
: `api.example.com`;

const urltoys = `http://172.20.18.5:8080/app/users/`
const urltrades = `http://${api}/trades`;

// const urltoys = `http://172.20.17.60:3000/toys`;
// const urltrades = `http://172.20.17.60:3000/trades`;

export function getToys(){
return fetch(urltoys)
.then(response => response.json()).
then(resp=>resp.results)
// then(resp=>resp)
}

export function getTrades(){
return fetch(urltrades)
.then(response => response.json()).
then(resp=>resp)
}

export function register2(state) {

console.log(state)

fetch(urltoys, {
  method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  body:
  JSON.stringify({
    username:state.username,email:state.email, password:state.password,
  })
}).then(resp=>resp.json()).then(res => console.log(res))

}
