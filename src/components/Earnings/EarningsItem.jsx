export function EarningsItem(props) {
  return (
    <div className="bill">
      <div className="description">
        <div className={`description-left`}>
          <div className="icon-bill">
            <i className="fas fa-circle fa-xs"></i>
          </div>
          <div>
            <p>{props.earning.description}</p>
            <small>{props.earning.receiptDate}</small>
          </div>
        </div>
        <div className="value-bill-icon">
          <p>
            <span>{`€${props.earning.value}`}</span>
            {/* <button onClick={editEarning} className="pointer">
              <i className="emoji-icon">&#9999;&#65039;</i>
            </button>
            <button onClick={deleteEarning} className="pointer">
              <i className="emoji-icon">&#128465;</i>
            </button> */}
          </p>
        </div>
      </div>
    </div>
  );
}
