import "./App.css";
import { Card } from "./components/Card/Card";
import { RatingCard } from "./components/RatingCard/RatingCard";
import { FinishCard } from "./components/FinishCard/FinishCard";
import useRating from "./store/store";

function App() {
  const isRating = useRating((state) => state.isRating);

  return isRating ? (
    <Card>
      <RatingCard />
    </Card>
  ) : (
    <Card>
      <FinishCard />
    </Card>
  );
}

export default App;
