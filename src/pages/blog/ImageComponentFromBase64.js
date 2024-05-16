import React, { useState, useEffect } from 'react';
import { Image } from 'semantic-ui-react';

function ImageComponentFromBase64({ base64String }) {
  const [imageSource, setImageSource] = useState(null);

  useEffect(() => {
    if (base64String) {
      setImageSource(`data:image/jpeg;base64,${base64String}`);
    }
  }, [base64String]);

  return (
    <div>
      {imageSource && (
        <Image src={imageSource} />
      )}
    </div>
  );
}

export default ImageComponentFromBase64;
