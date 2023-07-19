import { useState } from "react";

function Widget() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        "https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => {
          void fetchData();
        }}
      >
        Fetch Data
      </button>
      {loading && <div>Loading...</div>}
      {data && !loading && <div>{JSON.stringify(data, null, 2)}</div>}
    </>
  );
}

export default Widget;
