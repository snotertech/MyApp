import create from "zustand";

type Person = {
  id: string;
  name: string;
};

type AppState = {
  persons: Person[];
  editId: string | null;
  addPerson: (person: Person) => void;
  removePerson: (id: string) => void;
  editPerson: (id: string, newName: string) => void;
  setEditId: (id: string | null) => void;
};

export const useAppStore = create<AppState>((set) => ({
  persons: [],
  editId: null,
  addPerson: (person) =>
    set((state) => ({ persons: [...state.persons, person] })),
  removePerson: (id) =>
    set((state) => ({ persons: state.persons.filter((p) => p.id !== id) })),
  editPerson: (id, newName) =>
    set((state) => ({
      persons: state.persons.map((p) =>
        p.id === id ? { ...p, name: newName } : p
      ),
    })),
  setEditId: (id) => set({ editId: id }),
}));
