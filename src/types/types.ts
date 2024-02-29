// types/types.ts
export interface Person {
  id: string;
  name: string;
}

export interface FormProps {
  onAddPerson: (person: Person) => void;
}

export interface PersonsProps {
  persons: Person[];
  onRemovePerson: (id: string) => void;
  onEditPerson: (id: string, newName: string) => void;
  edit: string | null;
  onSetEditId: (id: string | null) => void;
}

export interface PersonProps {
  person: Person;
  onRemovePerson: () => void;
  onEditPerson: (newName: string) => void;
  edit: string | null;
  onSetEditId: () => void;
}
