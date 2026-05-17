"use client";

import Image from "next/image";
import Link from "next/link";
import AddIcon from "@iconify-react/material-symbols-light/add";
import ArrowDownIcon from "@iconify-react/mdi-light/arrow-down";
import ExpandIcon from "@iconify-react/iconoir/expand";
import DeleteOutlinedIcon from "@iconify-react/weui/delete-outlined";
// import "@fontsource/the-silver-editorial/400.css";
import { Figtree } from "next/font/google";

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
      {/*     first Section */}
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
      <div className="relative flex items-center justify-between gap-8 top-8  w-full h-80 p-20">
        <div className="mb-8 h-80 w-100 gap-8 border border-primary/50 relative">
          <div className="  max-w-fit bg-[#FFFFFF] p-4  text-3xl text-primary">
            <div className="absolute border border-primary/50 p-px -top-1.25 -left-1.25 bg-background text-primary">
              <AddIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 ml-119 -top-1.25 -right-1 bg-background text-primary">
              <DeleteOutlinedIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -left-1.25 bg-background text-primary">
              <ArrowDownIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -right-1.25 bg-background text-primary">
              <ExpandIcon height="0.5em" />
            </div>

            <h1 className="font-silver non-italic font-normal text-[50px] leading-[100%] tracking-normal">
              Color—driven{" "}
              <span className="font-silver italic font-normal tracking-normal text-[50px] leading-[100%]">
                discovery
              </span>{" "}
            </h1>
          </div>
          <p className="mt-15 flex p-8 font-Inter text-primary top-70">
            Discover curated images, textures and type samples based on color —
            or upload your own starter image.
          </p>
        </div>

        <div className="mb-8 h-80 w-100 gap-8 border border-primary/50 relative leading-2">
          <div className="  max-w-fit bg-[#FFFFFF] p-4  text-3xl text-primary">
            <div className="absolute border border-primary/50 p-px -top-1.25 -left-1.25 bg-background text-primary">
              <AddIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 ml-119 -top-1.25 -right-1 bg-background text-primary">
              <DeleteOutlinedIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -left-1.25 bg-background text-primary">
              <ArrowDownIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -right-1.25 bg-background text-primary">
              <ExpandIcon height="0.5em" />
            </div>

            <h1 className="font-silver non-italic font-normal text-[50px] leading-[100%]  tracking-normal">
              Quickly
              <br />{" "}
              <span className=" font-silver italic font-normal tracking-normal text-[50px] leading-[100%]">
                shape
              </span>{" "}
              your compositions
            </h1>
          </div>
          <p className="mt-5 flex p-8 font-Inter text-primary top-60">
            Zoom, pan and snap your way around an intuitive canvas that allows
            you to drag, scale, and arrange elements quickly.
          </p>
        </div>

        <div className="mb-8 h-80 w-100 gap-8 border border-primary/50 relative">
          <div className="  max-w-fit bg-[#FFFFFF] p-4  text-3xl text-primary">
            <div className="absolute border border-primary/50 p-px -top-1.25 -left-1.25 bg-background text-primary">
              <AddIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 ml-119 -top-1.25 -right-1 bg-background text-primary">
              <DeleteOutlinedIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -left-1.25 bg-background text-primary">
              <ArrowDownIcon height="0.5em" />
            </div>
            <div className="absolute border border-primary/50 p-px mt-119 -bottom-1.25 -right-1.25 bg-background text-primary">
              <ExpandIcon height="0.5em" />
            </div>

            <h1 className="font-silver non-italic font-normal text-[50px] leading-[100%]  tracking-normal">
              Make it a<br /> part of your{" "}
              <span className=" font-silver italic font-normal tracking-normal text-[50px] leading-[100%]">
                workflow
              </span>{" "}
            </h1>
          </div>
          <p className="mt-5 flex p-8 font-Inter text-primary top-60">
            Export boards as either static PNGs and JPEGs or as layered SVGs for
            easy incorporation into Figma and other platforms.
          </p>
        </div>
      </div>

      {/* Get started Section */}
      <div>
        <Link href="#" className="flex justify-center items-center mt-18 font-silver italic tracking-normal text-[60px] text-primary  border  border-b-primary p-6  max-w-fit m-auto">
          Get started
        </Link>
        <div className="flex justify-between items-center gap-2  m-10 p-4">
          <div className="relative bg-[#C5C5C526] w-140 left-35 h-145 text-black p-8 font-normal not-italic text-[20px] leading-[58px]  rounded-lg tracking-[-0.03em] ">
            <ol className="flex gap-8 border-b-2 border-[#d2d2d2] ">
              {" "}
              <span className="font-silver text-muted-foreground italic ">
                01
              </span>{" "}
              Create up to 8 projects
            </ol>
            <ol className="flex gap-8 border-b-2 border-[#d2d2d2]">
              {" "}
              <span className="font-silver text-muted-foreground italic ">
                02
              </span>{" "}
              Core tools and functionality
            </ol>
            <ol className="flex gap-8 border-b-2 border-[#d2d2d2]">
              {" "}
              <span className="font-silver text-muted-foreground italic ">
                03
              </span>{" "}
              Static JPEG or PNG export
            </ol>
            <div className="font-silver text-[100px] italic tracking-normal text-black mt-62">
              Free
            </div>
            <div className="absolute top-112 right-2  flex flex-col">
              <button className="absoulte bg-white rounded-full   ">
                <Link
                  href="#"
                  className="p-9 pt-2 pb-2 text-lg right-2  rounded-full text-black font-ibm-plex"
                >
                  Sign up{" "}
                </Link>
              </button>
              <h6 className="mb-6 text-black">No credits card required</h6>
            </div>
          </div>
          <div className="flex justify-between items-center gap-4  m-28 p-4">
            <div className="relative bg-primary  w-136  h-145 text-white rounded-lg p-8 font-normal not-italic text-[20px] leading-[58px] tracking-[-0.03em]">
              <ol className="flex gap-8 border-b-2 border-[#d2d2d2] ">
                {" "}
                <span className="font-silver text-white  italic ">01</span>{" "}
                Support the platform as a founder member
              </ol>
              <ol className="flex gap-8 border-b-2 border-[#d2d2d2]">
                {" "}
                <span className="font-silver text-white italic ">02</span>{" "}
                Manage unlimited boards and projects
              </ol>
              
              <ol className="flex gap-8 border-b-2 border-[#d2d2d2]">
                {" "}
                <span className="font-silver text-white italic ">03</span> All
                core tools and functionality
              </ol>
              <ol className="flex gap-8 border-b-2 border-[#d2d2d2]">
                {" "}
                <span className="font-silver text-white italic ">04</span> All
              Export editable boards for Figma
              </ol>
              <div className="font-silver text-[100px] italic tracking-normal  mt-48">
                Paid
              </div>
              <div className="absolute top-112 right-2  flex flex-col">
                <button className="absoulte bg-white rounded-full   ">
                  <Link
                    href="#"
                    className="p-9 pt-2 pb-2 text-lg right-2  rounded-full text-black font-ibm-plex"
                  >
                    Sign up{" "}
                  </Link>
                </button>
                <h6 className="mb-6 font-inter">$5 / month or $35 / year</h6>
              </div>
            </div>
          </div>
        </div>
        <div>
        <h1 className="flex justify-center items-center font-silver text-primary    text-3xl">View samples and tutorials on <Link href="#" className="italic gap-3 border border-b-primary/50   p-6 "> Instagram </Link> </h1>

        </div>
       </div>
      {/* Fotoor */}
      <div className="relative top-8      w-full h-full p-20  pt-4 pb-4  my-18  pl-2 pr-2 bg-black flex items-center justify-center overflow-hidden">
        <Image
          src="/Footer.png"
          alt="Footer"
          width={1314}
          height={200}
          className="pb-16  p-20 "
        />
        <div className="absolute bottom-4 left-45 flex items-center gap-4 text-muted-foreground text-sm mt-35">
          <Link href="#" className="">
            {" "}
            Terms of Use
          </Link>
          <Link href="#" className="">
            {" "}
            Privacy Policy
          </Link>
        </div>
        <div>
          <div className="absolute bottom-5 right-45 text-muted-foreground text-sm">
            Copyright © Ward Studio Ltd 2025
          </div>
        </div>
      </div>
    </>
  );
}
