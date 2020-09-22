import React from 'react';

const ImageList = (props) => {
    const images = props.images;
    return (
        <h1>
            {images.map(({ description, id, urls }) => {
               return <img alt={description} key={id} src={urls.regular} />
            })}
        </h1>
    );
}

export default ImageList;