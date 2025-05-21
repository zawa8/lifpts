"use client" ;
import React from "react";
import fgioptions from "./fgioptions_sel1g2.json" ;
import { hsciifont_classnames } from "./hsciifontsg4";

export const Hsciifontpicker = () => {
  const handle_fitem_change = (curr_selected_fitem: string) => { if (curr_selected_fitem) { setBodyFont(curr_selected_fitem); } }; 
  const handle_fitem_change2 = (event: React.ChangeEvent<HTMLSelectElement>) => { if (event.target.value) { setBodyFont(event.target.value); } }; 
  const setBodyFont = (selected_hsciifont_name:string) => {
    document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g,"");
    document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g,"");
    document.body.classList.add(hsciifont_classnames[selected_hsciifont_name]);
    document.body.classList.add("antialiased");
  };
  return (
    <div>
      <select  onChange={handle_fitem_change2} defaultValue={''} >
      <option value="" disabled>hscii_font select please</option>
      {fgioptions.map((option) => (
        <option key={option.walue} value={option.walue}>
          {option.label}
        </option>
      ))}
    </select>
    </div>
  );
};

// export default Hsciifontpicker;
