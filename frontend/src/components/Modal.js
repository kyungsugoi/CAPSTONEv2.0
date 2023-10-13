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
                <ModalHeader toggle={toggle}>Add New Course</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="ccode">Code</Label>
                            <Input 
                              type="text"
                              name="ccode"
                              value={this.state.activeItem.name}
                              onChange={this.handleChange}
                              placeholder="Enter Course Code"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cname">Name</Label>
                            <Input
                            type="text"
                            name="cname"
                            value={this.state.activeItem.email}
                            onChange={this.handleChange}
                            placeholder="Enter Course Name"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="cname">Description</Label>
                            <Input 
                              type="text"
                              name="cdesc"
                              value={this.state.activeItem.name}
                              onChange={this.handleChange}
                              placeholder="Enter Course Description"
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