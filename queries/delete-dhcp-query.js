const query = {
  "method": "post",
  "graphql_EP": "deleteDhcpPool",
  "payload": {
    "gridMember":"gridMember",
    "networkView":"networkView",
    "subnet":"subnet",
    "dhcpRangeStart":"dhcpRangeStart",
    "dhcpRangeEnd":"dhcpRangeEnd",
  },
  "response": [
    "success",
    "detail"
  ]
}

export default query;
