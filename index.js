var Alexa = require('alexa-sdk');
var _ = require('lodash');
var WebClient = require('slack-client').WebClient;
var moment = require('moment');

var token = process.env.SLACK_API_TOKEN || '';
var channel = process.env.SLACK_CHANNEL || '';
var web = new WebClient(token);

var handlers = {

    'LaunchRequest': function () {
        this.emit('GetWhereAmIIntent');
    },

    'GetWhereAmIIntent': function () {
        var alexainstance = this;
        var employee = _.startCase(this.event.request.intent.slots.employee.value);
        console.log(employee);
        web.users.list({}, function (err, res) {
           var user = (_.find(res.members, ['real_name', employee]));
           if (typeof user == 'undefined') {
               alexainstance.emit(':tell', 'Couldn\'t find that person');
               return;
           }
           web.channels.history(channel, {}, function (err, res) {
              var lastMessage = (_.find(res.messages, ['user', user.id]));
              if (typeof lastMessage == 'undefined') {
                  alexainstance.emit(':tell', user.real_name + ' hasn\'t posted an update recently');
                  return;
              }
              messageDate = moment.unix(lastMessage.ts).fromNow();
                alexainstance.emit(':tell', user.real_name + ': ' + messageDate + ': ' + lastMessage.text);
           });
        });
    }
};

exports.handler = function(event, context, callback){
    var alexa = Alexa.handler(event, context);
    alexa.registerHandlers(handlers);
    alexa.execute();
};
