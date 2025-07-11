
// Messages.jsx
import React from 'react';
import './Messages.css';

const users = [
  { name: 'Darlene Robertson', unread: 0, image: '../assets/darlene.png' },
  { name: 'Jane Cooper', unread: 2, image: '/avatars/jane.png', badgeColor: 'blue' },
  { name: 'Arlene McCoy', unread: 2, image: '/avatars/arlene.png', badgeColor: 'green' },
  { name: 'Albert Flores', unread: 0, image: '/avatars/albert.png' },
  { name: 'Williamson', unread: 2, image: '/avatars/williamson.png', badgeColor: 'yellow' },
  { name: 'Kristin Watson', unread: 0, image: '/avatars/kristin.png' },
  { name: 'Annette Black', unread: 0, image: '/avatars/annette.png' },
  { name: 'Jacob Jones', unread: 0, image: '/avatars/jacob.png' },
];

const Messages = () => {
  return (
    <div className="messages-container">
      {/* Sidebar */}
      <div className="messages-sidebar">
        <h2>Messages!</h2>
        <p>Ready to jump back in?</p>
        <input type="text" className="search-box" placeholder="Search" />
        <div className="user-list">
          {users.map((user, idx) => (
            <div key={idx} className="user-card">
              <div
                className="avatar"
                style={{ backgroundImage: `url(${user.image})` }}
              ></div>
              <div className="user-info">
                <div className="user-name">{user.name}</div>
                <div className="user-role">Head of Development</div>
              </div>
              <span className="time">35 mins</span>
              {user.unread > 0 && (
                <span className={`badge ${user.badgeColor || ''}`}>
                  {user.unread}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Chat Section */}
      <div className="chat-section">
        <div className="chat-header">
          <div className="chat-user">
            <div
              className="avatar"
              style={{ backgroundImage: `url(/avatars/arlene.png)` }}
            />
            <div>
              <strong>Arlene McCoy</strong>
              <p className="status">Active</p>
            </div>
          </div>
          <button className="delete-convo">Delete Conversation</button>
        </div>

        <div className="chat-body">
          <div className="message-row">
            <div
              className="avatar"
              style={{ backgroundImage: `url(/avatars/albert.png)` }}
            />
            <div className="message other">
              <p>
                How likely are you to recommend our company to your friends and
                family?
              </p>
            </div>
          </div>

          <div className="message-row you">
            <div className="message you">
              <p>
                Hey there, we’re just writing to let you know that you’ve been
                subscribed to a repository on GitHub.
              </p>
            </div>
            <div
              className="avatar"
              style={{ backgroundImage: `url(/avatars/kristin.png)` }}
            />
          </div>

          <div className="message-row">
            <div
              className="avatar"
              style={{ backgroundImage: `url(/avatars/cameron.png)` }}
            />
            <div className="message other">
              <p>Ok, Understood!</p>
            </div>
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send Message</button>
        </div>

      </div>
    </div>
  );
};

export default Messages;
