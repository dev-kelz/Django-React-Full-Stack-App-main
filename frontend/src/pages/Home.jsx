import { useState, useEffect } from "react";
import LogoutButton from "../components/LogoutButton";
import Note from "../components/Note";
import "../styles/Home.css";

function Home() {
    const [notes, setNotes] = useState([
        { id: 1, title: "Welcome!", content: "This is your first note.", created_at: new Date().toISOString(), updated_at: new Date().toISOString() },
        { id: 2, title: "Getting Started", content: "Add more notes using the form below.", created_at: new Date().toISOString(), updated_at: new Date().toISOString() }
    ]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    // No need for initial API call
    useEffect(() => {
        // Load notes from localStorage if available
        const savedNotes = localStorage.getItem('notes');
        if (savedNotes) {
            setNotes(JSON.parse(savedNotes));
        }
    }, []);

    // Save notes to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(notes));
    }, [notes]);

    const deleteNote = (id) => {
        if (window.confirm("Are you sure you want to delete this note?")) {
            setNotes(notes.filter(note => note.id !== id));
        }
    };

    const createNote = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("Please enter both title and content");
            return;
        }
        
        const newNote = {
            id: Date.now(), // Use timestamp as unique ID
            title: title.trim(),
            content: content.trim(),
            created_at: new Date().toISOString(),
            updated_at: new Date().toISOString()
        };
        
        setNotes([...notes, newNote]);
        setTitle("");
        setContent("");
    };

    return (
        <div>
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <LogoutButton />
            </div>
            <div>
                <h2>Notes</h2>
                {notes.map((note) => (
                    <Note note={note} onDelete={deleteNote} key={note.id} />
                    
                ))}
            </div>
            <h2>Create a Note</h2>
            <form onSubmit={createNote}>
                <label htmlFor="title">Title:</label>
                <br />
                <input
                    type="text"
                    id="title"
                    name="title"
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label htmlFor="content">Content:</label>
                <br />
                <textarea
                    id="content"
                    name="content"
                    required
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>
                <br />
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    );
}

export default Home;
