const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

exports.handler = function (context, event, callback) {
    const frontlineDomain = conext.FRONTLINE_DOMAIN;
    let twiml = new VoiceResponse();
    twiml.say('Please leave a message at the beep. Press the star key when finished.');
    twiml.record({
        action: frontlineDomain + '/frontline-leave-voicemail',
        method: 'GET',
        maxLength: '20',
        finishOnKey: '*'
    })
    console.log(twiml.toString());
    callback(null, twiml);
};