import { useEffect, useState } from 'react';

type DataObject = {
  url: string;
}

type DataArray = Array<DataObject>

const App = () => {
  const [imageData, setImageData] = useState<DataArray>([]);

  useEffect(() => {
    fetch('https://picsum.photos/200')
      .then(data => {
        return imageData.length < 3 ?
          setImageData([...imageData, { url: data.url }]) :
            null
      })
  }, [imageData.length])

  return (
    <div className='flex flex-col'>
      <h1>Show Images</h1>
      {
        imageData.map((image, index) => {
          return <p key={index}>{image.url}</p>
        })
      }
      <p>butts</p>
    </div>
  );
}

export default App;
