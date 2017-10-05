import chartsData from "../data/ports-data";

export default {
  "name": "tenantUtilChart",
  "title": "Tenant Utilization View",
  "type": "lineChart",
  "size": "1:1",
  "position": "2",
  "xparam": "intervalStart",
  "yparam": "{{tenantUtilChart.dropdowns.yparam}}",
  "data": chartsData,
  "dropdowns": [
    {
      "name": "yparam",
      "label": "Parameter",
      "placeholder": "Select a parameter",
      "dataProp": "value",
      "type": "dropdown",
      "data": [
        {
          "text": "Ingress drop bytes",
          "value": "bytesRate"
        },
        {
          "text": "Ingress unicast bytes",
          "value": "bytesRateMin"
        },
        {
          "text": "Ingress flood bytes",
          "value": "bytesRateMax"
        }
      ],
      "defaultValue": "bytesRate"
    }
  ]
}
