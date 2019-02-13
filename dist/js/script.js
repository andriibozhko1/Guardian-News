import GuardianApp from './components/guardian.js';
import serverRequest from './components/server-request.js';

serverRequest.sendRequest().then((data) => {
  new GuardianApp({
    element: document.querySelector('[data-component="guardian-app"]'),
    data: data,
  })
})