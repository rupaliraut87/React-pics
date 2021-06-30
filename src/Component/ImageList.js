import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props =>{
    const images = props.images.map((image)=>{
              return <ImageCard key={image.id} image={image} />
        });
    // const images = props.images.map(({id,description,urls})=>{
    //       return <img key={id} alt={description} src={urls.regular}/>
    // });

return <div className="image-list">{images}</div>;

    // return props.images.map(({id,description,urls})=>{
    //   return <img key={id} alt={description} src={urls.regular}/>
    // });

};

export default ImageList;