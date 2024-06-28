import "./GlobalBackground.scss";

export default function GlobalBackground({ body }) {
  return (
    <main className="main">
      <div className="main-wrapper">{body}</div>
    </main>
  );
}
