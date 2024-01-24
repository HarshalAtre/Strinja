
// import { GalleryData } from "./GalleryData";
import { useEffect, useState } from "react";
import "./styles/gallery.css";
import {motion} from "framer-motion"
import GalleryCard from "./Card";

function Gallery({GalleryData}) {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.titile))]);
  }, []);

  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.titile === itemData);
    setData(filterData);
  }; 

  return (
    <div className="gallery">
      <div className="galleryWrapper">
        <div className="filterItem">
          <ul>
            <li><motion.button 
           whileHover={{ scale: 1.1 }}
            onClick={() => setData(GalleryData)}>All</motion.button></li>
            {collection.map((item) => (
              <motion.li 
           whileHover={{ scale: 1.1}}
              
              key={item}><button className="_btn"
              
              onClick={() => { gallery_filter(item) }}>{item}</button></motion.li>
            ))}
          </ul>
        </div>
        <div className="galleryContainer">
          {data.map((item) => (
            <motion.div
            initial={{opacity:0}}
            animate={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            // className="galleryItem"
            ><GalleryCard src={item.image} title={item.title}/></motion.div>
            // <motion.div
            // initial={{opacity:0}}
            // animate={{ opacity: 1 }}
           
            // whileHover={{ scale: 1.1,rotate:"1.5deg" }}
            //  key={item.id} className="galleryItem"><img src={item.image} alt={item.title} /></motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Gallery;