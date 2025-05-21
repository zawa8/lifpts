//import Image from "next/image";
import { Hsciifontpicker } from "@/components/hsciifp/Hsciifontpicker";
import {MyClientComponent} from "libhsciifp/client";
export default function Home() {
  const iplaceholer = `A=x≠a (xpple=Apple) a=>car cAt=cxt rxt=rAt=mouse=cuva fast
H=v≠h  wveel=wHeel kvani=kHani=story 
======
4 finger 1 hxnd mxjhs : 4f1h_mxjhs :  
0123 4567 89LY VWPF
ten=L=8+2 yilewen=Y=8+3 twelw=V=8+4
W=dblu=8+4+1  P=purn=8+4+2
F=fiwn=8+4+2+1 = 10 - 1 = wnti - 1
4*4=10=wnti=8+8=F+1=L+6=9+7
======
w =>  fiwe (5)  znwri frwri nowember grow crow wn(1) liwe wiolet_color
x => xray xpple cxt rxt(mouse)   6 = six = siks
z => zug zune zuly  j(jhrow=Jrow)  
k => king/kueen kuick kuestion  q=> qhis(this) qhxt(thxt=thAt)
======
a->ram i->sijaram u->vnuman e->gnesh o->gowinq
======
  `;
  return (
    <div className="w-full">
      <main className="flex flex-col gap-[4px] row-start-2 items-center sm:items-start">
        <Hsciifontpicker/>
        <MyClientComponent/>
        <textarea id="ta1" rows={12} className="p-4 min-w-full sm:text-xl, md:text-2xl text-purple-700" placeholder={iplaceholer} />
        <a
            className="border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://github.com/zawa8/font"
            target="_blank"
            rel="noopener noreferrer"
          >
            try hscii font
          </a>
      </main>
    </div>
  );
}
