"use client";

import Image from "next/image";

interface Images {
  id: string;
  src: string;
  alt: string;
}
const Imagesdata: Images[] = [
  { id: "img-1", src: ".img1.png", alt: " image1 Men" },
];
const HomePage: React.FC = () => {
  return (
    <div>
      <div
        className="absolute inset-0 w-full h-full overflow-hidden transition-transform duration-300 ease-out"
        style={{
          backgroundImage: `
          linear-gradient(to right, rgba(255, 255, 255, 0.08) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 1px, transparent 1px)
        `,
          backgroundSize: "40px 40px",
        }}
      >
        <div>
          {Imagesdata.map((item) => (
            <Image
              key={item.id}
              src={item.src}
              alt={item.alt}
              width={500}
              height={300}
              className="rounded-lg"
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HomePage;
