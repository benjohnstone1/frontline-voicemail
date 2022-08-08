# Frontline Voicemail

These Twilio serverless functions will allow you to add voicmail to your existing Frontline application, this assumes that you already have a Frontline instance configured, if not see the [quickstart]https://www.twilio.com/docs/frontline/nodejs-demo-quickstart to get started with Frontline

## Setup Requirements

Before we begin, we need to collect all the config values we need to run the application:

-Account SID: Your primary Twilio account identifier - find this in the console [here](https://console.twilio.com/?frameUrl=/console).
-Auth Token:
-Conversation Sid:
-Worker:
-Frontline Service:

## Create a configuration file for your application:

```
cp .env.example .env
```

## Clone & Deploy Twilio Function

Clone Twilio function into your environement deploy Twilio functions

```
twilio:serverless:deploy
```

## Configure Twilio Number

Configure Twilio Phone number

![alt Configure Number](https://github.com/benjohnstone1/frontline-voicemail/blob/main/public/Configure%20Number.png)
