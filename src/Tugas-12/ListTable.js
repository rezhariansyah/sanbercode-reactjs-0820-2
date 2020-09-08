import React from "react";

export default function ListTable(props) {
  return (
    <>
      {props.data.map((el, index) => {
        return (
          <tr key={index}>
            <td>{el.nama}</td>
            <td>{el.harga}</td>
            <td>{el.berat} kg</td>
            <td style={{ textAlign: "center" }}>
              <button style={{ color: "blue" }} onClick={(e) => props.editItem(index)} >edit</button>
              <button style={{ color: "red" }} onClick={() => props.deleteItem(index)}>delete</button>
            </td>
          </tr>
        );
      })}
    </>
  );
}
