import { useRouter } from "next/router";
import { styled } from "../src/stitches.config";

function Page() {
  const {
    query: { url, text = "Hello World" },
  } = useRouter();

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <h1 style={{ position: "absolute" }}>{text}</h1>
      <Background src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/ipad-air-select-wifi-blue-202009_FMT_WHH?wid=1000&hei=1000&fmt=jpeg&qlt=95&.v=1599672435000" />
    </div>
  );
}

const Background = styled("img", {
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  objectPosition: "center",
  position: "fixed",
  zIndex: -1,
});

export default Page;
