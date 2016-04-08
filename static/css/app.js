import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "header": {
        "backgroundColor": "#eee",
        "backgroundImage": "url('/img/oie_2103621IzOaPHTD.jpg')",
        "backgroundPosition": "center",
        "backgroundSize": "100% 100%",
        "borderBottom": "1 solid #ccc",
        "width": "100%",
        "height": 270,
        "backgroundRepeat": "no-repeat"
    },
    "article-header": {
        "display": "flex",
        "alignItems": "baseline"
    },
    "article-title": {
        "fontSize": 22,
        "marginRight": 22
    },
    "article-theme": {},
    "button-like": {
        "fontSize": "20 !important",
        "marginRight": "22 !important",
        "cursor": "pointer"
    },
    "button-like:hover": {
        "color": "green"
    },
    "button-dislike": {
        "fontSize": "20 !important",
        "cursor": "pointer"
    },
    "button-dislike:hover": {
        "color": "red"
    },
    "form-article": {
        "marginBottom": 100
    }
});