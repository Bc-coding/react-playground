import React, { Component } from "react";
import { uid, setCaretToEnd } from "../../utils/helper";
import styled from "styled-components";
import EditableBlock from "./editableBlock";
import EditorLayout from "../layout/editorLayout";

const Wrapper = styled.section`
  padding: 4em;
  padding-top: 6rem;
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  margin-bottom: 20px;
`;

const initialBlock = {
  id: uid(),
  html: "",
  tag: "p",
};

export default class editablePage extends Component {
  constructor(props) {
    super(props);
    this.updatePageHandler = this.updatePageHandler.bind(this);
    this.addBlockHandler = this.addBlockHandler.bind(this);
    this.deleteBlockHandler = this.deleteBlockHandler.bind(this);
    this.state = { blocks: [initialBlock] };
  }

  updatePageHandler(updatedBlock) {
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(updatedBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks[index] = {
      ...updatedBlocks[index],
      tag: updatedBlock.tag,
      html: updatedBlock.html,
    };
    this.setState({ blocks: updatedBlocks });
  }

  addBlockHandler(currentBlock) {
    const newBlock = { id: uid(), html: "", tag: "p" };
    const blocks = this.state.blocks;
    const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
    const updatedBlocks = [...blocks];
    updatedBlocks.splice(index + 1, 0, newBlock);
    this.setState({ blocks: updatedBlocks }, () => {
      currentBlock.ref.nextElementSibling.focus();
    });
  }

  deleteBlockHandler(currentBlock) {
    const previousBlock = currentBlock.ref.previousElementSibling;
    if (previousBlock) {
      const blocks = this.state.blocks;
      if (blocks.length > 1) {
        const index = blocks.map((b) => b.id).indexOf(currentBlock.id);
        const updatedBlocks = [...blocks];
        updatedBlocks.splice(index, 1);
        this.setState({ blocks: updatedBlocks }, () => {
          setCaretToEnd(previousBlock);
          previousBlock.focus();
        });
      }
    }
  }

  render() {
    return (
      <Wrapper>
        <EditorLayout>
          <Title>Click below to edit</Title>
          {this.state.blocks.map((block, key) => {
            return (
              <EditableBlock
                key={key}
                id={block.id}
                tag={block.tag}
                html={block.html}
                updatePage={this.updatePageHandler}
                addBlock={this.addBlockHandler}
                deleteBlock={this.deleteBlockHandler}
              />
            );
          })}
        </EditorLayout>
      </Wrapper>
    );
  }
}
