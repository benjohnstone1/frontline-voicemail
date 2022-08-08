const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

exports.handler = function (context, event, callback) {
    let twiml = new VoiceResponse();
    const conversationSid = context.CONVERSATION_SID

    const connect = twiml.connect({
        // If call not answered record a voicemail
        action: "https://frontline-voicemail-5475-dev.twil.io/frontline-record",
        method: "GET"
    });
    // If call is answered connect to existing conversation
    connect.conversation({
        serviceInstanceSid: conversationSid,
        inboundTimeout: '10'
    });
    console.log(twiml.toString());

    callback(null, twiml);
};