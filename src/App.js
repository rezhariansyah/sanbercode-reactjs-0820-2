import React from "react";
import "./App.css";

function App() {
  return (
    <div className="wrapper">
      <h1>Form Pembelian Buah</h1>
      <table style={{ width: "100%" }}>
        <tbody>
          <tr>
            <td className="paddingbot">
              <b>Nama Pelanggan</b>
            </td>
            <td className="paddingbot">
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td id="daft">
              <b>Daftar Item</b>
            </td>
            <td>
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                defaultValue="Bike"
              />
              <label htmlFor="vehicle1"> Semangka</label>
              <br />
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                defaultValue="Car"
              />
              <label htmlFor="vehicle2"> Jeruk</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                defaultValue="Boat"
              />
              <label htmlFor="vehicle3"> Nanas</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                defaultValue="Boat"
              />
              <label htmlFor="vehicle3"> Salak</label>
              <br />
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                defaultValue="Boat"
              />
              <label htmlFor="vehicle3"> Anggur</label>
              <br />
            </td>
          </tr>
        </tbody>
      </table>
      <br />
      <input id="button" type="submit" defaultValue="Submit" />
    </div>
  );
}

export default App;
