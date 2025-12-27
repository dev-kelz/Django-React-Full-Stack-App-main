import { useState, useEffect } from "react";
import api from "../api";
import LogoutButton from "../components/LogoutButton";
import Note from "../components/Note"
import "../styles/Home.css"

function Home() {
    const [notes, setNotes] = useState([]);
    const [content, setContent] = useState("");
    const [title, setTitle] = useState("");

    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
                console.log(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Note deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

    const createNote = (e) => {
        e.preventDefault();
        api
            .post("/api/notes/", { content, title })
            .then((res) => {
                if (res.status === 201) {
                    alert("Note created!");
                    setTitle("");
                    setContent("");
                } else {
                    alert("Failed to make note.");
                }
                getNotes();
            })
            .catch((err) => alert(err));
    };

    return (
        <div className="home-container">
            <header className="home-header">
                <div className="header-content">
                    <h1 className="app-title">My Notes</h1>
                    <LogoutButton />
                </div>
            </header>
            
            <main className="main-content">
                <section className="notes-section">
                    <div className="section-header">
                        <h2>Your Notes</h2>
                        <span className="notes-count">{notes.length} {notes.length === 1 ? 'note' : 'notes'}</span>
                    </div>
                    <div className="notes-grid">
                        {notes.length === 0 ? (
                            <div className="empty-state">
                                <p>No notes yet. Create your first note below!</p>
                            </div>
                        ) : (
                            notes.map((note) => (
                                <Note note={note} onDelete={deleteNote} key={note.id} />
                            ))
                        )}
                    </div>
                </section>
                
                <section className="create-note-section">
                    <div className="form-container">
                        <h2>Create New Note</h2>
                        <form onSubmit={createNote} className="note-form">
                            <div className="form-group">
                                <label htmlFor="title">Title</label>
                                <input
                                    type="text"
                                    id="title"
                                    name="title"
                                    required
                                    placeholder="Enter note title..."
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <textarea
                                    id="content"
                                    name="content"
                                    required
                                    placeholder="Write your note here..."
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-button">
                                <span>Create Note</span>
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </button>
                        </form>
                    </div>
                </section>
            </main>
        </div>
    );
}

export default Home;
