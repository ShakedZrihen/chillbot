import React from "react";
import clsx from "clsx";
import "./style.scss";

// props: title: string, resources: list[string], allowBlank: boolean, select: (id) => void

const ResourcePicker = (props) => {
  const { title, resources, allowBlank } = props;

  const handleChange = (event, newSelected) => {
    console.log("select:", newSelected);
    props.setValue(newSelected);
  };

  return (
    <div className="flexCol">
      <label className="textboxLabel">{title}</label>
      <div className="resourceContainer">
        {resources.map((resource, i) => (
          <img
            key={i}
            src={resource}
            className={clsx("resource", {
              selected: resource == props.value,
            })}
            onClick={(event) => handleChange(event, resource)}
          />
        ))}
      </div>
    </div>
  );
};

export default ResourcePicker;
