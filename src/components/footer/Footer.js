import React from "react";
import "./Footer.scss";
const Footer = () => {
  const handleScrollToTop = () => {
    document.getElementById("app-amazon__main").scrollIntoView();
  };

  const footerLinks = [
    {
      title: "Get to know us",
      links: [
        {
          displayName: "careers",
          to: "https://www.amazon.jobs"
        },
        {
          displayName: "blogs",
          to:
            "https://blog.aboutamazon.com/?utm_source=gateway&utm_medium=footer"
        },
        {
          displayName: "about amazon",
          to: ""
        }
      ]
    }
  ];
  return (
    <div className="app-amazon__footer">
      <div className="back-to-top-btn action" onClick={handleScrollToTop}>
        Back to top
      </div>
      <div className="app-amazon__footer__links">
        {footerLinks.map(item => (
          <div className="links-section">
            <h3 className="section-title">{item.title}</h3>
            {item.links.map(link => (
              <a href={link.to} className="link" target="_blank">
                {link.displayName}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
