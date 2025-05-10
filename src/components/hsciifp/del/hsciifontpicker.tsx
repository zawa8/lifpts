"use client";
import React, { SetStateAction, useState } from 'react';
// import Select from 'react-select';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// import options from './options.json';
import first_select_groups from './groups.json';
import secondSelectOptionsData from './goptions.json';
// import { hsciifont_classnames } from './hsciifont_classnames.js';
import { hsciifont_classnames } from './hsciifonts.js';

export const Hsciifontpicker= () => {
  const [first_selected_group, setfirst_selected_group] = useState("");
  const [secondSelectOptions, setSecondSelectOptions] = useState([]);

  // Update options when the first select changes
  const handleFirstSelectChange = (value: string) => {
    setfirst_selected_group(value);
    if (secondSelectOptionsData[value]) {
      setSecondSelectOptions(secondSelectOptionsData[value]);
    } else {
      setSecondSelectOptions([]); // Clear options if no matching group
    }
  };




//  let currfontcn = "";

  // const handleCategoryChange = (selectedOption: React.SetStateAction<null>) => {
  //   setFirstSelectValue(selectedOption);
  //   setSecondSelectValue(null); // Reset the second select
  //   if (selectedOption) { setBodyFont(selectedOption.value); }
  // };

  // const handleItemChange = (selectedOption) => {
  //   setSecondSelectValue(selectedOption);
  //   if (selectedOption) { setBodyFont(selectedOption.value); }
  // };

  const setBodyFont = (selected_hsciifont_name:string) => {
	// alert(`currfontcn is ${currfontcn}. document.body.classList is ${document.body.classList}`);
	document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g,"");
	document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g,"");
	currfontcn = hsciifont_classnames[selected_hsciifont_name];
	document.body.classList.add(currfontcn);
	document.body.classList.add("antialiased");
  };
  //const itemOptions = firstSelectValue ? options[firstSelectValue].nextOptions : [];

  return (
    <>
      {/* First Select */}
      <Select onValueChange={handleFirstSelectChange}>
        <SelectTrigger>
          <SelectValue placeholder="Select a group" />
        </SelectTrigger>
        <SelectContent>
          {first_select_groups.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Second Select */}
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select an item" />
        </SelectTrigger>
        <SelectContent>
          {secondSelectOptions.map((option) => (
            <SelectItem key={option.value} value={option.value}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  );


};
/*
      <Select
        options={options}
        onChange={handleCategoryChange}
        value={firstSelectValue}
        placeholder="8aiueohcg lxnguAge(bhαsα).select"
      />
      <Select
        options={itemOptions}
        onChange={handleItemChange}
        value={secondSelectValue}
        placeholder="8aiueohcg font.select"
        isDisabled={!firstSelectValue}
      />
      */