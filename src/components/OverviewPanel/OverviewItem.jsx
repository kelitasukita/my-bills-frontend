export function OverviewItem(props) {
  return (
    <div className="balance-box">
      <h2>{props.title}</h2>
      <p>
        <span>&#128526;</span> {props.value}
      </p>
    </div>
  );
}
