import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "email",
    link: "amenigrami489@gmail.com",
    href: "mailto:amenigrami489@gmail.com",
  },
  {
    social: "Personal github",
    link: "https://github.com/ameni-grami",
    href: "https://github.com/ameni-grami",
  },
  {
    social: "Takiacademy Gitlab",
    link: "https://gitlab.com/Ameni45Grami",
    href: "https://gitlab.com/Ameni45Grami",
  },
  {
    social: "Softy Gitlab",
    link: "https://gitlab.softylines.com/ameni.grami",
    href: "https://gitlab.softylines.com/ameni.grami",
  },
  {
    social: "linkedin",
    link: "Ameni Grami",
    href: "https://www.linkedin.com/in/ameni-grami-94a700207/",
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{" "}
          <a
            href={item.href}
            target="_blank"
            rel="noopener"
            style={{ cursor: "pointer" }}
          >
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
