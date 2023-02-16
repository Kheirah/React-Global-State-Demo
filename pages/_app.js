import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

const inititalAnimals = [
  { id: 1, name: "Cats", count: 0 },
  { id: 2, name: "Dogs", count: 0 },
  { id: 3, name: "Sheep", count: 0 },
  { id: 4, name: "Dragons", count: 0 },
];

export default function App({ Component, pageProps }) {
  const [animals, setAnimals] = useState(inititalAnimals);

  function handleAdd(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId ? { ...animal, count: animal.count + 1 } : animal
      )
    );
  }

  function handleSubtract(animalId) {
    setAnimals(
      animals.map((animal) =>
        animal.id === animalId
          ? { ...animal, count: Math.max(0, animal.count - 1) }
          : animal
      )
    );
  }

  const animalCounts = animals.map((animal) => animal.count);
  const totalSum = animalCounts.reduce((acc, curr) => acc + curr);
  const countAverage = totalSum / animals.length;
  const dragonCount = animals.find((animal) => animal.name === "Dragons").count;

  return (
    <>
      <GlobalStyle />
      <Layout totalSum={totalSum} dragonCount={dragonCount}>
        <Component
          {...pageProps}
          animals={animals}
          onAdd={handleAdd}
          onSubtract={handleSubtract}
          totalSum={totalSum}
          countAverage={countAverage}
          dragonCount={dragonCount}
        />
      </Layout>
    </>
  );
}
