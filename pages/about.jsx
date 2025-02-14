import styles from "../styles/About.module.css";
import { Viewer, SpecialZoomLevel } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import * as pdfjsLib from "pdfjs-dist/build/pdf";

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const AboutPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className={styles.aboutWrapper}>
      <h1>A Little Bit About Me</h1>
      <Viewer
        plugins={[defaultLayoutPluginInstance]}
        defaultScale={SpecialZoomLevel.PageFit}
        fileUrl={"/AmeniGramiResume.pdf"}
      />
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "About" },
  };
}

export default AboutPage;
