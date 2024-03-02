interface Picture {
  index: number;
  src: string;
  alt: string;
}

const pictures: Picture[] = Array.from(
  { length: 63 },
  (_: unknown, index: number) => index + 1
).map((index: number) => {
  console.log("Creating pictures:", index);

  return {
    index: index - 1,
    src: `/images/${index - 1}.jpeg`,
    alt: `Image ${index}`,
  };
});

function HomePage() {
  return (
    <>
      <div className="flex justify-center p-5">
        <h1 className="text-xl font-bold">Gallery</h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mx-5 mb-5">
        {pictures.map(({ index, src, alt }) => (
          <div key={index}>
            <img
              className="rounded-lg object-cover w-full h-full cursor-pointer"
              src={src}
              alt={alt}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
