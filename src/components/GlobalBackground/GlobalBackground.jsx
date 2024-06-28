import "./GlobalBackground.scss";

export default function GlobalBackground({ body, fullHeight }) {
  return (
    <main className="main">
      <div
        className={`${
          fullHeight ? "main-wrapper" : "main-wrapper main-wrapper2"
        }`}
      >
        {body}
      </div>
    </main>
  );
}
