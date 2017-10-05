export default {
  "type": "queryLoader",
  "query": {
    "config": "sync-status-query",
    "onProgress": {
      "displayMessage": {
        "message": "Checking for sync status"
      }
    },
    "onSuccess": {
      "dispatchEvent": {
        "name": "INITIAL_SYNC_COMPLETED"
      }
    },
    "onError": {
      "displayMessage": {
        "message": "Error while checking for Sync status"
      },
      dispatchEvent: {
        "name": "SYNC_STATUS_ERROR"
      }
    }
  }
}
