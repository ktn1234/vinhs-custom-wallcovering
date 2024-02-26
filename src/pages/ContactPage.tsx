import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function ContactPage() {
  return (
    <div className="flex flex-col items-center justify-center m-5">
      <h1 className="text-center">
        Get an estimate for your wallpaper installation
      </h1>
      <div
        className="flex items-center cursor-pointer hover:underline my-5"
        onClick={() => {
          window.location.href = "tel:214-682-1124";
        }}
      >
        <FaPhone className="mr-2" size={"1.2em"} />
        <span>214-682-1124</span>
      </div>
      <div
        className="flex items-center cursor-pointer hover:underline"
        onClick={() => {
          window.location.href = "mailto:vinhn64@yahoo.com";
        }}
      >
        <MdEmail className="mr-2" size={"1.2em"} />
        <span>vinhn64@yahoo.com</span>
      </div>
    </div>
  );
}

export default ContactPage;
