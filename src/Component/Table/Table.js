import React from "react";
import "./Table.css";
const Table = ({ userData }) => {
  return (
    <div className="Table-Container">
      <table>
        <tbody>
          <tr>
            <th>Id</th>
            <th>Year</th>
            <th>Medals</th>
          </tr>
          {userData.map((data, id) => {
            return (
              <tr key={id}>
                <td>{data.Id}</td>
                <td>{data.Year}</td>
                <td>{data.Medals}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
