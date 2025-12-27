import React from "react";
import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US", {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })

    return (
        <div className="note-card">
            <div className="note-header">
                <h3 className="note-title">{note.title}</h3>
                <button className="delete-button" onClick={() => onDelete(note.id)} aria-label="Delete note">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3,6 5,6 21,6"></polyline>
                        <path d="m19,6v14a2,2 0 0,1 -2,2H7a2,2 0 0,1 -2,-2V6m3,0V4a2,2 0 0,1 2,-2h4a2,2 0 0,1 2,2v2"></path>
                        <line x1="10" y1="11" x2="10" y2="17"></line>
                        <line x1="14" y1="11" x2="14" y2="17"></line>
                    </svg>
                </button>
            </div>
            <div className="note-content">
                <p>{note.content}</p>
            </div>
            <div className="note-footer">
                <span className="note-date">{formattedDate}</span>
            </div>
        </div>
    );
}

export default Note
