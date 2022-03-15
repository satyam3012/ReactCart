import React from "react";

class AddItem extends React.Component {
  render() {
    return (
      <form className="row">
        <div className="mb-3 col-6">
          <label htmlFor="inputName" className="form-label">
            Email address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 col-6">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input type="number" className="form-control" id="price" />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;
