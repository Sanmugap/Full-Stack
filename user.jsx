import React from "react";

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      age: "",
      message: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, age } = this.state;

    // Basic validation
    if (!name || !email || !age) {
      this.setState({ message: "All fields are required!" });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      this.setState({ message: "Invalid email format!" });
      return;
    }

    if (isNaN(age) || age <= 0) {
      this.setState({ message: "Age must be a positive number!" });
      return;
    }

    this.setState({
      message: `Profile updated successfully!\nName: ${name}, Email: ${email}, Age: ${age}`,
    });
    alert(`Profile updated successfully!\nName: ${name}\nEmail: ${email}\nAge: ${age}`);
  };

  render() {
    const { name, email, age, message } = this.state;

    return (
      <div style={{ maxWidth: "400px", margin: "50px auto", textAlign: "center" }}>
        <h2>User Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <input
              type="number"
              name="age"
              placeholder="Enter your age"
              value={age}
              onChange={this.handleChange}
            />
          </div>
          <div style={{ marginTop: "10px" }}>
            <button type="submit">Update Profile</button>
          </div>
        </form>
        {message && (
          <p style={{ marginTop: "10px", color: "green", whiteSpace: "pre-wrap" }}>
            {message}
          </p>
        )}
      </div>
    );
  }
}

export default User;
