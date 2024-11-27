import React from 'react';
import './user.css'; // Correct relative path for the CSS file

function User({ users }) {
    return (
      <div>
        <h1>User Lists</h1>
        {users && users.length > 0 ? (
          <table className="user-table"> {/* Apply the class here */}
            <thead>
              <tr>
                <th>Number</th>
                <th>Title</th>
              </tr>
            </thead>
            <tbody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.id}</td>
                  <td>{user.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No users to display</p>
        )}
      </div>
    );
}

export default User;
