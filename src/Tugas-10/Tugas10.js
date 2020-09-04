import React from "react";
import "./Tugas10.css";

export default function Tugas10(props) {
  console.log(props.data);
  return (
    <>
      <div className="wrapper-tugas10">
        <h1 style={{ textAlign: "center", marginBottom: 30 }}>
          Tabel Harga Buah
        </h1>
        <table className="table-tugas10">
          <tr>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
          </tr>
          {props.data.map((el) => {
            return (
              <tr>
                <td>{el.nama}</td>
                <td>{el.harga}</td>
                <td>{el.berat / 1000} kg</td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
}
