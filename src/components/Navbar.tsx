import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPaintRoller, FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface Link {
  name: string;
  url: string;
}

function Navbar() {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const links: Link[] = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      // If the window width is less than 768px, set useMobile to true
      // Using 768px as the breakpoint for mobile based off default values in Tailwind CSS (https://tailwindcss.com/docs/responsive-design)
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setShowModal(false);
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header className="flex justify-between items-center p-5 shadow-lg relative">
      <div
        className="cursor-pointer hover:underline"
        onClick={() => navigate("/")}
      >
        <FaPaintRoller size={"1.2em"} />
      </div>
      <div
        className="flex md:absolute md:left-1/2 md:transform md:-translate-x-1/2 hover:underline cursor-pointer"
        onClick={() => navigate("/")}
      >
        <h1>Vinh's Custom Wallcovering</h1>
      </div>
      <nav className="items-center">
        {isMobile && (
          <div className="cursor-pointer" onClick={() => setShowModal(true)}>
            <GiHamburgerMenu
              className="hover:drop-shadow-tertiary-glow hover:animate-pulse"
              size={"1.2em"}
            />
          </div>
        )}
        {!isMobile && (
          <ul className="flex">
            {links.map((link, index) => (
              <li
                key={index}
                className="ml-2 cursor-pointer hover:underline"
                onClick={() => navigate(link.url)}
              >
                {link.name}
              </li>
            ))}
          </ul>
        )}
      </nav>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-primary z-50"
          onClick={() => setShowModal(false)}
        >
          <ul className="pt-10 pl-10">
            <p className="pb-5 text-2xl drop-shadow-tertiary-glow cursor-pointer hover:underline">
              {"Vinh's Custom Wallcovering"}
            </p>
            {links.map((link: Link, index: number) => (
              <li
                className="pb-5 w-min hover:underline hover:drop-shadow-tertiary-glow hover:animate-pulse cursor-pointer"
                key={index}
                onClick={() => {
                  setShowModal(false);
                  navigate(link.url);
                }}
              >
                {link.name}
              </li>
            ))}
            <li
              className="flex mb-5 cursor-pointer hover:underline"
              onClick={() => {
                window.location.href = "tel:214-682-1124";
              }}
            >
              <FaPhone className="mr-2" size={"1.2em"} />
              <span>214-682-1124</span>
            </li>
            <li
              className="flex cursor-pointer hover:underline"
              onClick={() => {
                window.location.href = "mailto:vinhn64@yahoo.com";
              }}
            >
              <MdEmail className="mr-2" size={"1.2em"} />
              <span>vinhn64@yahoo.com</span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Navbar;
