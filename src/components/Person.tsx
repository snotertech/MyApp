import React, { useState } from "react";
import { useAppStore } from "../Store/Store";
import { PersonProps } from "../types/types";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";
import { Stack, TextField } from "@mui/material";

export default function Person({
  person,
  onRemovePerson,
  onEditPerson,
  edit,
  onSetEditId,
}: PersonProps) {
  const { editId, setEditId } = useAppStore();
  const [newName, setNewName] = useState(person.name);

  const isEditing = edit === person.id || editId === person.id;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewName(e.target.value);
  };

  const handleEditClick = () => {
    onSetEditId();
    setNewName(person.name);
  };

  const handleConfirmClick = () => {
    onEditPerson(newName);
    setEditId(null); // Reset editId in the store
  };

  return (
    <div className="person-container">
      {isEditing ? (
        <>
          <div className="input-container">
            <Stack spacing={1} direction="row">
              <TextField
                variant="outlined"
                size="small"
                placeholder="name"
                value={newName}
                onChange={handleNameChange}
              />

              <Button
                variant="contained"
                startIcon={<ChangeCircleIcon />}
                onClick={handleConfirmClick}
              >
                Change
              </Button>
            </Stack>
          </div>
        </>
      ) : (
        <div className="info-container">
          <Stack spacing={1} direction="row">
            <span
              title={person.name}
              style={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                maxWidth: 60,
                textWrap: "nowrap",
                textOverflow: "ellipsis",
              }}
            >
              {person.name}
            </span>

            <div style={{ position: "relative", left: 50 }}>
              <Stack spacing={1} direction="row">
                <Button
                  variant="contained"
                  startIcon={<DeleteIcon />}
                  onClick={onRemovePerson}
                >
                  Remove
                </Button>
                <Button
                  variant="contained"
                  startIcon={<EditIcon />}
                  onClick={handleEditClick}
                >
                  Edit
                </Button>
              </Stack>
            </div>
          </Stack>
        </div>
      )}
    </div>
  );
}
