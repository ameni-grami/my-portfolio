import styles from "../styles/ContactCode.module.css";

const contactItems = [
  {
    social: "Email",
    link: "amenigrami489@gmail.com",
    href: "mailto:amenigrami489@gmail.com",
  },
  {
    social: "GitHub",
    link: "ameni-grami",
    href: "https://github.com/ameni-grami",
  },
  {
    social: "Takiacademy GitLab",
    link: "Ameni45Grami",
    href: "https://gitlab.com/Ameni45Grami",
  },
  {
    social: "Softy GitLab",
    link: "ameni.grami",
    href: "https://gitlab.softylines.com/ameni.grami",
  },
  {
    social: "LinkedIn",
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
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{" "}
          <a
            href={item.href}
            target="_blank"
            rel="noopener"
            className={styles.link}
          >
            {getEmoji(item.social)} {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

const getEmoji = (social) => {
  switch (social.toLowerCase()) {
    case "email":
      return "📧";
    case "github":
      return "🐙";
    case "takiacademy gitlab":
    case "softy gitlab":
      return "🦊";
    case "linkedin":
      return "🔗";
    default:
      return "🌐";
  }
};

export default ContactCode;
