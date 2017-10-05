export default {
  "name": "disconnectionForm",
  "type": "form",
  "title": "Disconnect from Infoblox",
  "content": [
    {
      "type": "statictext",
      "text": "Do you want to disconnect?"
    },
    {
      "type": "button",
      "label": "Cancel",
      "onClick": "CLOSE_FORM"
    },
    {
      "type": "button",
      "label": "Disconnect",
			"color": "blue",
      "onClick": "SUBMIT_FORM"
    }
  ],
  "onSubmit": {
    "query": {
      "config": "disconnect-query",
      "params": {},
      "onProgress": {
        "displayMessage": {
          "message": "Disconnecting..."
        }
      },
      "onSuccess": {
        "displayMessage": [
          {
            "if": "{{success === 1}}",
            "message": "{{detail}}"
          },
          {
            "if": "{{success === 0}}",
            "message": "{{detail}}"
          }
        ],
        "dispatchEvent": [
          {
            "if": "{{success === 1}}",
            "name": "DISCONNECTION_SUCCESS"
          },
          {
            "if": "{{success === 0}}",
            "name": "DISCONNECTION_FAILED"
          }
        ]
      },
      "onError": {
        "dispatchEvent": {
          "name": "CONNECTION_CREATION_ERROR"
        }
      }
    }
  }
}
