import React, { useState, useEffect } from 'react'
import GifGridItem from './GifGridItem';

const GifGrid = ( { category } ) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getGifs();
    }, []);

    const getGifs = async() => {

        const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=YpeEcBf4dKxVzjN9WMIV2br8mzN4OWEI`;
        const resp = await fetch (url);
        const {data} = await resp.json();

        const gifs = data.map ( img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        })

        console.log(gifs);
        setImages(gifs);
    }


  return (
    <>
        <h3 className='card animate__animated animate__fadeIn'> {category} </h3>
        <div className='card-grid'>
            {
                images.map( img => (
                    <GifGridItem 
                        key={ img.id }
                        {...img} 
                    />
                ))
            }
        </div>
    </>
  )
}

export default GifGrid
