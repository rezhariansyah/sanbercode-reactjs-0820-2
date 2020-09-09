import React, { useState, useEffect } from "react";
import "./AxiosHooks.css";
import axios from "axios";

export default function AxiosHooks() {
  const [dataBuah, setDataBuah] = useState(null);
  const [input, setInput] = useState({
    name: "",
    weight: "",
    price: "",
    id: null,
  });

  useEffect(() => {
    if (dataBuah === null) {
      axios
        .get(`http://backendexample.sanbercloud.com/api/fruits`)
        .then((res) => {
          console.log(res.data);
          setDataBuah(res.data);
        });
    }
  }, [dataBuah]);

  const handleDelete = (id) => {
    axios
      .delete(`http://backendexample.sanbercloud.com/api/fruits/${id}`)
      .then((res) => {
        let newData = dataBuah.filter((x) => x.id !== id);
        setDataBuah(newData);
      });
  };

  const changeInputName = (event) => {
    let value = event.target.value;
    setInput({
      ...input,
      name: value,
    });
  };

  const changeInputWeight = (event) => {
    let value = event.target.value;
    setInput({
      ...input,
      weight: value,
    });
  };

  const changeInputPrice = (event) => {
    let value = event.target.value;
    setInput({
      ...input,
      price: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(input);
    if (input.id === null) {
      axios
        .post(`http://backendexample.sanbercloud.com/api/fruits`, input)
        .then((res) => {
          console.log(res.data);
          setDataBuah([...dataBuah, input]);
          setInput({
            name: "",
            weight: "",
            price: "",
            id: null,
          });
        });
    } else {
      axios
        .put(
          `http://backendexample.sanbercloud.com/api/fruits/${input.id}`,
          input
        )
        .then((res) => {
          var buahUpdate = dataBuah.map((x) => {
            if (x.id === input.id) {
              x.name = input.name;
              x.price = input.price;
              x.weight = input.weight;
            }
            console.log(x, "iniiiii")
            return x;
          });
          setDataBuah(buahUpdate);
          setInput({
            name: "",
            weight: "",
            price: "",
            id: null,
          });
        });
    }
  };

  const editForm = (idBuah) => {
    console.log(idBuah);
    // var idBuah = event.target.value;
    var buah = dataBuah.find((x) => x.id === idBuah);

    setInput({
      id: idBuah,
      name: buah.name,
      price: buah.price,
      weight: buah.weight,
    });
  };

  return (
    <>
      <h1>Daftar Harga Buah</h1>
      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {dataBuah !== null &&
            dataBuah.map((item, index) => {
              return (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.weight / 1000} kg</td>
                  <td>
                    <button value={index.id} onClick={() => editForm(item.id)}>
                      Edit
                    </button>
                    &nbsp;
                    <button onClick={() => handleDelete(item.id)} value={index}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
      {/* Form */}
      <h1>Form Daftar Harga Buah</h1>
      <div style={{ width: "30%", margin: "0 auto", display: "block" }}>
        <div>
          <form onSubmit={handleSubmit}>
            <label style={{ float: "left" }}>Nama:</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="name"
              value={input.name}
              onChange={changeInputName}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Harga:</label>
            <input
              style={{ float: "right" }}
              type="text"
              name="harga"
              value={input.price}
              onChange={changeInputPrice}
            />
            <br />
            <br />
            <label style={{ float: "left" }}>Berat (dalam gram):</label>
            <input
              style={{ float: "right" }}
              type="number"
              name="berat"
              value={input.weight}
              onChange={changeInputWeight}
            />
            <br />
            <br />
            <div style={{ width: "100%", paddingBottom: "20px" }}>
              <button style={{ float: "right" }}>submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
