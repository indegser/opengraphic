import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { globalStyles } from "../src/globalStyles";
import { styled } from "../src/stitches.config";

function Page() {
  globalStyles();

  const [isReady, setIsReady] = useState(false);
  const { query } = useRouter();
  const url = query.url?.toString();
  const text = query.text?.toString();

  useEffect(() => {
    if (!url) return;

    const img = new Image();
    img.onload = () => {
      setIsReady(true);
    };

    img.src = url?.toString();
  }, [url]);

  if (!url) return null;

  return (
    <Container data-ready={isReady}>
      <Background src={url} />
      <Headline>{text ?? "Rendered server-side"}</Headline>
    </Container>
  );
}

const Container = styled("div", {
  position: "relative",
});

const Background = styled("img", {
  width: "100vw",
  height: "100vh",
  objectFit: "cover",
  objectPosition: "center",
  position: "fixed",
  zIndex: -1,
});

const Headline = styled("h1", {
  fontSize: "4vw",
  margin: 0,
});

export default Page;
