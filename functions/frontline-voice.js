const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

exports.handler = function (context, event, callback) {
    let twiml = new VoiceResponse();
    const conversationSid = context.CONVERSATION_SID;
    const frontlineDomain = context.FRONTLINE_DOMAIN;

    const connect = twiml.connect({
        // If call is not answered record a voicemail
        action: frontlineDomain + "/frontline-record",
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