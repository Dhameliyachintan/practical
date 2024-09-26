import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editdata, setEditdata] = useState(null);

  useEffect(() => {
    const fetchUsers = () => {
      setTimeout(() => {
        fetch("http://localhost:4000/users")
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .then((data) => {
            setUsers(data);
            setLoading(false);
          })
          .catch((err) => {
            setError(err.message);
            setLoading(false);
          });
      }, 1000); // Simulated loading time
    };

    fetchUsers();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = { name, email };

    fetch("http://localhost:4000/users", {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add user");
        }
        return response.json();
      })
      .then((data) => {
        setUsers((prevUsers) => [...prevUsers, data]);
        clearForm();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleupdate = () => {
    const updatedUser = { name, email };

    fetch(`http://localhost:4000/users/${editdata}`, {
      method: "PUT",
      body: JSON.stringify(updatedUser),
      headers: {
        "Content-type": "application/json; charset=UTF-",
      },
    })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to add user");
      }
      return response.json();
    })
      .then((data) => {
        setUsers((prevUsers) =>
          prevUsers.map((user) => (user.id === editdata ? data : user))
        );
        clearForm();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const handleDelete = (userId) => {
    fetch(`http://localhost:4000/users/${userId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to delete user");
        }
        return response.json();
      })
      .then(() => {
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const clearForm = () => {
    setName("");
    setEmail("");
    setEditdata(null);
  };

  const handleEdit = (user) => {
    setName(user.name);
    setEmail(user.email);
    setEditdata(user.id);
  };

  return (
    <div>
      <form onSubmit={editdata ? handleupdate : handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">{editdata ? "Update User" : "Add User"}</button>
      </form>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} - {user.email}
            <button onClick={() => handleEdit(user)}>Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
