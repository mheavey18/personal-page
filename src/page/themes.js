import clouds from "../images/clouds.jpg"
import cloudsMini from "../images/clouds_mini.jpg"
import algae from "../images/algae.jpg"
import algaeMini from "../images/algae_mini.jpg"
import foliage from "../images/foliage.jpg"
import foliageMini from "../images/foliage_mini.jpg"
import dunes from "../images/dunes.jpg"
import dunesMini from "../images/dunes_mini.jpg"


export const themes = {
    1: {
        name: "sea",
        image1: clouds,
        image1Mini: cloudsMini,
        image2: algae,
        image2Mini: algaeMini,
        headerColor: "#91f2ff",
        contentColor: "white",
        footerColor: "#3102a8",
    },
    2: {
        name: "land",
        image1: foliage,
        image1Mini: foliageMini,
        image2: dunes,
        image2Mini: dunesMini,
        headerColor: "white",
        contentColor: "white",
        footerColor: "black",
    },
}

export default themes