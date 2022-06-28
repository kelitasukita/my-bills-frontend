import axios from "axios";
import { useNavigate } from "react-router-dom";

export function EarningsItem(props) {
  const navigate = useNavigate();

  function deleteEarning() {

    axios
      .delete(`${process.env.API_HOST}/earnings/${props.earning.id}`)
      .then((response) => {
        location.reload();
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function editEarning() {
    navigate("/add", { state: {
      id: props.earning.id,
      descriptionEarning: props.earning.description,
      valueEarning: props.earning.value,
      paymentDay: props.earning.receiptDate,
    } });
  }
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
            <button onClick={editEarning} className="pointer">
              <i className="emoji-icon">&#9999;&#65039;</i>
            </button>
            <button onClick={deleteEarning} className="pointer">
              <i className="emoji-icon">&#128465;</i>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
