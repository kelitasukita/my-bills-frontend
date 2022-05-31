import axios from "axios";
import { useEffect, useState } from "react";
import { EarningsItem } from "./EarningsItem";

export function Earnings(props) {
  const [list, setList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    axios
      .get(process.env.API_HOST + props.endpoint)
      .then((response) => {
        setList(response.data.data);
        setTotal(response.data.total);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [props.endpoint]);

  return (
    <section className="pay-card-boxes">
      <div className="title">
        <h3>{props.title}</h3>
        <h3 className="total">€{total}</h3>
      </div>
      <div className="container-bills">
        {list.map((earning) => {
          return <EarningsItem key={earning.id} earning={earning} />;
        })}
      </div>
    </section>
  );
}
