const URL = `http://content.guardianapis.com/search?api-key=test`;

const serverRequest = {
  sendRequest() {
    return new Promise((resolve, rejected) => {
      fetch(URL).then(response => {
        return response.json();
      }).then(result => {
        resolve(result);
      })
    })
  }
}

export default serverRequest;