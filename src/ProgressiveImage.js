import { useEffect, useState } from "react";
const ProgressiveImage = (props) => {
  const { height, width, placeholder, src } = props;

  const [imageSrc, setImageSrc] = useState(placeholder);

  useEffect(() => {
    let img = new Image();
    img.src = src;
    img.onload = () => {
      // using set timeout just to delay the load and see it in UI how the image will load
      setTimeout(() => {
        setImageSrc(src);
      }, 3000);
    };
  }, [src]);
  return (
    <img
      src={imageSrc}
      alt="elephant"
      placeholder={placeholder}
      height={height}
      width={width}
    />
  );
};

export default ProgressiveImage;
