import { MetadataRoute } from "next"; 
  
 export default function sitemap(): MetadataRoute.Sitemap { 
   return [ 
     { 
       url: "https://www.syren.travel", 
       lastModified: new Date(), 
     }, 
   ]; 
 }
