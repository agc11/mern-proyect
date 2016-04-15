import React, {StyleSheet, Dimensions} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "no-link-css": {
        "textDecoration": "none !important"
    },
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
    },
    "login-register": {
        "minHeight": "100%",
        "width": "100%",
        "position": "absolute",
        "backgroundImage": "url('/img/fondo.jpg')",
        "backgroundPosition": "center",
        "backgroundSize": "cover",
        "height": "100%",
        "paddingTop": "12%",
        "paddingRight": "30%",
        "paddingLeft": "30%"
    },
    "login-button": {
        "marginBottom": "20 !important"
    },
    "inner-addon": {
        "position": "relative"
    },
    "inner-addon glyphicon": {
        "position": "absolute",
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "pointerEvents": "none"
    },
    "left-addon glyphicon": {
        "left": 0
    },
    "right-addon glyphicon": {
        "right": 0
    },
    "left-addon input": {
        "paddingLeft": 30
    },
    "right-addon input": {
        "paddingRight": 30
    }
});