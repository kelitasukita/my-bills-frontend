import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function FormEarnings() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [descriptionEarning, setDescriptionEarning] = useState(
    state?.descriptionEarning ?? ""
  );
  const [valueEarning, setValueEarning] = useState(state?.valueEarning ?? 0);
  const [paymentDay, setPaymentDay] = useState(state?.paymentDay ?? "");

  function handleEarning(event) {
    event.preventDefault(); // Serve para evitar o reload da tela no submit do formulário

    const data = {
      description: descriptionEarning,
      value: valueEarning,
      receiptDate: paymentDay,
    };

    let api;

    if (state?.id) {
      api = axios.put(`${process.env.API_HOST}/earnings/${state.id}`, data);
    } else {
      api = axios.post(`${process.env.API_HOST}/earnings`, data);
    }

    api
      .then((response) => {
        console.log(response);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });

  }

  return (
    <div className="form-add-bill">
      <form onSubmit={handleEarning}>
        <h3>Add Earnings</h3>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={descriptionEarning}
            onChange={(event) => setDescriptionEarning(event.target.value)}
            placeholder="CustomerGauge.."
          />
        </div>
        <div>
          <label>Value</label>
          <input
            type="number"
            name="value"
            value={valueEarning}
            onChange={(event) => setValueEarning(event.target.value)}
            min="0.00"
            step="0.01"
          />
        </div>
        <div>
          <label>Payment Date</label>
          <input
            type="date"
            name="receiptDate"
            value={paymentDay}
            onChange={(event) => setPaymentDay(event.target.value)}
          />
        </div>
        <div className="actions">
          <input type="submit" value="Add" className="btn-add" />
        </div>
      </form>
    </div>
  );
}
