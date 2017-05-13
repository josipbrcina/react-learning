let HTTP = require('../../services/HttpService.js');

let Refulx = require('reflux');
let Actions = require('./Actions.jsx');

let EmailStore = Refulx.createStore({
   listenables: [Actions],
    submitEmail: function (subscriber) {
        HTTP.post('/subscribers', subscriber)
            .then(function (response) {
                let msg = "";
                if (response.status === 200) {
                    msg = "Email submitted!";
                } else {
                    msg = "Submission failed!";
                }
                this.trigger(msg);
            }.bind(this))
    }
});

module.exports = EmailStore;
