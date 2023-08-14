import React from "react";
import { Button } from "../../components/Button";
import { Form } from "../../components/Form";
import { Header } from "../../components/Header";
import { SideMenu } from "../../components/SideMenu";
import { ArchiveTick1 } from "../../icons/ArchiveTick1";
import { Bezier } from "../../icons/Bezier";
import { Key } from "../../icons/Key";
import { More1 } from "../../icons/More1";
import { Share } from "../../icons/Share";
import "./style.css";

export const GadgetDesigner = () => {
  return (
    <div className="gadget-designer">
      <div className="div-2">
        <div className="overlap">
          <Button className="button-instance" leadingIcon={false} text="Publish" trailIcon={false} type="primary" />
          <Button
            className="design-component-instance-node"
            leadingIcon={false}
            text="Save"
            trailIcon={false}
            type="primary"
          />
          <div className="text-wrapper-5">Template name</div>
          <More1 className="more" />
          <img
            className="line"
            alt="Line"
            src="https://generation-sessions.s3.amazonaws.com/5a410e543c9ecc0a9d8ea0d3b44ac891/img/line-35.svg"
          />
        </div>
        <Form
          active={false}
          className="form-instance"
          icon={false}
          input
          style="input"
          supportingMessage
          text="Lorem ipsum dolor sit amet..."
          text1="Let people know what is the usefulness of your gadget."
          text2="Description"
        />
        <div className="overlap-group">
          <div className="overlap-2">
            <div className="text-wrapper-6">Creativity level</div>
            <div className="iconamoon-number">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-7">1</div>
                </div>
              </div>
            </div>
          </div>
          <div className="overlap-3">
            <img
              className="img"
              alt="Line"
              src="https://generation-sessions.s3.amazonaws.com/5a410e543c9ecc0a9d8ea0d3b44ac891/img/line-18.svg"
            />
            <div className="ellipse" />
          </div>
        </div>
        <Form
          active={false}
          className="form-2"
          icon
          input
          style="dropdown"
          supportingMessage={false}
          text2="GPT model"
          text3="GPT-3.5-turbo"
        />
        <Form
          active={false}
          className="form-3"
          icon
          input={false}
          style="dropdown"
          supportingMessage={false}
          text2="Category"
        />
        <SideMenu
          className="side-menu-instance"
          menuOptionIcon={<Bezier className="bezier-instance" />}
          menuOptionIcon1={<Key className="icon-instance-node-2" color="white" />}
          menuOptionIcon2={<Share className="icon-instance-node-2" color="white" />}
          override={<ArchiveTick1 className="icon-instance-node-2" color="white" />}
          state="gadget-designer"
        />
        <Header className="header-instance" loggedIn logo />
      </div>
    </div>
  );
};
