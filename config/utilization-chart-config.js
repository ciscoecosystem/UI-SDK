import chartsData from "../data/ports-data";

export default {
  "name": "tenantUtilChart",
  "title": "Tenant Utilization View",
  "type": "lineChart",
  "size": "2:1",
  "position": "2",
  "xparam": "{{tenantUtilChart.dropdowns.xparam}}",
  "yparam": "{{tenantUtilChart.dropdowns.yparam}}",
  "data": chartsData,
  "dropdowns": [
    {
      "name": "xparam",
      "label": "Tenant",
      "type": "dropdown",
      "placeholder": "Select a Tenant",
      "dataProp": "value",
      "data": [
        {
          "text": "intervalStart",
          "value": "intervalStart"
        },
        {
          "text": "Interval End",
          "value": "intervalEnd"
        }
      ],
      "defaultValue": "intervalStart"
    },
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
