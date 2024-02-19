import React, { useState } from "react";
import "./home.css";

const Form = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [image, setImage] = useState("");
  const [detailsArray, setdetailsArray] = useState([]);
  const [uniqueValue, setUniqueValue] = useState(false);
  const clearForm = () => {
    setId("");
    setName("");
    setDescription("");
    setPrice("");
    setQuantity("");
    setCategory("");
    setManufacturer("");
    setWeight("");
    setDimensions("");
    setImage("");
  };

  const handleSubmit = () => {
    if (!id || !name || !description || !price || !quantity || !category || !manufacturer || !weight || !dimensions || !image) {
      alert('Please fill in all fields')
      return;
    }

    let detail = {
      id: id,
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      category: category,
      manufacturer: manufacturer,
      weight: weight,
      dimensions: dimensions,
      image: image,
    };
    setdetailsArray([...detailsArray, detail]);
    clearForm();
    alert('Successfully created')
  };

  const deleteTableData = (id) => {
    const deleteText = detailsArray.filter((e) => e.id !== id);
    setdetailsArray(deleteText);
    alert('Successfully deleted')

  };

  const getEditObj = (editObj) => {
    console.log(editObj, "editttt");
    setUniqueValue(true)
    setId(editObj.id);
    setName(editObj.name);
    setDescription(editObj.description);
    setPrice(editObj.price);
    setQuantity(editObj.quantity);
    setCategory(editObj.category);
    setManufacturer(editObj.manufacturer);
    setWeight(editObj.weight);
    setDimensions(editObj.dimensions);
    setImage(editObj.image);
  };

  const updateData = () => {
    const updatedArray = detailsArray.map((item) =>
      item.id == id
        ? {
            ...item,
            id: id,
            name: name,
            description: description,
            price: price,
            quantity: quantity,
            category: category,
            manufacturer: manufacturer,
            weight: weight,
            dimensions: dimensions,
            image: image,
          }
        : item
    );

    setdetailsArray(updatedArray);
    setUniqueValue("");
    clearForm();
    alert('Successfully updated')

  };

  return (
    <div className="form">
      <div className="nav-bar">
        CRUD Operations
      </div>
      <div className="form-sec">
      <div>
        <h1>Form</h1>
      </div>
      <div className="form-title">
        <div className="form-title-sec-1">
          <div>
            <label>ID</label>
            <input
              class="form-control "
              type="text"
              placeholder="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              disabled={uniqueValue}
            />
          </div>
          <div>
            <label>Name</label>
            <input
              class="form-control"
              type="text"
              placeholder="Enter your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Description</label>
            <textarea
              class="form-control"
              type="text"
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              class="form-control"
              type="number"
              placeholder="Enter your Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div>
            <label>Quantity</label>
            <select
              class="form-select"
              aria-label="Default select example"
              style={{ width: "200px" }}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            >
              <option selected>select</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="form-title-sec-2">
          <div>
            <label>Category</label>
            <input
              class="form-control"
              type="text"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div>
            <label>Manufacturer</label>
            <input
              class="form-control"
              type="text"
              placeholder="Manufacturer"
              value={manufacturer}
              onChange={(e) => setManufacturer(e.target.value)}
            />
          </div>
          <div>
            <label>Weight</label>
            <input
              class="form-control"
              type="text"
              placeholder="Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Dimensions</label>
            <input
              class="form-control"
              type="text"
              placeholder="Dimensions"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
            />
          </div>
          <div>
            <label>Img URL</label>
            <input
              class="form-control"
              type="url"
              placeholder="Enter URL"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="form-title-sec-3">
        <button type="submit" onClick={uniqueValue ? updateData : handleSubmit} 
          style={{ backgroundColor: uniqueValue ? "blue" : "red" }}
          >
          {" "}
          {uniqueValue ? "Update" : "Create"}{" "}
        </button>
      </div>
      </div>

      <table class="table table-striped-columns">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Category</th>
            <th>Manufacturer</th>
            <th>Weight</th>
            <th>Dimensions</th>
            <th>Iage Url</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {detailsArray.map((e) => {
            return (
              <tr>
                <td>{e.id}</td>
                <td>{e.name}</td>
                <td>{e.description}</td>
                <td>{e.price}</td>
                <td>{e.quantity}</td>
                <td>{e.category}</td>
                <td>{e.manufacturer}</td>
                <td>{e.weight}</td>
                <td>{e.dimensions}</td>
                <td>{e.image}</td>
                <td>
                  <span>
                  <button className="btn btn-primary" onClick={() => getEditObj(e)}>
                    Edit
                  </button>
                  <button className="btn btn-danger" onClick={() => deleteTableData(e.id)}
                  style={{marginLeft:'5px'}}>
                    Delete
                  </button>
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Form;
