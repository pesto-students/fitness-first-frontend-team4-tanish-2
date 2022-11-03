import image from "../images/image.jpg";
import { Image } from "@chakra-ui/react";
import "./css/image.css";

export default function WallpaperForLoginPage (){
    return(
        <div className='img'>
        
          <Image  src={image} alt="WallpaperForLoginPage" />
        
      </div>
    );
}