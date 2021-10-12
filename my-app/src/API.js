/**
 * All the API calls
 */

 
 const BASEURL = '/api';
 
 function selectType(e) {
    // call: POST /api
    return new Promise((resolve, reject) => {
      fetch(BASEURL , {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({code: e.value, score: e.label, date: 0}),
        }).then((response) => {
          if (response.ok) {
            resolve(null);
          } else {
            // analyze the cause of error
            response.json()
              .then((message) => { reject(message); }) // error message in the response body
              .catch(() => { reject({ error: "Cannot parse server response." }) }); // something else
          }
      }).catch(() => { reject({ error: "Cannot communicate with the server." }) }); // connection errors
    });
  }
  const API = {selectType};
export default API;