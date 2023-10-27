import '../App.css'; 
import React, { Component } from "react";
import axios from "axios";
import Modal from "../components/Modal_reviews";
import ModalDel from  "../components/ModalDel_reviews";
import { Table } from "reactstrap";

class Reviews extends Component{
    state = {
        activeItem: {
            rid: "",
            course_id: "",
            term: "",
            year: "",
            grade: "",
            comment: "",
        },
        reviewList: []
    };

    componentDidMount() {
        this.refreshList();
    }

    refreshList = () => {
        axios
            .get("/api/reviews/")
            .then((res) => this.setState({reviewList: res.data}))
            .catch((err) => console.log(err));
    };

    toggle = () => {
        this.setState({ modal: !this.state.modal})
    };

    toggledel = () => {
        this.setState({ modaldel: !this.state.modaldel });
    };

    handleSubmit = (item) => {
        this.toggle();
        if (item.rid) {
            axios
                .put(`/api/reviews/${item.rid}/`, item)
                // .put('/api/reviews/${item.rid}/', item)
                .then((res) => this.refreshList());
            return;
        }
        axios
            .post("/api/reviews/", item)
            .then((res) => this.refreshList());
    };
    handleDelete = (item) => {
        this.toggledel();
        axios
            .delete(`/api/reviews/${item.rid}/`)
            .then((res) => this.refreshList());
    };
    createItem = () => {
        const item = {rid:"", course_id:"", term:"", year:"", grade:"", comment:""};
        this.setState({activeItem:item, modal: !this.state.modal });
    };
    editItem = (item) => {
        this.setState({activeItem: item, modal: !this.state.modal});
    };
    deleteItem = () => {
        const item = {rid:"", course_id:"", term:"", year:"", grade:"", comment:""};
        this.setState({ activeItem: item, modaldel: !this.state.modaldel });
    }
    renderItems = () => {
        const newItems = this.state.reviewList;
        return((
            <Table>
                {newItems.map((item) => {
                    return(
                        <tr>
                            <td>{item.rid}</td>
                            <td>{item.course_id.ccode}</td>
                            <td>{item.course_id.cname}</td>
                            <td>{item.term}</td>
                            <td>{item.year}</td>
                            <td>{item.grade}</td>
                            <td>{item.comment}</td>
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
        <h1 className="text-black text-uppercase text-left my-4">Reviews</h1>
            {this.renderItems()}
            <button onClick={this.refreshList} className="btn btn-primary mr-2">Refresh List</button>
                <button onClick={this.createItem} className="btn btn-success mr-2">Add review</button>
                <button onClick={this.deleteItem} className="btn btn-danger mr-2">Delete review</button>
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
  
  export default Reviews;


