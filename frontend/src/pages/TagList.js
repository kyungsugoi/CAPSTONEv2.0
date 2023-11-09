import React, { Component } from "react";
import axios from "axios";
import Modal from "../components/TagModal";
import ModalDel from "../components/ModalDel_Tag";
import { Table } from "reactstrap";
import CustomSelect from './CustomSelect';

class TagList extends Component {
  state = {
    activeItem: {
      tagid: "",
      tagname: "",
      value: "",
    },
    tagList: [],
	tagNames: [],	// to send to custom Select
  };

  componentDidMount() {
    this.refreshList();
  }

  refreshList = () => {
    axios
      .get("/api/tags/") // Update the API endpoint to match your dataset
      .then((res) => {
	  	this.setState({ 
			tagList: res.data,
			tagNames: res.data.map((item) => ({
			label: item.tagname,
			})),
		});		
	})
      .catch((err) => console.log(err));
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  toggledel = () => {
    this.setState({ modaldel: !this.state.modaldel });
  };

  handleSubmit = (item) => {
    this.toggle();
    if (item.tagid) {
      axios
        .put(`/api/tags/${item.tagid}/`, item) // Update the API endpoint to match your dataset
        .then((res) => this.refreshList());
      return;
    }
    axios
      .post("/api/tags/", item) // Update the API endpoint to match your dataset
      .then((res) => this.refreshList());
  };

  handleDelete = (item) => {
    // Toggle the delete window closed
    this.toggledel();
    axios
      .delete(`/api/tags/${item.tagid}/`) // Update the API endpoint to match your dataset
      .then((res) => this.refreshList());
  };

  handleSelectChange = (selectedOption) => {
    this.setState({
      selectedOption, // Assuming you have a 'selectedOption' state in your component
    });
  };

  createItem = () => {
    const item = { tagid: "", tagname: "", value: "" };
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  editItem = (item) => {
    this.setState({ activeItem: item, modal: !this.state.modal });
  };

  deleteItem = () => {
    const item = { tagid: "", tagname: "", value: "" };
    this.setState({ activeItem: item, modaldel: !this.state.modaldel });
  };

  renderItems = () => {
    const newItems = this.state.tagList;
    return (
      <Table>
        {newItems.map((item) => {
          return (
            <tr key={item.tagid}>
              <td>{item.tagid}</td>
              <td>{item.tagname}</td>
              <td>{item.value}</td>
              <td>
                <button
                  className="btn btn-secondary mr-2"
                  onClick={() => this.editItem(item)}
                >
                  Edit
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
    );
  };

  render() {
    return (
      <main className="content">
        <h1 className="text-black text-uppercase text-left my-4">Tag Information</h1>
        {this.renderItems()}
        <button onClick={this.refreshList} className="btn btn-primary mr-2">
          Refresh List
        </button>
        <button onClick={this.createItem} className="btn btn-success mr-2">
          Add Tag
        </button>
        <button onClick={this.deleteItem} className="btn btn-danger mr-2">
          Delete Tag
        </button>
		<CustomSelect
          isMulti={true}
          onChange={this.handleSelectChange}
          tagNames={this.state.tagNames} // Pass tagNames as a prop
        />
        {this.state.modal ? (
          <Modal
            activeItem={this.state.activeItem}
            toggle={this.toggle}
            onSave={this.handleSubmit}
          />
        ) : null}
        {this.state.modaldel ? (
          <ModalDel
            activeItem={this.state.activeItem}
            toggle={this.toggledel}
            onSave={this.handleDelete}
          />
        ) : null}
      </main>
    );
  }
}

export default TagList;