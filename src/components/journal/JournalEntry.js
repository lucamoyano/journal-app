import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize:'cover',
                    backgroundImage:'url(https://img.ecartelera.com/noticias/59700/59701-m.jpg)'
                }}
            >
            </div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
