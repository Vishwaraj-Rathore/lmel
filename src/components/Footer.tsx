import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faLinkedin,
  faInstagram,
  IconDefinition,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  type SocialLink = {
    platformName: string;
    icon: IconDefinition;
    href: string;
    color: string;
  };

  const socialLinks: SocialLink[] = [
    {
      platformName: "Facebook",
      icon: faFacebook,
      href: "https://www.facebook.com/profile.php?id=61556357176346",
      color: "hover:text-blue-600",
    },
    {
      platformName: "Instagram",
      icon: faInstagram,
      href: "https://www.instagram.com/lastmilent/",
      color: "hover:text-pink-600",
    },
    {
      platformName: "Twitter",
      icon: faTwitter,
      href: "https://x.com/lastmilent",
      color: "hover:text-blue-400",
    },
    {
      platformName: "Youtube",
      icon: faYoutube,
      href: "https://www.youtube.com/@lastmilent",
      color: "hover:text-red-600",
    },
    {
      platformName: "Linkedin",
      icon: faLinkedin,
      href: "https://www.linkedin.com/company/lastmilent/",
      color: "hover:text-blue-800",
    },
  ];

  return (
    <>
      <footer className="bg-[#27374D] text-white flex flex-col items-center gap-y-3 min-h-[75px] md:min-h-[85px] justify-center text-[10px] md:text-[13px] lg:text-[14px] lg:flex-row lg:justify-between lg:px-12">
        <div>
          <p>
            &copy; {new Date().getFullYear()} Last Mile Enterprises Limited. All
            rights reserved.
          </p>
        </div>
        <div>
          {socialLinks.map(({ platformName, icon: Icon, href, color }) => (
            <a
              key={platformName}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <FontAwesomeIcon
                icon={Icon}
                className={`px-[10px] text-[13px] md:px-[11px] md:text-[15px] lg:text-[17px] lg:px-[12px] ${color}`}
              />
              <span className="sr-only">Follow us on {platformName}</span>
            </a>
          ))}
        </div>
      </footer>
    </>
  );
}
