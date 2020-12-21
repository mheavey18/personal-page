import clouds from "../images/clouds.jpg"
import algae from "../images/algae.jpg"
import foliage from "../images/foliage.jpg"
import dunes from "../images/dunes.jpg"
import paris from "../images/paris.jpg"
import paris2 from "../images/paris2.jpg"
import nyc from "../images/nyc.jpg"


export const themes = {
    1: {
        name: "sea",
        image1: clouds,
        image2: algae,
        headerColor: "#91f2ff",
        contentColor: "white",
        footerColor: "#3102a8",
    },
    2: {
        name: "land",
        image1: foliage,
        image2: dunes,
        headerColor: "white",
        contentColor: "white",
        footerColor: "black",
    },
    3: {
        name: "city",
        image1: nyc,
        image2: paris2,
        headerColor: "white",
        contentColor: "white",
        footerColor: "black",
    }
}

export default themes