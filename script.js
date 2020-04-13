import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  stages: [
    {duration: '1s', target: 100},
    {duration: '30s', target: 1500}
  ]
};

let zipcode = Math.floor(Math.random() * (99999 - 10000) + 10000);

export default function() {
  let res = http.get(`http://localhost:3006/homes/${zipcode}`);
  check(res, {
    'status was 200': r => r.status == 200,
    'transaction time OK': r => r.timings.duration < 200
  });
  sleep(1);
}