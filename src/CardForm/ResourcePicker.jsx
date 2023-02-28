import React, { useState } from "react";
import Chip from "@material-ui/core/Chip";
import clsx from "clsx";
import "./style.scss";

// props: title: string, resources: list[string], allowBlank: boolean, select: (id) => void

const ResourcePicker = (props) => {
  const { title, resources, allowBlank } = props;
  const [selectedCatagory, setSelectedCatagory] = useState(0);
  const [filteredGifs, setFilteredGifs] = useState(resources.get(props.catagories[0]))
  const handleChange = (event, newSelected) => {
    props.setValue(newSelected);
  };
  
  const selectCatagory = (selectedChip) => {
    setSelectedCatagory(selectedChip);
    setFilteredGifs(resources.get(props.catagories[selectedChip]))
  }

  const catagories = props.catagories.map((catagory, i) => (
    <Chip className={clsx('chip', {chipSelected: i === selectedCatagory})} key={catagory} label={catagory} onClick={() => selectCatagory(i)}/>
  ));

  return (
    <div className="flexCol">
      <label className="textboxLabel">{title} {catagories} </label>
      <div className="resourceContainer">
        {filteredGifs.map((resource, i) => (
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
