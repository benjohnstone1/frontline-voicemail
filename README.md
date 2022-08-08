# Frontline Voicemail

These serverless functions will allow you to add voicmail to your existing Twilio Frontline application, this assumes that you already have a Frontline instance configured, if not please see the [quickstart](https://www.twilio.com/docs/frontline/nodejs-demo-quickstart) to get started with Frontline.

## Setup Requirements

Before we begin, we need to collect the environment variables we need to run the functions:

- ACCOUNT_SID & AUTH_TOKEN: You can find both of these in the console [here](https://console.twilio.com/?frameUrl=/console).
- CONVERSATION_SID: Your Frontline conversation sid, you can find this [here](https://console.twilio.com/us1/develop/conversations/manage/services?frameUrl=%2Fconsole%2Fconversations%2Fservices)
- WORKER: The worker the voicemail will be routed to, it should be a frontline agent, this variable is expecting an email address
- FRONTLINE_DOMAIN: This will be available after you have deployed the application

## Clone Repo

Clone this repo to your local environment

```
git clone https://github.com/benjohnstone1/frontline-voicemail
cd frontline-voicemail
npm install
```

## Create .env File

Make a copy of the .env.example file to your local environment and update with your environment variables from above (note, we will come back to the FRONTLINE_DOMAIN after you have deployed the twilio function)

```
cp .env.example .env

```

## Clone & Deploy Twilio Functions

We will use the [twilio serverless toolkit](https://www.twilio.com/docs/labs/serverless-toolkit) to deploy the twilio functions to your console
Run the following command from the root folder in order to deploy to your account

```
twilio:serverless:deploy
```

By default, Twilio serverless functions are read-only when deployed using the serverless toolkit, to make the functions editable within the UI run the following command replacing the sid with your function service sid, find your service sid in the console [here](https://console.twilio.com/us1/develop/functions/services?frameUrl=/console/functions/overview/services)

```
twilio api:serverless:v1:services:update \
    --sid ZSXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX \
    --ui-editable
```

## Update Frontline Domain

Now that we have deployed the function we can update the FRONTLINE_DOMAIN, you can either choose to update the .env file and redeploy using `twilio:serverless:deploy` or you can update in the UI.

## Configure Twilio Number

Configure Twilio Phone number

![alt Configure Number](https://github.com/benjohnstone1/frontline-voicemail/blob/main/public/Configure%20Number.png)

## Test

You can now test out this functionality by calling your Twilio phone number.

## Routing

This function will simply route new voicemails to the worker in your enviroment variable, please feel free to use this as a starting point and update as needed
