import React, { Component } from "react";
import { Table } from "reactstrap";

class Tables extends Component {
  renderCell = (item, collumn) => {
    if (collumn.content) return collumn.content(item);
    return item[collumn.path];
  };
  renderTabldeHeader = () => {
    return (
      <thead>
        <tr>
          {this.collumns.map((collumn) => (
            <th key={collumn.path}>{collumn.label}</th>
          ))}
        </tr>
      </thead>
    );
  };
  renderTableBody = () => {
    return (
      <tbody>
        {this.state.data.map((item) => (
          <tr key={item._id}>
            {this.collumns.map((collumn) => (
              <td key={collumn.path}>{this.renderCell(item, collumn)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };
  renderTable = () => {
    return (
      <Table>
        {this.renderTabldeHeader()}
        {this.renderTableBody()}
      </Table>
    );
  };
}

export default Tables;
