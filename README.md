# Frontline Voicemail

These Twilio Function will allow you to add voicmail to your existing Frontline application, this assumes that you already have a Frontline instance configured: https://www.twilio.com/docs/frontline/nodejs-demo-quickstart

## Setup Requirements

Before we begin, we need to collect all the config values we need to run the application:

..*Account SID: Your primary Twilio account identifier - find this in the console [here](https://console.twilio.com/?frameUrl=/console).
..*Auth Token:
..*Conversation Sid:
..*Worker:
..\*Frontline Service:

## Create a configuration file for your application:

cp .env.example .env

## Clone & Deploy Twilio Function

Clone Twilio function into your environement deploy Twilio functions

```
<b>twilio:serverless:deploy</b>
```

## Configure Twilio Number

Configure Twilio Phone number

![alt Configure Number](https://github.com/benjohnstone1/frontline-voicemail/blob/main/public/Configure%20Number.png)
