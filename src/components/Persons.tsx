import Person from "./Person";
import { PersonsProps } from "../types/types";
import { Typography } from "@mui/material";

export default function Persons({
  persons,
  onRemovePerson,
  onEditPerson,
  edit,
  onSetEditId,
}: PersonsProps) {
  return (
    <div>
      {persons.length > 0 ? (
        persons.map((person) => (
          <Person
            key={person.id}
            person={person}
            onRemovePerson={() => onRemovePerson(person.id)}
            onEditPerson={(newName) => onEditPerson(person.id, newName)}
            edit={edit}
            onSetEditId={() => onSetEditId(person.id)}
          />
        ))
      ) : (
        <Typography variant="body1">
          No student available. Add someone!
        </Typography>
      )}
    </div>
  );
}
