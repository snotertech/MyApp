import { useAppStore } from "./Store/Store";
import Form from "./components/Form";
import Persons from "./components/Persons";

export default function App() {
  const { persons, editId, addPerson, removePerson, editPerson, setEditId } =
    useAppStore();

  return (
    <>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Form onAddPerson={addPerson} />
        <div style={{ maxHeight: 200, overflow: "auto", width: 400 }}>
          <Persons
            persons={persons}
            onRemovePerson={removePerson}
            onEditPerson={editPerson}
            edit={editId}
            onSetEditId={setEditId}
          />
        </div>
      </div>
    </>
  );
}
