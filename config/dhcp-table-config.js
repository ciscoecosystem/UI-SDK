import dhcpsList from "../data/dhcp-data"

export default {
  "name": "dhcpTable",
  "title": "DHCP Range Table",
  "type": "table",
  "size": "1:1",
  "position": "1",
  "semantic_sortable": true,
  "semantic_celled": true,
  "semantic_color": "grey",
  "semantic_inverted": false,
  "semantic_textAlign": "left",
  "semantic_verticalAlign": "bottom",
  "semantic_striped": false,
  "semantic_className": "",
  "pagination": false,
  "data": dhcpsList,
  "query": {
    "config": "dhcps-list-query"
  },
  "columns": [
    {
      "queryResponseField": "{{gridMember}}",
      "label": "Grid Member",
      "sortable": true
    },
    {
      "queryResponseField": "{{networkView}}",
      "label": "Network View",
      "popup": {
        "content": "{{subnet}}",
        "on": "hover",
        "inverted": false
      },
      "sortable": true
    },
    {
      "queryResponseField": "{{subnet}}",
      "label": "Subnet",
      "sortable": false
    },
    {
      "queryResponseField": "{{dhcpRangeStart}}",
      "label": "DHCP Range Start",
      "sortable": false
    },
    {
      "queryResponseField": "{{dhcpRangeEnd}}",
      "label": "DHCP Range End",
      "sortable": false
    },
    {
      "queryResponseField": "{{poolUtilization}}",
      "label": "Usage",
      "sortable": false
    },
    {
      "type": "DELETE_ROW",
      "label": "Action",
      /*"popup": {
        "content": "It will delete the dhcp item"
      },*/
      "onClick": {
        "query": {
          "config": "delete-dhcp-query",
          "params": {
            "gridMember":"{{gridMember}}",
            "networkView":"{{networkView}}",
            "subnet":"{{subnet}}",
            "dhcpRangeStart":"{{dhcpRangeStart}}",
            "dhcpRangeEnd":"{{dhcpRangeEnd}}",
          },
          "onProgress": {
            "displayMessage": {
              "message": "Deleting DHCP Item"
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
                "name": "DHCP_POOL_DELETION_SUCCESS"
              }
            ]
          },
          "onError": {
            "displayMessage":{
              "message": "Error while deleting DHCP item"
            }
          }
        }
      }
    }
  ],
  "listenFor": [
    {
      "name": "DHCP_POOL_CREATION_SUCCESS",
      "action": {
        "name": "SDK.ACTION.REFRESH_DATA"
      }
    },
    {
      "name": "DHCP_POOL_DELETION_SUCCESS",
      "action": {
        "name": "SDK.ACTION.REFRESH_DATA"
      }
    }
  ]
}
