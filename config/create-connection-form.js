export default {
  "name": "connectionForm",
  "type": "form",
  "title": "Connect to Infoblox",
  "onFormClose": {
    "dispatchEvent": {
      "name": "HIDE_CONNECTION_CREATION_FORM",
      "data": ""
    }
  },
  "content": [
    {
      "name": "ipAddress",
      "type": "textbox",
      "label": "Infoblox Appliance IP Address",
      "placeholder": "IP Address",
      "format": "string",
      "size": 16,
      "tooptip": "",
      "min": "",
      "max": ""
    },
    {
      "name": "username",
      "type": "textbox",
      "label": "User Name",
      "placeholder": "User Name",
      "format": "string",
      "size": 16,
      "tooptip": "",
      "min": "",
      "max": ""
    },
    {
      "name": "password",
      "type": "encrypted_textbox",
      "label": "Password",
      "placeholder": "Password",
      "format": "string",
      "size": 16,
      "tooptip": "",
      "min": "",
      "max": ""
    },
    {
      "type": "button",
      "label": "Cancel",
      "onClick": "CLOSE_FORM"
    },
    {
      "type": "button",
      "label": "Connect",
			"color": "blue",
      "onClick": "SUBMIT_FORM"
    }
  ],
  "onSubmit": {
    "query": {
      "config": "create-connection-query",
      "params": {
        "ipAddress": "{{connectionForm.ipAddress}}",
        "username": "{{connectionForm.username}}",
        "password": "{{connectionForm.password}}"
      },
      "onProgress": {
        "displayMessage": {
          "message": "Creating connection..."
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
            "name": "CONNECTION_CREATION_SUCCESS"
          },
          {
            "if": "{{success === 0}}",
            "name": "CONNECTION_CREATION_FAILED"
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
