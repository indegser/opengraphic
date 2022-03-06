import { useRouter } from "next/router";

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
    </div>
  );
}

export default Page;
