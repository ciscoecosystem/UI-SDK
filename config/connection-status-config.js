export default {
  "type": "queryLoader",
  "query": {
    "config": "connection-status-query",
    "onProgress": {
      "displayMessage": {
        "message": "Checking for connetion status"
      }
    },
    "onSuccess": {
      "dispatchEvent": [
        {
          "if": "{{connectionAlive==true and isInitialSyncComplete==true}}",
          "name": "INITIAL_SYNC_COMPLETED"
        },
        {
          "if": "{{connectionAlive==true and isInitialSyncComplete==false}}",
          "name": "CONNECTION_AVAILABLE"
        },
        {
          "if": "{{connectionAlive == false}}",
          "name": "CONNECTION_NOT_AVAILABLE"
        }
      ]
    },
    "onError": {
      "displayMessage": {
        "message": "Error while checking for connectin status"
      },
      dispatchEvent: {
        "name": "CONNECTION_STATUS_ERROR"
      }
    }
  }
};
