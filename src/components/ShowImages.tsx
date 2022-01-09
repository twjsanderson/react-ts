import { useEffect, useState } from 'react';
import { DataArray } from '../types';

const ShowImages = () => {
    const [imageData, setImageData] = useState<DataArray>([]);

    useEffect(() => {
        fetch('https://picsum.photos/200')
        .then(data => {
            return imageData.length < 5 ?
            setImageData(prevState => [...prevState, { url: data.url }]) :
                null
        })
    }, [imageData.length])

    return (
        <div className='flex flex-col'>
        <h1 className='p-2'>API Images</h1>
        {
            imageData && imageData.map((image, index) => <img key={index} alt='thing kool' className='image p-2' src={image.url} />)
        }
        </div>
    );
}

export default ShowImages;