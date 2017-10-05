export default {
  "name": "dhcpPoolForm",
  "type": "form",
  "title": "Create DHCP Pool",
  "onFormClose": {
    "dispatchEvent": {
      "name": "HIDE_DHCP_POOL_CREATION_FORM"
    }
  },
  "content": [
    {
      "name": "gridMember",
      "type": "dropdown",
      "placeholder": "Select a grid member",
      "label": "Grid Member",
      "dataProp": "",
      "query": {
        "config": "grid-members-list-query"
      }
    },
    {
      "name": "networkView",
      "type": "dropdown",
      "placeholder": "Select network view",
      "label": "Network View",
      "dataProp": "",
      "onChange": {
        "dispatchEvent": {
          "name": "DHCP_POOL_CREATION_FORM_NETWORK_VIEW_CHANGED",
          "data": "{{dhcpPoolForm.networkView}}"
        }
      },
      "query": {
        "config": "network-views-list-query"
      }
    },
    {
      "name": "subnet",
      "type": "dropdown",
      "placeholder": "Select Subnet",
      "label": "Subnet",
      "dataProp": "",
      "listenFor": {
        "name": "DHCP_POOL_CREATION_FORM_NETWORK_VIEW_CHANGED",
        "action": {
          "name": "SDK.ACTION.FETCH_DATA"
        }
      },
      "query": {
        "config": "subnets-list-query",
        "params": {
          "name": "{{dhcpPoolForm.networkView}}"
        },
        "dataAs": "subnets"
      }
    },
    {
      "name": "dhcpRangeStart",
      "type": "textbox",
      "label": "DHCP Range Start",
      "placeholder": "DHCP range start",
      "format": "string",
      "size": 16,
      "tooptip": "",
      "min": "",
      "max": ""
    },
    {
      "name": "dhcpRangeEnd",
      "type": "textbox",
      "label": "DHCP Range End",
      "placeholder": "DHCP range end",
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
      "label": "Create",
			"color": "blue",
      "onClick": "SUBMIT_FORM"
    }
  ],
  "onSubmit": {
    "query": {
      "config": "add-dhcp-query",
      "params": {
        "gridMember": "{{dhcpPoolForm.gridMember}}",
        "networkView": "{{dhcpPoolForm.networkView}}",
        "subnet": "{{dhcpPoolForm.subnet}}",
        "dhcpRangeStart": "{{dhcpPoolForm.dhcpRangeStart}}",
        "dhcpRangeEnd": "{{dhcpPoolForm.dhcpRangeEnd}}"
      },
      "onProgress": {
        "displayMessage": {
          "message": "Creating DHCP Pool..."
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
            "name": "DHCP_POOL_CREATION_SUCCESS"
          },
          {
            "if": "{{success === 0}}",
            "name": "DHCP_POOL_CREATION_FAILED"
          }
        ]
      },
      "onError": {
        "dispatchEvent": {
          "name": "DHCP_POOL_CREATION_ERROR"
        }
      }
    }
  }
}
