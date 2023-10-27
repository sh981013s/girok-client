import { create } from 'zustand';

type CalenderStore = {
  selectedDate: Date;
  selectDate: (date: Date) => void;
};

export const useCalendarStore = create<CalenderStore>((set) => ({
  selectedDate: new Date(),
  selectDate: (date) => set({ selectedDate: date }),
}));
