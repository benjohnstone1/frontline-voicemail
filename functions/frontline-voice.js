const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

exports.handler = function (context, event, callback) {
    let twiml = new VoiceResponse();
    const connect = twiml.connect({
        // If call not answered record a voicemail
        action: "https://frontline-voicemail-5475-dev.twil.io/frontline-record",
        method: "GET"
    });
    // If call is answered connect to existing conversation
    connect.conversation({
        serviceInstanceSid: 'ISf334419dd878400fbb2aec6d0e993284',
        inboundTimeout: '10'
    });
    console.log(twiml.toString());

    callback(null, twiml);
};