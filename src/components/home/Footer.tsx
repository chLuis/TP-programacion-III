import { BsInstagram } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer({ alumn }: { alumn: string }) {
  return (
    <footer className="w-full italic text-xs font-semibold pt-60 pb-16 text-center px-2 flex flex-col gap-2 items-center justify-center">
      <div className="flex items-center justify-center gap-4 text-3xl">
        <a
          href="https://github.com/chLuis"
          target="_blank"
          title="github"
          aria-label="github"
          className="hover:text-blue-700 duration-200"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/luis-chrestia/"
          aria-label="linkedin"
          title="linkedin"
          target="_blank"
          className="hover:text-blue-700 duration-200"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/luischrestia/"
          aria-label="email"
          title="email"
          target="_blank"
          className="hover:text-blue-700 duration-200"
        >
          <BsInstagram />
        </a>
      </div>
      <div>
        {new Date().getFullYear()} - {alumn}
      </div>
    </footer>
  );
}
