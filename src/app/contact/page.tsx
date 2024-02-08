import ContactForm from "@/components/contact/ContactForm";
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import ScrollArrow from "@/components/common/ScrollArrow";

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="h-screen mt-10 flex flex-col items-center justify-center selection:bg-brown_color pb-24"
    >
      <h2 className="font-bold my-2 font-dohyeon text-brown_color text-xl md:text-3xl selection:bg-redbrown_color">
        Contact Me
      </h2>
      <div className="w-96 flex flex-col justify-between mt-10">
        <p className="flex justify-center items-center">
          <IoIosCall className="mr-2" />
          010-2613-2678
        </p>
        <p className="flex justify-center items-center my-2">
          <CiMail className="mr-2" />
          vywns4569@gmail.com
        </p>
      </div>
      <ContactForm />
      <ScrollArrow targetId="#about" />
    </section>
  );
}
