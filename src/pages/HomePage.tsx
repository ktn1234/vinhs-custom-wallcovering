import { useState } from "react";
import { FaCircleArrowLeft, FaCircleArrowRight } from "react-icons/fa6";

interface Picture {
  index: number;
  src: string;
  alt: string;
}

const pictures: Picture[] = Array.from(
  { length: 63 },
  (_: unknown, index: number) => index + 1
).map((index: number) => {
  return {
    index: index - 1,
    src: `/images/${index - 1}.jpeg`,
    alt: `Image ${index}`,
  };
});

function HomePage() {
  const [showCarousel, setShowCarousel] = useState<boolean>(false);
  const [currentPicIndex, setCurrentPicIndex] = useState<number>(0);

  return (
    <>
      <div className="flex justify-center p-5">
        <h1 className="text-xl font-bold">Gallery</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-5 mb-5">
        {pictures.map(({ index, src, alt }) => (
          <div
            key={index}
            onClick={() => {
              setCurrentPicIndex(index);
              setShowCarousel(!showCarousel);
            }}
          >
            <img
              className="rounded-lg object-cover w-full h-full cursor-pointer"
              src={src}
              alt={alt}
            />
          </div>
        ))}
      </div>
      {showCarousel && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={() => setShowCarousel(!showCarousel)}
        >
          <div className="absolute top-0 right-0 p-5">
            <button
              className="text-white hover:underline"
              onClick={() => setShowCarousel(!showCarousel)}
            >
              Close
            </button>
          </div>
          <div className="absolute top-0 left-0 p-5 text-white">
            {currentPicIndex + 1} / {pictures.length}
          </div>
          <div className="relative flex items-center justify-center w-5/6">
            <img
              className="rounded-lg cursor-pointer"
              src={pictures[currentPicIndex].src}
              alt={pictures[currentPicIndex].alt}
              onClick={(e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
                e.stopPropagation();

                const cursonOnLeftSide = e.clientX < window.innerWidth / 2;
                const cursoronRightSide = e.clientX > window.innerWidth / 2;

                if (cursonOnLeftSide) {
                  setCurrentPicIndex(
                    (currentPicIndex - 1 + pictures.length) % pictures.length
                  );
                }

                if (cursoronRightSide) {
                  setCurrentPicIndex((currentPicIndex + 1) % pictures.length);
                }
              }}
            />
            <FaCircleArrowLeft
              className="absolute left-0 cursor-pointer ml-2 hover:text-white z-30"
              size={"2em"}
              onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
                e.stopPropagation();
                setCurrentPicIndex(
                  (currentPicIndex - 1 + pictures.length) % pictures.length
                );
              }}
            />
            <FaCircleArrowRight
              className="absolute right-0 cursor-pointer mr-2 hover:text-white z-30"
              size={"2em"}
              onClick={(e: React.MouseEvent<SVGElement, MouseEvent>) => {
                e.stopPropagation();
                setCurrentPicIndex((currentPicIndex + 1) % pictures.length);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default HomePage;
