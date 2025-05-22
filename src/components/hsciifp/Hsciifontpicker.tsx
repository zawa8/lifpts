"use client" ;
// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import fgioptions from "./fgioptionsg4.json" ;
import { hsciifont_classnames } from "./hsciifontsg4";
interface foption { walue: string; label: string; }
interface fitem extends foption {}
interface fgroup extends foption { fitems: fitem[]; }

const fgidata: fgroup[] = fgioptions ;

const Hsciifontpicker = () => {
  const [curr_fitems, set_curr_fitems] = useState<fitem[]>([]);
  const handle_fgroup_change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let curr_selected_fgroup:string = event.target.value ;
    if (curr_selected_fgroup) {
      setBodyFont(curr_selected_fgroup);
      const fgroup_const = fgidata.find((s) => s.walue === curr_selected_fgroup);
      set_curr_fitems(fgroup_const?.fitems || []);
    } else {
      set_curr_fitems([]);
    }
  };
  const handle_fitem_change = (event: React.ChangeEvent<HTMLSelectElement>) => {
    if (event.target.value) { setBodyFont(event.target.value); }
  }; 
  let currfontcn  ;
  const setBodyFont = (selected_hsciifont_name:string) => {
	document.body.classList.value = document.body.classList.value.replaceAll(/__className_\w+\s+antialiased/g,"");
	document.body.classList.value = document.body.classList.value.replaceAll(/antialiased\s+__className_\w+/g,"");
	currfontcn = hsciifont_classnames[selected_hsciifont_name];
	document.body.classList.add(currfontcn);
	document.body.classList.add("antialiased");
  };
  return (
    <div>
      <select onChange={handle_fgroup_change}>
      <option value="" disabled>hscii_font group select please</option>
          {fgidata.map((fgigrup) => (
            <option key={fgigrup.walue} value={fgigrup.walue}>
              {fgigrup.label}
            </option>
          ))}
      </select>

      <select onChange={handle_fitem_change} defaultValue={''}>
      <option value="" disabled>hscii_font select please</option>
          {curr_fitems?.map((fontitem) => (
            <option key={fontitem.walue} value={fontitem.walue}> {fontitem.label} </option>
          ))}
      </select>
    </div>
  );
};

export default Hsciifontpicker;
