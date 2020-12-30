import {
    useState,
    useEffect,
} from 'react'

import {
    ImageSection,
    BlurCover,
} from "../page/style.js"

const useProgressiveImg = (lowQualitySrc, highQualitySrc) => {
    const [src, setSrc] = useState(lowQualitySrc)
  
    useEffect(() => {
      setSrc(lowQualitySrc)
  
      const img = new Image()
      img.src = highQualitySrc
  
      img.onload = () => {
        setSrc(highQualitySrc)
      }
    }, [lowQualitySrc, highQualitySrc])
  
    return [src, { blur: src === lowQualitySrc }]
  }

const BlurredUpImage = (props) => {
    const [src, { blur }] = useProgressiveImg(props.smallImage, props.largeImage)
  
    return (
      <ImageSection image={src} blur={blur}>
          <BlurCover blur={blur}>
            {props.children}
          </BlurCover>
      </ImageSection>
    )
  }
  
  export default BlurredUpImage