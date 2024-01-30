import ContactForm from "@/components/Contact/ContactForm";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiVelog } from "react-icons/si";

const LINKS = [
  { icon: <AiFillGithub />, url: "https://github.com/eeeyooon" },
  { icon: <AiFillLinkedin />, url: "" },
  { icon: <SiVelog />, url: "" },
];

export default function ContactPage() {
  return (
    <section
      id="contact"
      className="h-screen flex flex-col items-center justify-center pt-24"
    >
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p>vywns4569@gmail.com</p>
      <div>
        <ul className="flex gap-4 my-2 justify-center">
          {LINKS.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-blue_color"
            >
              {link.icon}
            </a>
          ))}
        </ul>
        <h2 className="text-2xl font-bold my-8">Or Send me an email</h2>
        <ContactForm />
      </div>
    </section>
  );
}
