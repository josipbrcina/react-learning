let Fetch = require('whatwg-fetch');
let baseUrl = 'http://localhost:6069';

let service = {
    get: function(url) {
        return fetch(baseUrl + url)
            .then(function(response) {
                return response.json();
            });
    },
    post: function (url, body) {
        return fetch(baseUrl + url, {
            headers: {
                'Accept': 'text/plain',
                'Content-Type': 'application/json',
            },
            method: 'post',
            body: JSON.stringify(body)
        }).then(function (response) {
            return response;
        });
    }
};

module.exports = service;
