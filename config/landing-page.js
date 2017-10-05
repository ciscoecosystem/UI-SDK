import Header from "../components/header/header"

export default {
  "type": "page",
  "fluid": true,
  content: [
    {
      type: "userdefined",
      component: Header
    },
    {
      "type": "icon",
      "name": "setting",
      "size": "large",
      "position": {
        "right": "0px",
        "top": "-40px"
      }
    },
    "tab-config"
  ]
}
