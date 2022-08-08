const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

exports.handler = function (context, event, callback) {
    let twiml = new VoiceResponse();
    twiml.say('Please leave a message at the beep. Press the star key when finished.');
    twiml.record({
        action: 'https://frontline-voicemail-5475-dev.twil.io/frontline-leave-voicemail',
        method: 'GET',
        maxLength: '20',
        finishOnKey: '*'
    })
    console.log(twiml.toString());
    callback(null, twiml);
};