const config = require('./config.json');
const card = {    "type": "AdaptiveCard",
    "$schema": "https://adaptivecards.io/schemas/adaptive-card.json",
    "version": "1.5",
    "body": [
        {
            "type": "Image",
            "separator": true,
            "horizontalAlignment": "Center",
            "url": `${config.logo_url}`,
            "spacing": "Padding"
        }, {
            "type": "Container",
            items: [
                {
                    "type": "TextBlock",
                    "text": `${config.server_quote}`,
                    "wrap": true,
                    "maxLines": 2,
                    "spacing": "Padding",
                    "horizontalAlignment": "Center",
                    "separator": true,
                    "fontType": "Default",
                    "size": "ExtraLarge",
                    "weight": "Bolder",
                    "color": "Light"
                }]}, {
            "type": "TextBlock",
            "wrap": true,
            "text": `${config.server_desc}`,
            "maxLines": 8,
            "separator": true,
            "spacing": "Padding",
            "horizontalAlignment": "Center",
            "fontType": "Default",
            "style": "default",
            "size": "Large",
            "weight": "Default",
            "color": "Warning"
        }, {
            "type": "Container",
            "items": [{
                    "type": "ActionSet",
                    "horizontalAlignment": "Center",
                    "spacing": "Small",
                    "actions": [
                        {
                            "type": "Action.OpenUrl",
                            "title": "Discord",
                            "id": "discord",
                            "url": `${config.discord_invite}`,
                            "iconUrl": "icon:People"
                        }, {
                            "type": "Action.Submit",
                            "title": "Connect",
                            "id": "connect",
                            "associatedInputs": "auto",
                            "iconUrl": "icon:Play"
                        }, {
                            "type": "Action.OpenUrl",
                            "title": "Website",
                            "id": "website",
                            "url": `${config.website}`,
                            "iconUrl": "icon:GlobeDesktop"
                        }]}],
            "separator": true,
            "spacing": "Padding"
        }, {
            "type": "ProgressBar",
            "value": 100,
            "horizontalAlignment": "Center",
            "color": "Good"
        }],
    "backgroundImage": {
        "horizontalAlignment": "Center",
        "verticalAlignment": "Center"
    }};
AddEventHandler('playerConnecting', function(name, setKickReason, deferrals) {
    deferrals.defer()
    setInterval(() => {
        deferrals.presentCard(card, function(data, rawData) {
            if (rawData) {
                deferrals.done();
            }
        });
    }, 500);
    setTimeout(() => {
        deferrals.done();
    }, `${config.timeout}`);
});