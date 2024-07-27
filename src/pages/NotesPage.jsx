import React, { useContext, useEffect, useState } from "react";
// import { fakeData as notes } from "../assets/fakeData.js";
import NoteCard from "../components/NoteCard";
import { db } from "../appwrite/databases";
import { NoteContext } from "../context/NoteContext";
import Controls from "../components/Controls";

const NotesPage = () => {
    const { notes, setNotes } = useContext(NoteContext);

    // const [notes, setNotes] = useState([]);

    // const init = async () => {
    //     const response = await db.notes.list();
    //     setNotes(response.documents);
    // };

    // useEffect(() => {
    //     init();
    // }, []);

    return (
        <div>
            {notes.map((note) => (
                // <NoteCard note={note} key={note.$id} setNotes={setNotes} />
                <NoteCard note={note} key={note.$id} />
            ))}
            <Controls />
        </div>
    );
};

export default NotesPage;
