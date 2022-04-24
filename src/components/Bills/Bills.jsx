import { useEffect, useState } from "react";
import { BillItem } from "./BillItem";

import "./payBoxes.scss";

export function Bills(props) {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalMonth, setTotalMonth] = useState(0);
  const [totalOverdue, setTotalOverdue] = useState(0);

  // O fetch é uma forma de usar um GET nativo. Para um PUT e POST preciso do AXIOS.
  useEffect(() => {
    fetch(process.env.API_HOST + props.endpoint)
      .then((response) => response.json())
      .then((apiResponse) => {
        setList(apiResponse.data);
        setTotal(apiResponse.total);
        setTotalOverdue(apiResponse.totalOverdue);

        if (apiResponse.totalMonth >= 0) {
          setTotalMonth(apiResponse.totalMonth);
        }
      });
  }, [props.endpoint]);

  return (
    <section className="pay-card-boxes">
      <div className="title">
        <h3>{props.title}</h3>
        <h3 className="total">
          {totalOverdue ? (
            <span className="overdue">€{Number(totalOverdue).toFixed(2)} </span>
          ) : (
            ""
          )}
          €{totalMonth ? totalMonth : total}
        </h3>
      </div>
      <div className="container-bills">
        {list.map((bill) => {
          return <BillItem key={bill.id} bill={bill} />;
        })}
      </div>
    </section>
  );
}
