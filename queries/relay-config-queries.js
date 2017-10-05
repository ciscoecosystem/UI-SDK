const gridProptiesQuery = {
  "method": "post",
	"graphql_EP": "getInfobloxGridProperties",
  "payload": "",
  "response": [
    "itemLabel",
    "itemFlagged",
    "gridMember",
    "lanIp",
    "dhcpService"
	]
};

const relayConfigQuery = {
  "method": "post",
	"graphql_EP": "getDhcpRelayConfig",
  "payload": "",
  "response": [
    "itemLabel",
    "itemFlagged",
    "relayPolicy",
    "providerTenant",
    "providerApp",
    "providerEpg",
    "serverIp",
    "endPointName"
	]
};

const dhcpRangeQuery = {
  "method": "post",
	"graphql_EP": "getDhcpRangeTable",
  "payload": "",
  "response": [
    "itemLabel",
    "itemFlagged",
    "tenant",
    "bridgeDomain",
    "configuredRange",
    "dhcpRelayPolicy"
	]
};

const faultsQuery = {
  "method": "post",
	"graphql_EP": "getFaultsTable",
  "payload": "",
  "response": [
    "itemLabel",
    "description"
	]
};


const query = {
  "gridProptiesQuery": gridProptiesQuery,
  "relayConfigQuery": relayConfigQuery,
  "dhcpRangeQuery": dhcpRangeQuery,
  "faultsQuery": faultsQuery
}

export default query;
