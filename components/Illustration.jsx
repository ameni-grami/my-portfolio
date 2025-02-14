import Image from "next/image";

function Illustration(props) {
  return (
    <Image
      src={"/cartoon2.png"}
      alt="illustration"
      width={550}
      height={550}
      style={{ borderRadius: "50px" }}
    />
  );
}

export default Illustration;
