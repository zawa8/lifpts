"use client" ;
// import React, { useState, useEffect } from "react";
import React, { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import fgioptions from "./fgioptionsg9.json" ;
import { hsciifont_classnames } from "./hsciifontsg9";
interface foption { walue: string; label: string; }
interface fitem extends foption {}
interface fgroup extends foption { fitems: fitem[]; }

const fgidata: fgroup[] = fgioptions ;

const Fpicker2ts = () => {
  const [curr_fitems, set_curr_fitems] = useState<fitem[]>([]);
  const handle_fgroup_change = (curr_selected_fgroup: string) => {
    if (curr_selected_fgroup) {
      setBodyFont(curr_selected_fgroup);
      const fgroup_const = fgidata.find((s) => s.walue === curr_selected_fgroup);
      set_curr_fitems(fgroup_const?.fitems || []);
    } else {
      set_curr_fitems([]);
    }
  };
  const handle_fitem_change = (curr_selected_fitem: string) => {
    if (curr_selected_fitem) { setBodyFont(curr_selected_fitem); }
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
      <Select onValueChange={handle_fgroup_change}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="select font grup" />
        </SelectTrigger>
        <SelectContent>
          {fgidata.map((fgigrup) => (
            <SelectItem key={fgigrup.walue} value={fgigrup.walue}>
              {fgigrup.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select onValueChange={handle_fitem_change}>
        <SelectTrigger className="w-[180px] mt-4"> <SelectValue placeholder="hscii_font=>select"/> </SelectTrigger>
        <SelectContent>
          {curr_fitems?.map((fontitem) => (
            <SelectItem key={fontitem.walue} value={fontitem.walue}>
              {fontitem.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default Fpicker2ts;
