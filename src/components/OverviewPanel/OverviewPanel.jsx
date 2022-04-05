import { useEffect, useState } from "react";
import { OverviewItem } from "./OverviewItem";

import "./overviewPanel.scss";

export function OverviewPanel(props) {
  const [earnings, setEarnings] = useState();
  const [expenses, setExpenses] = useState();
  const [balance, setBalance] = useState();

  // useEffect(funcao(1º parâmetro), arrayDeCoisasQuePodemMudarParaExecutarAFuncaoAnterior(2º parâmetro))

  useEffect(() => {
    fetch(
      `${process.env.API_HOST}/overview?year=${props.year}&month=${props.month}`
    )
      .then((response) => response.json())
      .then((response) => {
        setEarnings(response.earnings);
        setExpenses(response.expenses);
        setBalance(response.balance);
      });
  }, [props.year, props.month]);

  return (
    <section id="balance">
      <OverviewItem title="Earnings" value={earnings} />
      <OverviewItem title="Expenses" value={expenses} />
      <OverviewItem title="Balance" value={balance} />
    </section>
  );
}
