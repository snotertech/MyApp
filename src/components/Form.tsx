import React, { useState } from "react";
import { FormProps } from "../types/types";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { Stack, TextField } from "@mui/material";

export default function Form({ onAddPerson }: FormProps) {
  const [newPerson, setNewPerson] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const id = crypto.randomUUID();
    if (!newPerson) return;
    const person = { id, name: newPerson };
    onAddPerson(person);
    setNewPerson("");
    console.log(person);
  }

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={1} direction="row">
        <TextField
          variant="outlined"
          size="small"
          placeholder=""
          value={newPerson}
          onChange={(e) => setNewPerson(e.target.value)}
        />
        <Button type="submit" variant="contained" startIcon={<AddIcon />}>
          Add
        </Button>
      </Stack>
    </form>
  );
}
