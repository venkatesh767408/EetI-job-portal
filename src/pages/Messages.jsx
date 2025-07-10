
import React from 'react';
import './Messages.css';

const Messages = () => {
  const users = [
    { name: 'Darlene Robertson', unread: 0 },
    { name: 'Jane Cooper', unread: 2 },
    { name: 'Arlene McCoy', unread: 2 },
    { name: 'Albert Flores', unread: 0 },
    { name: 'Williamson', unread: 2 },
    { name: 'Kristin Watson', unread: 0 },
    { name: 'Annette Black', unread: 0 },
    { name: 'Jacob Jones', unread: 0 }
  ];

  return (
    <div className="messages-container">
      {/* Left Sidebar */}
      <div className="messages-sidebar">
        <h2>Messages!</h2>
        <p>Ready to jump back in?</p>
        <input type="text" className="search-box" placeholder="Search" />
        <div className="user-list">
          {users.map((user, idx) => (
            <div key={idx} className="user-card">
              <div className="avatar"></div>
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-role">Head of Development</div>
              </div>
              <span className="time">35 mins</span>
              {user.unread > 0 && <span className="badge">{user.unread}</span>}
            </div>
          ))}
        </div>
      </div>

      {/* Right Chat Window */}
      <div className="chat-section">
        <div className="chat-header">
          <div className="chat-user">
            <div className="avatar" />
            <div>
              <strong>Arlene McCoy</strong>
              <p className="status">Active</p>
            </div>
          </div>
          <button className="delete-convo">Delete Conversation</button>
        </div>

        <div className="chat-body">
          <div className="message-row">
            <div className="avatar" />
            <div className="message other">
              <p>How likely are you to recommend our company to your friends and family?</p>
            </div>
          </div>

          <div className="message-row you">
            <div className="message">
              <p>Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</p>
            </div>
            <div className="avatar" />
          </div>

          <div className="message-row">
            <div className="avatar" />
            <div className="message other">
              <p>Ok, Understood!</p>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send Message</button>
        </div>

        <div className="footer">
          <p>© 2025 Superio by <span>ib-themes</span>. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Messages;

