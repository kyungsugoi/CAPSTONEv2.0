import React, { Component } from "react";
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

export default class CustomTagModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeItem: this.props.activeItem
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    const activeItem = { ...this.state.activeItem, [name]: value };
    this.setState({ activeItem });
  }

  render() {
    const { toggle, onSave, title } = this.props;

    return (
      <Modal isOpen={true} toggle={toggle}>
        <ModalHeader toggle={toggle}>{title}</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="tagname">Name</Label>
              <Input
                type="text"
                name="tagname"
                value={this.state.activeItem.tagname}
                onChange={this.handleChange}
                placeholder={title === "Edit Tag" ? "Enter Tag Name" : "Enter Tag Value"}
              />
            </FormGroup>
            <FormGroup>
              <Label for="value">Value</Label>
              <Input
                type="text"
                name="value"
                value={this.state.activeItem.value}
                onChange={this.handleChange}
                placeholder={title === "Edit Tag" ? "Enter Tag Value" : "Enter Tag Value"}
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