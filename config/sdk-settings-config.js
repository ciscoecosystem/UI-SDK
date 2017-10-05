// update the environment specific details in .evn.development or .env.production files
// each varaible / data item should start with "REACT_APP_"

export default {
  "query": {
    "url": "http://10.23.239.25:5006/graphql.json",
    "headers": [
      {
        "header_name": "DevCookie",
        "cookie_name": "app_Cisco_InfobloxSync_token",
        "message_event_prop": "token",
        "header_value": ""
      },
      {
        "header_name": "APIC-challenge",
        "cookie_name": "app_Cisco_InfobloxSync_urlToken",
        "message_event_prop": "urlToken",
        "header_value": ""
      }
    ]
  }
};
