import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "display": "flex",
        "flexFlow": "row nowrap",
        "backgroundColor": "#eee",
        "backgroundImage": "url('/img/oie_2103621IzOaPHTD.jpg')",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "borderBottom": "1 solid #ccc",
        "height": 300,
        "justifyContent": "center"
    },
    "header > a": {
        "fontSize": 20,
        "textTransform": "uppercase",
        "alignSelf": "center",
        "textDecoration": "none",
        "color": "#A01319"
    }
});