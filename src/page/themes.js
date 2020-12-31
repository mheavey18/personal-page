import clouds from "../images/clouds.jpg"
import cloudsMini from "../images/clouds_mini.jpg"
import algae from "../images/algae.jpg"
import algaeMini from "../images/algae_mini.jpg"
import foliage from "../images/foliage.jpg"
import foliageMini from "../images/foliage_mini.jpg"
import dunes from "../images/dunes.jpg"
import dunesMini from "../images/dunes_mini.jpg"
import stars from "../images/stars.jpg"
import starsMini from "../images/stars_mini.jpg"
import astronaut from "../images/astronaut.jpg"
import astronautMini from "../images/astronaut_mini.jpg"


export const themes = {
    1: {
        name: "relaxed",
        image1: clouds,
        image1Mini: cloudsMini,
        image2: algae,
        image2Mini: algaeMini,
        headerColor: "#91f2ff",
        contentColor: "white",
        footerColor: "#3102a8",
        highlightColor: "black",
        headerFontColor: "black",
        contentFontColor: "#383838",
        footerFontColor: "white",
        primaryFont: "'American Typewriter', serif",
        headerFont: "'American Typewriter', serif",
        contentFont: "'Trebuchet MS', sans-serif",
    },
    2: {
        name: "sharp",
        image1: foliage,
        image1Mini: foliageMini,
        image2: dunes,
        image2Mini: dunesMini,
        headerColor: "white",
        contentColor: "white",
        footerColor: "black",
        highlightColor: "black",
        headerFontColor: "black",
        contentFontColor: "#383838",
        footerFontColor: "white",
        primaryFont: "'Arial', sans-serif",
        headerFont: "'Arial', sans-serif",
        contentFont: "'Arial', sans-serif",
    },
    3: {
        name: "dark",
        image1: stars,
        image1Mini: starsMini,
        image2: astronaut,
        image2Mini: astronautMini,
        headerColor: "black",
        contentColor: "black",
        footerColor: "black",
        highlightColor: "#0014ff",
        headerFontColor: "white",
        contentFontColor: "white",
        footerFontColor: "white",
        primaryFont: "'Arial', sans-serif",
        headerFont: "'Arial', sans-serif",
        contentFont: "'Arial', sans-serif",
    },
}

export default themes