"use client" ;
import React, { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import fgioptions from "./fgioptions.json" ;
import { hsciifont_classnames } from "./hsciifonts";
interface foption { walue: string; label: string; }
interface fitem extends foption {}
interface fgroup extends foption { fitems: fitem[]; }

const fgidata: fgroup[] = fgioptions ;

const Fpicker2ts = () => {
  const [selected_fgroup, set_selected_fgroup] = useState<string>("");
  // const [selected_fitem, set_selected_fitem] = useState<string>("");
  const [curr_fitems, set_curr_fitems] = useState<fitem[]>([]);

  const handle_fitem_change = (curr_selected_fitem: string) => {
    if (curr_selected_fitem) {
      //set_selected_fitem(curr_selected_fitem);
      setBodyFont(curr_selected_fitem);
    }
  };  
  useEffect(() => {
    if (selected_fgroup) {
      setBodyFont(selected_fgroup);
      const fgroup_const = fgidata.find((s) => s.walue === selected_fgroup);
      set_curr_fitems(fgroup_const?.fitems || []);
    } else {
      set_curr_fitems([]);
    }
  }, [selected_fgroup]);

  // useEffect(() => {
  //   if (selected_fitem) { setBodyFont(selected_fitem); }
  // }, [selected_fitem]);

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
      <Select onValueChange={set_selected_fgroup}>
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
        <SelectTrigger className="w-[180px] mt-4"> <SelectValue placeholder="select hscii font" /> </SelectTrigger>
        <SelectContent>
          {curr_fitems.map((fontitem) => (
            <SelectItem key={fontitem.walue} value={fontitem.walue}>
              {fontitem.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="mt-4">selected fgroup: {selected_fgroup}</p>
    </div>
  );
};

export default Fpicker2ts;
