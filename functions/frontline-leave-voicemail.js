const VoiceResponse = require("twilio/lib/twiml/VoiceResponse");

exports.handler = async function (context, event, callback) {
    const accountSid = context.ACCOUNT_SID;
    const authToken = context.AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    let convSid = await checkVoiceMailConversation(client);
    if (convSid) {
        let message = await sendMessage(client, convSid, event);
        let twiml = sayGoodbye();
        callback(null, twiml);
    } else {
        console.log('No previous VM conversation found - creating VM conversation');
        let conversation = await createConversation(client);
        let message = await sendMessage(client, conversation.sid, event);
        let twiml = sayGoodbye();
        callback(null, twiml);
    }
};

async function createConversation(client) {
    let conversation = await client.conversations.v1.conversations
        .create({
            friendlyName: 'Voicemail'
        });
    let participant = await client.conversations.v1.conversations(conversation.sid)
        .participants
        .create({
            identity: 'bjohnstone@twilio.com' //rewrite this to get the agent from the conversation?
            // if conversation exists between contact calling and worker then assign the worker identity
            // inject own routing here
        })
    return conversation;
}

function sayGoodbye() {
    let twiml = new VoiceResponse();
    twiml.say('Thank you for leaving your message, someone will reach out as soon as they are available. Goodbye');
    twiml.hangup();
    console.log(twiml.toString());
    return twiml;
}

async function sendMessage(client, convSid, event) {
    const message = await client.conversations.v1.conversations(convSid)
        .messages
        .create({
            author: 'Voicemail',
            body: 'You have a new voicemail from: ' + event.From + '\n\n' + event.RecordingUrl,
            media: {
                content_type: 'audio/mpeg',
                filename: 'voicemail.mp3',
                sid: 'MEf39778bc68fd1104fb6b507c772b4733'
            }
        })
        .catch(e => console.log(e))
        .then(message => console.log(message.media));
    // lets add media to this
    // https://www.twilio.com/docs/conversations/api/media-resource

    return message;
}

async function checkVoiceMailConversation(client) {
    var convSid = '';
    let convs = await client.conversations.v1.conversations.list({});
    for (var c of convs) {
        if (c.friendlyName == 'Voicemail' && c.state != 'closed') {
            convSid = c.sid; {
                break
            }
        }
    }
    return convSid;
}