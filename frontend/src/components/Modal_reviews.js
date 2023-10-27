import React, { Component } from "react";
//import the components that we will need for the page
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Form,
    FormGroup,
    Input,
    Label

} from "reactstrap";

export default class CustomModal extends Component {
    //setup that we started back in App.js. allows the page to render correctly
    constructor(props) {
        super(props);
        this.state = {
            activeItem: this.props.activeItem
        };
    }
    //handles any changes to the values that could occur
    handleChange = e => {
        let { name, value } = e.target;
        const activeItem = { ...this.state.activeItem, [name]: value };
        this.setState({ activeItem });
    };
    //renders the visuals of the popup box.
    render() {
        //pass in the toggle and onSave values from App.js
        const { toggle, onSave } = this.props;
        return (
            //opens the window and sets the appropriate toggle
            //then the Title is added in
            //Next the Form Group creates the headers, input fields, and background text for name and email.
            //at the bottom the Save button is rendered inside of the footer
            <Modal isOpen={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>Add New Review</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="course_id">Code</Label>
                            <Input 
                              type="text"
                              name="course_id"
                              value={this.state.activeItem.name}
                              onChange={this.handleChange}
                              placeholder="Enter Course Code"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="term">Term</Label>
                            <Input
                            type="text"
                            name="term"
                            value={this.state.activeItem.email}
                            onChange={this.handleChange}
                            placeholder="Enter Term"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="year">Year</Label>
                            <Input 
                              type="text"
                              name="year"
                              value={this.state.activeItem.name}
                              onChange={this.handleChange}
                              placeholder="Enter Year"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="grade">Grade</Label>
                            <Input 
                              type="text"
                              name="grade"
                              value={this.state.activeItem.name}
                              onChange={this.handleChange}
                              placeholder="Enter Grade Recieved"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="comment">Comment</Label>
                            <Input 
                              type="text"
                              name="comment"
                              value={this.state.activeItem.name}
                              onChange={this.handleChange}
                              placeholder="Enter Comment"
                            />
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="success" onClick={() => onSave(this.state.activeItem)}>
                        Save
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}