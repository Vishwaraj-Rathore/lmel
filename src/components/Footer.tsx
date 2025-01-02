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
      <footer className="bg-[#213555] text-[#F5EFE7] flex flex-col items-center gap-y-3 min-h-[150px] justify-center text-[13px] md:min-h-[125px] md:text-[16px] lg:flex-row lg:min-h-[100px] lg:justify-between lg:px-16">
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
                className={`text-[#F5EFE7] px-[10px] text-lg md:px-[11px] md:text-xl lg:px-[12px] ${color}`}
              />
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
