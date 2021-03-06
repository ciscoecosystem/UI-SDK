import usersData from "../data/users-data"

export default {
  "title": "Users Table",
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
  "data": usersData,
  "query": {
    "config": "dhcps-list-query"
  },
  "columns": [
    {
      "queryResponseField": "{{id}}",
      "label": "ID",
      "sortable": true
    },
    {
      "queryResponseField": "{{name}}",
      "label": "Name",
      "sortable": true
    },
    {
      "queryResponseField": "{{email}}",
      "label": "Email",
      "sortable": false
    },
    {
      "queryResponseField": "{{username}}",
      "label": "Company",
      "sortable": false
    }
  ]
}
