import { create } from "zustand";

interface RatingState {
  answer: number;
  isRating: boolean;
  setAnswer: (answer: number) => void;
  setIsRating: (isRating: boolean) => void;
}

const useRating = create<RatingState>()((set) => ({
  answer: 5,
  isRating: true,
  //actions
  setAnswer: (answer: number) => set({ answer: answer }),
  setIsRating: (isRating: boolean) => set({ isRating: isRating }),
}));

export default useRating;
