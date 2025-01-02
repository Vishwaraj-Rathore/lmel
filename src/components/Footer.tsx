import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const socialLinks = [
    {
      icon: faFacebook,
      href: "https://www.facebook.com/profile.php?id=61556357176346",
      color: "hover:text-blue-600",
    },
    {
      icon: faInstagram,
      href: "https://www.instagram.com/lastmilent/",
      color: "hover:text-pink-600",
    },
    {
      icon: faTwitter,
      href: "https://x.com/lastmilent",
      color: "hover:text-blue-400",
    },
    {
      icon: faYoutube,
      href: "https://www.youtube.com/@lastmilent",
      color: "hover:text-red-600",
    },
    {
      icon: faLinkedin,
      href: "https://www.linkedin.com/company/lastmilent/",
      color: "hover:text-blue-800",
    },
  ];

  return (
    <>
      <footer className="bg-[#27374D] text-white flex flex-col items-center gap-y-3 min-h-[100px] md:min-h-[120px] justify-center text-[10px] md:text-[14px] lg:flex-row lg:min-h-[100px] lg:justify-between lg:px-12">
        <div>
          <p>
            &copy; {new Date().getFullYear()} Last Mile Enterprises Limited. All
            rights reserved.
          </p>
        </div>
        <div>
          {socialLinks.map(({ icon: Icon, href, color }) => (
            <a key={href} href={href} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={Icon}
                className={`text-white px-[10px] text-lg md:px-[11px] md:text-xl lg:px-[12px] ${color}`}
              />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
