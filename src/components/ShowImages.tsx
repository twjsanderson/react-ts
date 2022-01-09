import { useEffect, useState } from 'react';
import { DataArray } from '../types';

const ShowImages = () => {
    const [imageData, setImageData] = useState<DataArray>([]);

    const getImages = () => {
        fetch('https://picsum.photos/200')
            .then(data => {
                return imageData.length < 5 ?
                    setImageData(prevState => [...prevState, { url: data.url }]) :
                        null
            })
    }

    useEffect((): any => {
        getImages()
    })

    return (
        <div className='flex flex-col'>
        <h1 className='p-2'>API Images</h1>
        {
            imageData.map((image, index) => {
                return <img 
                    key={index} 
                    alt='thing kool' 
                    className='image p-2' 
                    src={image.url} 
                />
            })
        }
        </div>
    );
}

export default ShowImages;