import { useState } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

function AboutPage() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <div className="flex flex-col items-center">
          <div className="absolute text-5xl top-0">
            <AiOutlineLoading3Quarters className="animate-spin h-screen" />
            <img
              className="hidden"
              src="/me.jpeg"
              alt="Portrait of Vinh Nguyen"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col items-center m-5">
          <h1 className="text-xl font-bold">About</h1>
          <div className="my-5">
            <img
              className={`${
                loading ? "hidden" : "inline-block"
              } rounded-full w-96`}
              src="/me.jpeg"
              alt="Portrait of Vinh Nguyen"
            />
          </div>
          <div className="md:mx-40 lg:mx-72 text-tertiary">
            Vinh Nguyen is a seasoned professional with over four decades of
            experience in the art of wallcovering. With a profound mastery of
            his craft, he has adorned some of the most illustrious residences
            with his impeccable workmanship. Based in the vibrant city of
            Dallas, Texas, Vinh's expertise extends to the surrounding areas,
            where he brings his unparalleled skill and dedication to each
            project he undertakes. Renowned for his attention to detail and
            commitment to quality, Vinh Nguyen stands as a trusted authority in
            the realm of wallpaper installation, transforming spaces into
            captivating reflections of style and sophistication.
          </div>
        </div>
      )}
    </>
  );
}

export default AboutPage;
