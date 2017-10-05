const query = {
  "method": "post",
  "graphql_EP": "createDhcpPool",
  "payload": {
    "gridMember":"gridMember",
    "networkView":"networkView",
    "subnet":"subnet",
    "dhcpRangeStart":"dhcpRangeStart",
    "dhcpRangeEnd":"dhcpRangeEnd"
  },
  "response": [
    "success",
    "detail",
    "gridMember",
    "networkView",
    "subnet",
    "dhcpRangeStart",
    "dhcpRangeEnd"
  ]
}

export default query;
