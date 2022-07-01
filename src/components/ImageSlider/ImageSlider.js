import axios from "axios"
import { useState, useEffect } from "react"
import styles from "./ImageSlider.module.css"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io"

const ImageSlider = () => {
    
    const [imageList, setImageList] = useState([])
    const url = "https://picsum.photos/v2/list?page=2&limit=5"

    const fetchImageData = () =>
    axios.get(url).then(response => setImageList(response.data))

    useEffect(()=>{
         fetchImageData()
    },[])

    const [current, setCurrent] = useState(0)
    const length = imageList.length

    const nextSlide = () => {
        current===length-1 ? setCurrent(0) : setCurrent(current+1)
    }

    const previousSlide = () => {
        current===0 ? setCurrent(length-1) : setCurrent(current-1)
    }
    
    return (
        <div className={styles.outerBox}>
        <div className={styles.sliderContainer}>
            <IoIosArrowBack className={`${styles.arrow} ${styles.left}`} onClick={previousSlide} />
            <IoIosArrowForward className={`${styles.arrow} ${styles.right}`} onClick={nextSlide}/>
            {
        imageList.map((image, index) => {
            return(
            index === current && (<img src={image.download_url} className={styles.imageCard} alt="" onClick={event => window.location.href = image.download_url}/>))
})
            }
        </div>
        </div>
    )
}

export default ImageSlider