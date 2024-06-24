import React from "react";
// import BaseUrls from "./baseUrls";

const GIT_USER_DETAILS = "https://api.github.com/users/Deepikakumar0706";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonName: "Register",
      registered: false,
      count: 0,
      count1: 0,
      login: "Sample",
      avatar_url: "",
      repos_url: "",
    };
  }

  fetchGITRepoList = async () => {
    const data = await fetch(GIT_USER_DETAILS);
    const gitResponse = await data.json();

    this.setState({
      login: gitResponse.login,
      avatar_url: gitResponse.avatar_url,
      repos_url: gitResponse.repos_url,
    });
  };

  render() {
    return (
      <div>
        <div className="rest-menu-list-cont git-menu-list-cont">
          <h2>{this.props.name}</h2>
          <h4>{this.props.email}</h4>
          <h4>{this.props.id}</h4>
          <p>
            {!this.state.registered
              ? "Please Register"
              : "Registration successful"}
          </p>
          <button
            onClick={() => {
              if (this.state.registered) {
                this.setState({
                  buttonName: "Register",
                  registered: false,
                });
              } else {
                this.setState({
                  buttonName: "UnRegister",
                  registered: true,
                });
              }
            }}
          >
            {this.state.buttonName}
          </button>
          <div className="details-cont">
            <div>
              <h1>Git details in class based component</h1>
              <h3>{`Name - ${this.state.login}`}</h3>
              <h4>{`Git URL - ${this.state.repos_url}`}</h4>
            </div>
            <img src={this.state.avatar_url} width="100" height="100" />
          </div>
          <div className="btn-cont">
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count: this.state.count - 1,
                });
              }}
            >
              -
            </button>
            <p>Count {this.state.count}</p>
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count: this.state.count + 1,
                });
              }}
            >
              +
            </button>
          </div>
          <div className="btn-cont">
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count1: this.state.count1 - 1,
                });
              }}
            >
              -
            </button>
            <p>Count1 - {this.state.count1}</p>
            <button
              className="btn-1"
              onClick={() => {
                this.setState({
                  count1: this.state.count1 + 1,
                });
              }}
            >
              +
            </button>
          </div>
        </div>
        {/* <UserChildClass name="child"></UserChildClass> */}
      </div>
    );
  }
}

export default UserClass;
