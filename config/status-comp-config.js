export default {
  "type": "statusComponent",
  "message": "Connection Status :",
  "hide": true,
  "position": {
    top: 10,
    right: 10
  },
  "statusMessages": [
    {
      "if": "{{connectionAlive == true}}",
      "message": "Connected"
    },
    {
      "if": "{{connectionAlive == false}}",
      "message": "Not Connected"
    }
  ],
  "query": {
    "config": "connection-status-query",
    fetchInterval: 15,
    "onSuccess": {
      dispatchEvent: [
        {
          "if": "{{connectionAlive == false}}",
          "name": "DISCONNECTED"
        }
      ]
    },
    "onError": {
      dispatchEvent: {
        "name": "CONNECTION_STATUS_ERROR"
      }
    }
  }
}
