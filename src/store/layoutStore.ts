import {create} from 'zustand';

interface ILayout {
  title: string;
  goBack: boolean;
  changeTitle: (newTitle: string) => void;
  toggleGoBack: () => void;
}

export const useLayoutStore = create<ILayout>((set) => ({
  title: 'People of Star Wars',
  goBack: false,
  changeTitle: (newTitle: string) => set(() => ({
    title: newTitle
  })),
  toggleGoBack: () => set(state => ({
    goBack: !state.goBack
  }))
}));
