import Head from "next/head";

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Ameni Grami is an avid Frontend Engineer , Project Manager building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Ameni Grami, nitin, ranganath, web developer portfolio, nitin web developer, nitin developer, mern stack, Ameni Grami portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Ameni Grami's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />

      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: "Ameni Grami",
};
