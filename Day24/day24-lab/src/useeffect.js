import { useState, useEffect } from "react";

function App() {
  const carsListSpecs = [
    {
      id: "001",
      Name: "chevrolet chevelle malibu",
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 307,
      Horsepower: 130,
      Weight_in_lbs: 3504,
      Acceleration: 12,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      id: "002",
      Name: "buick skylark 320",
      Miles_per_Gallon: 15,
      Cylinders: 8,
      Displacement: 350,
      Horsepower: 165,
      Weight_in_lbs: 3693,

      Acceleration: 11.5,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      id: "003",
      Name: "plymouth satellite",
      Miles_per_Gallon: 18,
      Cylinders: 8,
      Displacement: 318,
      Horsepower: 150,
      Weight_in_lbs: 3436,
      Acceleration: 11,
      Year: "1970-01-01",
      Origin: "USA",
    },
    {
      id: "004",
      Name: "amc rebel sst",
      Miles_per_Gallon: 16,
      Cylinders: 8,
      Displacement: 304,
      Horsepower: 150,
      Weight_in_lbs: 3433,

      Acceleration: 12,
      Year: "1970-01-01",
      Origin: "USA",
    },
  ];

  const [currentCar, setCurrentCar] = useState();
  const [carDetail, setCarDetail] = useState();

  useEffect(() => {
    let getCarDetail = carsListSpecs.find((x) => x.id === currentCar);
    setCarDetail(getCarDetail);
  }, [currentCar]);

  return (
    <>
      <h1>Select CAR</h1>
      <select onChange={(e) => setCurrentCar(e.target.value)} defaultValue={""}>
        <option value="" disabled>
          Select Your Car
        </option>
        <option value="001">Volvo</option>
        <option value="002">Saab</option>
        <option value="003">Mercedes</option>
        <option value="004">Audi</option>
      </select>
      <hr />
      <h3>CAR DETAIL</h3>
      <p>{JSON.stringify(carDetail)}</p>
    </>
  );
}

export default App;
