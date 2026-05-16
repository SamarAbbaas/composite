'use client';

import Image from "next/image";
import Link from "next/link";
import AddIcon from "@iconify-react/material-symbols-light/add";
import ArrowDownIcon from "@iconify-react/mdi-light/arrow-down";
import ExpandIcon from "@iconify-react/iconoir/expand";
import DeleteOutlinedIcon from "@iconify-react/weui/delete-outlined";
// import "@fontsource/the-silver-editorial/400.css";
 


 
interface ImageItem {
  id: string;
  src: string;
  alt: string;
  class?: string;
  width: number;
  height: number;
}

 
const imagesData: ImageItem[] = [
  {
    id: "img-1",
    src: "/img1.png",
    alt: "image1 Men",
    class: "top-85 left-35 z-1 ",
    width: 310,
    height: 442,
  },
  {
    id: "img-2",
    src: "/img2.png",
    alt: "image2 Men",
    class: "top-64 left-102 z-4",
    width: 241,
    height: 138,
  },
  {
    id: "img-3",
    src: "/img3.png",
    alt: "image3 Men",
    class: "-top-1 left-143 z-2",
    width: 304,
    height: 304,
  },
  {
    id: "img-5",
    src: "/img5.png",
    alt: "image5",
    class: "top-22.5 left-317",
    width: 244,
    height: 244,
  },
  {
    id: "img-6",
    src: "/img6.png",
    alt: "image6",
    class: "top-72 left-255.5",
    width: 362,
    height: 362,
  },
  {
    id: "img-7",
    src: "/img7.png",
    alt: "image7",
    class: "top-141.75 left-201.75",
    width: 322,
    height: 322,
  },
  {
    id: "img-8",
    src: "/img8.png",
    alt: "image8",
    class: "top-185.5 left-110",
    width: 214,
    height: 305,
  },
];

 
const IconOfBox = () => {
  return (
    <>
      <div className="absolute border border-primary/50 p-px -top-1.25 -left-1.25 bg-background text-primary">
        <AddIcon height="0.5em" />
      </div>
      <div className="absolute border border-primary/50 p-px -top-1.25 -right-1.25 bg-background text-primary">
        <DeleteOutlinedIcon height="0.5em" />
      </div>
      <div className="absolute border border-primary/50 p-px -bottom-1.25 -left-1.25 bg-background text-primary">
        <ArrowDownIcon height="0.5em" />
      </div>
      <div className="absolute border border-primary/50 p-px -bottom-1.25 -right-1.25 bg-background text-primary">
        <ExpandIcon height="0.5em" />
      </div>
    </>
  );
};

 
export default function PageComponent() {
  return (
    <>
      {/*    first Section */}
      <div className="relative min-h-screen bg-background max-w-screen overflow-hidden">
        {/* Grid Background */}
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

        {/* Dynamic Images Container */}
        <div className="relative w-378 h-234.75 flex items-center justify-center">
          {imagesData.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={item.width}
              height={item.height}
              className={`absolute ${item.class}`}
            />
          ))}

          {/* Color Palettes / Hex Codes */}
          <div className="absolute top-27 left-244 flex text-xs gap-4">
            <div className="w-15 h-15 flex justify-center items-center bg-[#DFE7EA]">
              #DFE7EA
            </div>
            <div className="w-15 h-15 flex justify-center items-center bg-[#0C00FF]">
              #DFE7EA
            </div>
            <div className="w-15 h-15 flex justify-center items-center bg-[#6D6C6C]">
              #DFE7EA
            </div>
          </div>

          {/* Navbar */}
          <div className="border rounded-full min-w-220 pl-4 pr-4 pt-2 pb-2 bg-muted shadow-black flex justify-between items-center w-220 z-5">
            <Image
              src="/NavbarImg.png"
              alt="composit"
              width={151}
              height={31}
              className="pl-4"
            />
            <div className="flex items-center justify-center gap-4">
              <Link
                href="#"
                className="p-9 pt-2 pb-2 text-lg bg-primary rounded-full text-[#FFFFFF]"
              >
                sign up{" "}
              </Link>
              <Link
                href="#"
                className="p-9 pt-2 pb-2 text-lg bg-[#B7B7B7] rounded-full text-[#FFFFFF]"
              >
                Log in{" "}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative max-w-screen w-full h-200">
        <Image
          src="/keyFeature.png"
          alt="Footer"
          width={1440}
          height={200}
          className="!w-full !h-auto pl-40 pr-40 pt-20 pb-10"
        />

        {/* Feature Tooltips / Labels */}
        <div className="font-Inter p-4 flex justify-between text-sm border-[0.7px] border-primary/50 max-w-fit absolute top-13 left-57.5 bg-[#FFFFFF]">
          <IconOfBox />
          Discover new narratives through chromatic harmony
        </div>

        <div className="font-Inter text-sm border-[0.7px] border-primary/50 max-w-fit p-4 absolute top-30 left-197 bg-[#FFFFFF]">
          <IconOfBox />
          Create beautiful moodboards
        </div>

        <div className="font-Inter text-sm border-[0.7px] p-4 border-primary/50 max-w-fit absolute top-77 left-255 bg-[#FFFFFF]">
          <IconOfBox />
          Guest-curated collections and boards
        </div>

        <div className="font-Inter text-sm border-[0.7px] border-primary/50 max-w-fit absolute p-3 pl-8 pr-8 top-110 left-232 bg-[#FFFFFF]">
          <IconOfBox />
          Type Tool
        </div>

        <Image
          src="/StickyNotes.png"
          alt="StickyNotes"
          width={245}
          height={245}
          className="absolute top-155 left-199"
        />

        <div className="font-Inter text-sm border-[0.7px] border-primary/50 max-w-fit absolute top-135 p-4 left-132 bg-[#FFFFFF]">
          <IconOfBox />
          Export to Figma
        </div>

        <div className="font-Inter text-sm border-[0.7px] border-primary/50 max-w-fit absolute top-100 p-4 left-43 bg-[#FFFFFF]">
          <IconOfBox />
          Sample images and create palettes
        </div>

        <div className="font-Inter p-4 text-sm border-[0.7px] border-primary/50 max-w-fit absolute top-59 left-110 bg-[#FFFFFF]">
          <IconOfBox />
          Manage multiple projects
        </div>
      </div>

      {/* Screenshot / Bottom Section */}
      <div className="top-1865 left-100 p-20">
        <Image
          src="/screanshort.png"
          alt="Footer"
          width={1440}
          height={200}
          className="!h-auto !w-full"
        />
      </div>

      {/* Bottom Info Section */}
      <div className="relative flex items-center justify-between gap-8 top-8 left-5 w-full h-80 p-20">
        <div className="mb-8 h-80 w-100 gap-8 border border-primary/50 relative">
          <div className="  max-w-fit bg-[#FFFFFF] p-4 fontSilver text-3xl text-primary">
             <div className="absolute border border-primary/50 p-px -top-1.25 -left-1.25 bg-background text-primary">
        <AddIcon height="0.5em" />
      </div>
                <div className="absolute border border-primary/50 ml-119 -top-1.25 -right-1 bg-background text-primary">
        <DeleteOutlinedIcon height="0.5em" /></div>
         <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -left-1.25 bg-background text-primary">
        <ArrowDownIcon height="0.5em" />
      </div>
       <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -right-1.25 bg-background text-primary">
        <ExpandIcon height="0.5em" />
      </div>

            <h1>Color—driven discovery</h1>
          </div>
          <p className="mt-35 flex p-8 font-Inter text-primary top-70">
            Discover curated images, textures and type samples based on color —
            or upload your own starter image.
          </p>
        </div>
        <div className="mb-8 h-80 w-100 border border-primary/50" >content 2  </div>
        <div className="mb-8 h-80 w-100 border border-primary/50" >Content 3 </div>
      </div>
     
    </>
  );
}