import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import CardContainer from "./components/CardContainer";
import Card from "./components/Card";
import Loader from "./components/Loader";
import { groupBy, orderBy } from "./util/filter";

function App() {
  const [group, setGroup] = useState("status");
  const [order, setOrder] = useState("priority");
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);

  const fetchData = async () => {
    console.log("Fetching data...");
    try {
      const res = await fetch("https://apimocha.com/quicksell/data");
      const data = await res.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (data) {
      setFilteredData(orderBy(groupBy(group, data), order));
    }
  }, [data, group, order]);
  return (
    <div className="flex flex-col">
      {/* Context Api or Redux can be used here to pass the state to the child components */}
      {/* As we have only one child component, we can pass the state as props */}
      <Navbar setGroup={setGroup} setOrder={setOrder} />
      {!filteredData ? (
        <Loader />
      ) : (
        <main className="flex gap-5 overflow-scroll px-14 py-5">
          {Object.keys(filteredData).map((key) => (
            <CardContainer
              key={key}
              title={key}
              count={filteredData[key].length}
              group={group}
              users={data.users}
            >
              {filteredData[key].map((ticket, index) => (
                <Card
                  key={index}
                  ticket={ticket}
                  users={data.users}
                  group={group}
                />
              ))}
            </CardContainer>
          ))}
        </main>
      )}
    </div>
  );
}

export default App;
