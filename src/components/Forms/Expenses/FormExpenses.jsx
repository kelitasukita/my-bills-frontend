import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export function FormExpenses() {
  const navigate = useNavigate();

  const { state } = useLocation();

  const [description, setDescription] = useState(state?.description ?? "");
  const [currency, setCurrency] = useState(state?.currency ?? "EUR");
  const [value, setValue] = useState(state?.value ?? 0);
  const [paid, setPaid] = useState(state?.paid ?? false);
  const [dueDate, setDueDate] = useState(state?.dueDate ?? "");
  const [automaticDebit, setAutomaticDebit] = useState(
    state?.automaticDebit ?? false
  );
  const [recurrent, setRecurrent] = useState(state?.recurrent ?? false);
  const [currentInstallment, setCurrentInstallment] = useState(
    state?.currentInstallment ?? 0
  );
  const [installments, setInstallments] = useState(state?.installments ?? 0);
  const [obs, setObs] = useState(state?.obs ?? "");

  function handleCreateNewBill(event) {
    event.preventDefault();

    const data = {
      description,
      currency,
      value,
      paid,
      dueDate,
      automaticDebit,
      recurrent,
      currentInstallment,
      installments,
      obs,
    };

    let api;

    if (state?.id) {
      api = axios.put(`${process.env.API_HOST}/expenses/${state.id}`, data);
    } else {
      api = axios.post(`${process.env.API_HOST}/expenses`, data);
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
      <form onSubmit={handleCreateNewBill}>
        <h3>Add Bill</h3>
        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            placeholder="Vodafone..."
          />
        </div>
        <div className="currency">
          <label>
            <input
              type="radio"
              name="currency"
              checked={currency == "EUR"}
              onChange={(event) => setCurrency(event.target.value)}
              value="EUR"
            />
            <span> EUR</span>
          </label>
          <label>
            <input
              type="radio"
              name="currency"
              checked={currency == "BRL"}
              onChange={(event) => setCurrency(event.target.value)}
              value="BRL"
            />
            <span> BRL</span>
          </label>
          <label>
            <input
              type="radio"
              name="currency"
              checked={currency == "USD"}
              onChange={(event) => setCurrency(event.target.value)}
              value="USD"
            />
            <span> USD</span>
          </label>
        </div>
        <div>
          <label>Value</label>
          <input
            type="number"
            name="value"
            value={value}
            onChange={(event) => setValue(event.target.value)}
            min="0.00"
            step="0.01"
          />
          <label>
            <input
              type="checkbox"
              name="paid"
              checked={paid}
              onChange={(event) => setPaid(event.target.checked)}
            />{" "}
            Already Paid{" "}
          </label>
        </div>
        <div>
          <label>Due Date</label>
          <input
            type="date"
            name="dueDate"
            value={dueDate}
            onChange={(event) => setDueDate(event.target.value)}
          />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="automaticDebit"
              checked={automaticDebit}
              onChange={(event) => setAutomaticDebit(event.target.checked)}
            />{" "}
            Automatic Debit
          </label>
          <label>
            <input
              type="checkbox"
              name="recurrent"
              checked={recurrent}
              onChange={(event) => setRecurrent(event.target.checked)}
            />{" "}
            Recurrent
          </label>
        </div>
        <div>
          <label>Installments</label>
          <input
            type="number"
            name="currentInstallment"
            value={currentInstallment}
            className="small-input"
            onChange={(event) => setCurrentInstallment(+event.target.value)}
          />
          <span> of </span>
          <input
            type="number"
            name="installments"
            value={installments}
            className="small-input"
            onChange={(event) => setInstallments(+event.target.value)}
          />
        </div>
        <div>
          <label>Observation</label>
          <input
            type="text"
            name="obs"
            value={obs}
            placeholder="Celphones included..."
            onChange={(event) => setObs(event.target.value)}
          />
        </div>
        <div className="actions">
          <input type="submit" value="Add" className="btn-add" />
        </div>
      </form>
    </div>
  );
}
