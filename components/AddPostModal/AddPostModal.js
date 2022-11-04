import React, { useState } from "react";
import { Button, Modal, Form, Stack, FormGroup, TextArea } from "@carbon/react";

export default function AddPostModal() {
  const [show, setShow] = useState(false);
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // const handleClick = () => {
  //   setShow(!show);
  // };

  const handleSubmit = () => {
    console.log("click submit");
  };

  const handleCancel = () => {
    console.log("click cancel");
  };

  return (
    <>
      <Button onClick={handleShow}>Add Post</Button>

      <Modal
        open={show}
        // modalHeading="Add Post"
        modalLabel="Share your thoughts here..."
        primaryButtonText="Add"
        secondaryButtonText="Cancel"
        onRequestSubmit={handleSubmit}
      >
        <Form>
          <Stack>
            <FormGroup>
              <TextArea
                resize={3}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></TextArea>
            </FormGroup>
          </Stack>
        </Form>
      </Modal>
    </>
  );
}
