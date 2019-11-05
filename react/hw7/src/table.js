import React, { Component } from "react";
import confirm from "./confirm";

const Row = props => {
  return (
    <tr>
      <td>{props.item}</td>
      <td>
        <button onClick={e => props.handleDelete(props.item)}>删除</button>
      </td>
    </tr>
  );
};

class Table extends Component {
  render() {
    return (
      <table>
        <tbody>
          {this.props.items.map(item => {
            return (
              <Row key={item} handleDelete={this.handleDelete} item={item} />
            );
          })}
        </tbody>
      </table>
    );
  }

  async handleDelete(name) {
    let res = await confirm("确认删除吗？");
    if (res) {
      console.log("是" + name);
    } else {
      console.log("否" + name);
    }
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: ["Apple", "Banana", "Orange"],
    };
  }

  render() {
    return <Table items={this.state.items} />;
  }
}

export default App;
