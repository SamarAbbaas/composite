"use client";

import { NavigationMenuBackdrop } from "@base-ui/react";
import Image from "next/image";

// Capitalized interface name is standard practice
interface ImageItem {
  id: string;
  src: string;
  alt: string;
    class?: string; // Optional class for styling
    width: number; // Optional width for image
    height: number; // Optional height for image
}

const imagesData: ImageItem[] = [
  { id: "img-1", src: "/img1.png", alt: "image1 Men", class: "top-85 left-35 z-1 ", width:310,height:442 }, // Example class for positioning
  { id: "img-2", src: "/img2.png", alt: "image2 Men" ,class: "top-64 left-102 z-4", width:241,height:138 }, // Example class for positioning
  { id: "img-3", src: "/img3.png", alt: "image3 Men" , class: "-top-1 left-143 z-2",width:304 ,height:304}, // Example class for positioning
//   { id: "img-4", src: "/img4.png", alt: "image4",class: "top-27 left-488", width:214,height:62 }, // Example class for positioning
  { id: "img-5", src: "/img5.png", alt: "image5" ,class: "top-22.5 left-317", width:244,height:244 }, // Example class for positioning
  { id: "img-6", src: "/img6.png", alt: "image6" ,class: "top-72 left-255.5", width:362,height:362 }, // Example class for positioning
  { id: "img-7", src: "/img7.png", alt: "image7" ,class: "top-141.75 left-201.75", width:322,height:322 }, // Example class for positioning
  { id: "img-8", src: "/img8.png", alt: "image8" ,class: "top-185.5 left-110", width:214,height:305 }, // Example class for positioning
  
];

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* Added relative/bg for context */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden flex items-center justify-center"
        style={{
          backgroundImage: `
                        linear-gradient(to right, rgba(128, 128, 128, 0.08) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(128, 128, 128, 0.08) 1px, transparent 1px)
                    `,
          backgroundSize: "40px 40px",
        }}
      ></div>
      {/* Ensure the container for images has a z-index or content flow */}
      <div className="relative w-378 h-234.75">
        {imagesData.map((item) => (
          <Image
            key={item.id}
            src={item.src}
            alt={item.alt}
           width={item.width}
              height={item.height}
            className={`absolute ${item.class}`} // Just for style
          />
        ))}
        <div className="absolute top-27 left-244  flex text-xs gap-4">
            <div className="w-15 h-15  flex justify-center  items-center  bg-[#DFE7EA] ">#DFE7EA</div>
            <div className="w-15 h-15 flex justify-center  items-center  bg-[#0C00FF]">#DFE7EA</div>
            <div className="w-15 h-15 flex justify-center  items-center  bg-[#6D6C6C]">#DFE7EA</div>
        </div>
        {/* Navbar */}
        <span className="">logo</span>
         <input type="text"
          placeholder="Search"
          className="w-826.11 h-70.8 top-112.5 left-85.7 bg-[#00000033]"

          />

         
      </div>
      
    </div>)
};
    
export default HomePage;
