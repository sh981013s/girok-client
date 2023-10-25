import { create } from 'zustand';

type CalenderStore = {
  selectedDate: Date;
  selectDate: (date: Date) => void;
};

export const useCalenderStore = create<CalenderStore>((set) => ({
  selectedDate: new Date(),
  selectDate: (date) => set({ selectedDate: date }),
}));
