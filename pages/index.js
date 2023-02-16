import CounterStats from "../components/CounterStats";
import Link from "../components/Link";

export default function HomePage({ totalSum, countAverage, dragonCount }) {
  return (
    <>
      <CounterStats
        totalSum={totalSum}
        countAverage={countAverage}
        dragonCount={dragonCount}
      />

      <Link href="/counters">To the counters →</Link>
    </>
  );
}
