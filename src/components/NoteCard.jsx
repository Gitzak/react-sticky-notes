import React, { useRef, useEffect, useState, useContext } from "react";
import Trash from "../icons/Trash";
import { setNewOffset, autoGrow, setZIndex, bodyParser } from "../utils.js";
import { db } from "../appwrite/databases.js";
import Spinner from "../icons/Spinner.jsx";
import DeleteButton from "./DeleteButton.jsx";
import { NoteContext } from "../context/NoteContext.jsx";

const NoteCard = ({ note }) => {
  const { setSelectedNote } = useContext(NoteContext);
    // let position = JSON.parse(note.position);
    const [position, setPosition] = useState(JSON.parse(note.position));
    const colors = JSON.parse(note.colors);
    // const body = JSON.parse(note.body);
    const body = bodyParser(note.body);
    const [saving, setSaving] = useState(false);

    const keyUpTimer = useRef(null);

    const handleKeyUp = async () => {
        setSaving(true);

        if (keyUpTimer.current) {
            clearTimeout(keyUpTimer.current);
        }

        keyUpTimer.current = setTimeout(() => {
            saveData("body", textAreaRef.current.value);
        }, 2000);
    };

    let mouseStartPos = { x: 0, y: 0 };

    const cardRef = useRef(null);

    const mouseDown = (e) => {
        if (e.target.className === "card-header") {
            setZIndex(cardRef.current);

            mouseStartPos.x = e.clientX;
            mouseStartPos.y = e.clientY;

            document.addEventListener("mousemove", mouseMove);
            document.addEventListener("mouseup", mouseUp);

            setSelectedNote(note);
        }
    };

    const mouseUp = () => {
        document.removeEventListener("mousemove", mouseMove);
        document.removeEventListener("mouseup", mouseUp);

        const newPosition = setNewOffset(cardRef.current); //{x,y}
        saveData("position", newPosition);
    };

    const mouseMove = (e) => {
        let mouseMoveDir = {
            x: mouseStartPos.x - e.clientX,
            y: mouseStartPos.y - e.clientY,
        };

        mouseStartPos.x = e.clientX;
        mouseStartPos.y = e.clientY;

        const newPosition = setNewOffset(cardRef.current, mouseMoveDir);

        setPosition(newPosition);
    };

    const textAreaRef = useRef(null);

    useEffect(() => {
        autoGrow(textAreaRef);
        setZIndex(cardRef.current);
    }, []);

    const saveData = async (key, value) => {
        const payload = { [key]: JSON.stringify(value) };
        try {
            await db.notes.update(note.$id, payload);
        } catch (error) {
            console.error(error);
        }
        setSaving(false);
    };

    return (
        <div
            ref={cardRef}
            className="card"
            style={{
                backgroundColor: colors.colorBody,
                left: `${position.x}px`,
                top: `${position.y}px`,
            }}
        >
            <div
                className="card-header"
                style={{ backgroundColor: colors.colorHeader }}
                onMouseDown={mouseDown}
            >
                <DeleteButton noteId={note.$id} />
                {/* <Trash /> */}
                {saving && (
                    <div className="card-saving">
                        <Spinner color={colors.colorText} />
                        <span style={{ color: colors.colorText }}>
                            Saving...
                        </span>
                    </div>
                )}
            </div>
            <div className="card-body">
                <textarea
                    ref={textAreaRef}
                    style={{ color: colors.colorText }}
                    defaultValue={body}
                    onInput={() => {
                        autoGrow(textAreaRef);
                    }}
                    onFocus={() => {
                        setZIndex(cardRef.current);
                        setSelectedNote(note);
                    }}
                    onKeyUp={handleKeyUp}
                ></textarea>
            </div>
        </div>
    );
};

export default NoteCard;
