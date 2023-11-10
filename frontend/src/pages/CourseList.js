import '../App.css'; 
import React, { Component } from "react";
import axios from "axios";
import Modal from "../components/Modal";
import ModalDel from  "../components/ModalDel";
import { Table } from "reactstrap";


class CourseList extends Component {

  state = {
      activeItem: {
        cid: "",
        ccode: "",
        cname: "",
        cdesc: "",
      },
      courseList: []
    };

    componentDidMount() {
      this.refreshList();
    }

    refreshList = () => {
      axios
        .get("/api/courses/")
        .then((res) => this.setState({ courseList: res.data }))
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
      if (item.cid) {
        axios
          .put(`/api/courses/${item.cid}/`, item)
          .then((res) => this.refreshList());
        return;
      }
      axios
        .post("/api/courses/", item)
        .then((res) => this.refreshList());
    };
    handleDelete = (item) => {
      //toggle the delete window closed
      this.toggledel();
      axios
        .delete(`/api/courses/${item.cid}/`)
        .then((res) => this.refreshList());
    };

    createItem = () => {
      const item = {cid: "", ccode: "", cname: "", cdesc: "" };
      this.setState({ activeItem: item, modal: !this.state.modal });
    };

    editItem = (item) => {
      this.setState({ activeItem: item, modal: !this.state.modal });
    };

    deleteItem = () => {
      const item = {cid: "", ccode: "", cname: "", cdesc: "" };
      this.setState({ activeItem: item, modaldel: !this.state.modaldel });
    };

    renderItems = () => {
      const newItems = this.state.courseList;
      return ( (
        <Table>

          {newItems.map((item) => {
              return(
                <tr>
                  <td>{item.cid}</td>
                  <td>{item.ccode}</td>
                  <td>{item.cname}</td>
                  <td>{item.cdesc}</td>
                  <td><button 
                      className="btn btn-secondary mr-2"
                      onClick={() => this.editItem(item)}>Edit
                    </button>
                </td>
                </tr>
              );
            })}
        </Table>
      ));
    };

    render() {
      return (
      <main className="content">
      <h1 className="text-black text-uppercase text-left my-4">Course Information</h1>
          {this.renderItems()}
          <button onClick={this.refreshList} className="btn btn-primary mr-2">Refresh List</button>
              <button onClick={this.createItem} className="btn btn-success mr-2">Add Course</button>
              <button onClick={this.deleteItem} className="btn btn-danger mr-2">Delete Course</button>
          {this.state.modal ? (
        <Modal
          activeItem={this.state.activeItem}
          toggle={this.toggle}
          onSave={this.handleSubmit}
        />
      ): null}
      {this.state.modaldel ? (
        <ModalDel
          activeItem={this.state.activeItem}
          toggle={this.toggledel} 
          onSave={this.handleDelete}
        />
      ): null}

      </main>
      )
    }
  }

export default CourseList;