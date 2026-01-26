"use client"; 

import Image, { ImageProps } from "next/image"; 
import { useState } from "react"; 

type Props = ImageProps & { 
  fallbackSrc: string; 
}; 

export default function SafeImage({ fallbackSrc, src, alt, ...props }: Props) { 
  const [imgSrc, setImgSrc] = useState(src); 

  return ( 
    <Image 
      {...props} 
      alt={alt ?? ""}
      src={imgSrc} 
      onError={() => setImgSrc(fallbackSrc)} 
    /> 
  ); 
}
