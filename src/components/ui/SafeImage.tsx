"use client"; 

import Image, { ImageProps } from "next/image"; 
import { useState } from "react"; 

type Props = ImageProps & { 
  fallbackSrc: string; 
}; 

export default function SafeImage({ fallbackSrc, src, ...props }: Props) { 
  const [imgSrc, setImgSrc] = useState(src); 

  return ( 
    <Image 
      {...props} 
      src={imgSrc} 
      onError={() => setImgSrc(fallbackSrc)} 
    /> 
  ); 
}