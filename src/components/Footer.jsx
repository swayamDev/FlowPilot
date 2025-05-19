import { resourceLinks, companyLinks, legalLinks } from "../constants";

const Footer = () => {
  return (
    <footer id="contact" className="mt-20 border-t py-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <h3 className="text-xl tracking-wide font-bold mb-4">Get Started</h3>
          <ul className="space-y-2">
            {resourceLinks.map((link, index) => (
              <li key={index}>
                <a className="text-white hover:text-pink-500" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl tracking-wide font-bold mb-4">
            FlowPilot Team
          </h3>
          <ul className="space-y-2">
            {companyLinks.map((link, index) => (
              <li key={index}>
                <a className="text-white hover:text-pink-500" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl tracking-wide font-bold mb-4">Trust Center</h3>
          <ul className="space-y-2">
            {legalLinks.map((link, index) => (
              <li key={index}>
                <a className="text-white hover:text-pink-500" href={link.href}>
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
