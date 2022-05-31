import { useEffect, useState } from "react";
import { Bills } from "../Bills/Bills";
import { Earnings } from "../Earnings/earnings";
import { OverviewPanel } from "../OverviewPanel/OverviewPanel";

export function Overview() {
  const [year, setYear] = useState(new Date().getFullYear());
  const [month, setMonth] = useState(new Date().getMonth());

  useEffect(() => {
    //console.log(year, month);
    const today = new Date();

    if (today.getDate() < 23) {
      setMonth(today.getMonth());

      if (month == 0) {
        setMonth(12);
        setYear(today.getFullYear() - 1);
      }
    } else {
      setMonth(today.getMonth() + 1);
    }
  }, []);

  // const cards = [
  //   // {brand: 'Amex', title: 'Amex', factur: 6732.89},
  //   // {brand: 'Visa', title: 'Visa Kelita', factur: 123.89},
  //   // {brand: 'Visa', title: 'Visa Eder', factur: 321.89},
  //   // {brand: 'NuBank', title: 'NuBank Kelita', factur: 432.89},
  //   // {brand: 'Maestro', title: 'Maestro Kelita', factur: 345.89},
  // ];

  return (
    <>
      <div className="date-filter">
        <select
          name="month"
          onChange={(event) => setMonth(event.target.value)}
          value={month}
        >
          <option value="1">January</option>
          <option value="2">February</option>
          <option value="3">March</option>
          <option value="4">April</option>
          <option value="5">May</option>
          <option value="6">June</option>
          <option value="7">July</option>
          <option value="8">August</option>
          <option value="9">September</option>
          <option value="10">October</option>
          <option value="11">November</option>
          <option value="12">December</option>
        </select>
        <input
          type="number"
          onChange={(event) => setYear(event.target.value)}
          value={year}
          min="1900"
          max="2100"
        />
      </div>

      <OverviewPanel year={year} month={month} />

      <div className="payments">
        <Bills
          endpoint={`/expenses/unpaid?year=${year}&month=${month}`}
          title="Bills to Pay"
        />
        <Bills
          endpoint={`/expenses/paid?year=${year}&month=${month}`}
          title="Paid Bills"
        />
        <Earnings
          endpoint={`/earnings?year=${year}&month=${month}`}
          title="Earnings"
        />

        {/* {cards.map((card, index) => {
          return <CardBox key={index} data={card} />;
        })} */}
      </div>
    </>
  );
}
