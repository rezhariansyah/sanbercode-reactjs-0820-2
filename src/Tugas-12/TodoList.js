import React, { Component } from "react";
import "../Tugas-10/Tugas10.css";
import ListTable from "./ListTable";

let dataHargaBuah = [
  { nama: "Semangka", harga: 10000, berat: 1000 },
  { nama: "Anggur", harga: 40000, berat: 500 },
  { nama: "Strawberry", harga: 30000, berat: 400 },
  { nama: "Jeruk", harga: 30000, berat: 1000 },
  { nama: "Mangga", harga: 30000, berat: 500 },
];

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: dataHargaBuah,
      nama: "",
      harga: "",
      berat: "",
      id: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      id: 1 + Math.random(),
    });
  };

  addItem = (e) => {
    e.preventDefault();
    let newItems = [{ ...this.state }];
    if (newItems[0].nama !== "") {
      this.setState({
        items: [...this.state.items, newItems[0]],
        nama: "",
        harga: "",
        berat: "",
        id: "",
      });
    }
  };

  deleteItem = (index) => {
    const { items } = this.state;
    items.splice(index, 1);
    this.setState({ items });
  };

  render() {
    console.log(this.state.items);
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
              <th>Aksi</th>
            </tr>
            <ListTable data={this.state.items} deleteItem={this.deleteItem} />
          </table>
          <br />
          <form onSubmit={this.addItem}>
            <label>Nama</label> <br />
            <input
              type="text"
              onChange={this.handleInput}
              name="nama"
              value={this.state.nama}
            />
            <br />
            <label>Harga</label> <br />
            <input
              type="text"
              onChange={this.handleInput}
              name="harga"
              value={this.state.harga}
            />
            <br />
            <label>Berat</label> <br />
            <input
              type="text"
              onChange={this.handleInput}
              name="berat"
              value={this.state.berat}
            />
            <br /> <br />
            <button>Add Item</button>
          </form>
        </div>
      </>
    );
  }
}
