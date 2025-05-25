import Top_Header from "./component/right_first_area/Top_Header";

export default function Home() {
  return (
    <div className="flex">
        <div className="w-[68px] h-[950px] flex justify-between flex-col items-center
        py-[12px] px-[11.94px] bg-[#EEF6EB]">
            <div className="cursor-pointer">
                <img src="https://i.ibb.co/Mx7rx9Kk/logo.png"
                 className="w-full" alt="img"></img>
            </div>
            <div className="flex flex-col gap-[24px]">
                <div className="p-[8px] transition-[10px] active bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/W4sfscvL/main-component.png" className="w-full object-cover"
                       alt=""/>
                </div>
                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/jk906rXc/category-2.png" className="w-full object-cover"
                       alt=""/>
                </div>

                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/DDv62trx/lamp-charge.png" className="w-full object-cover"
                       alt=""/>
                </div>


                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/tTJ9J7hX/archive-minus.png" className="w-full object-cover"
                       alt=""/>
                </div>
                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/XZh1tSbL/hospital.png" className="w-full object-cover"
                       alt=""/>
                </div>
                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/whNF64xL/book.png" className="w-full object-cover"
                       alt=""/>
                </div>
            </div>
            <div className="flex flex-col gap-[24px]">
                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/PvWYVX22/cup.png" className="w-full object-cover"
                       alt=""/>
                </div>

                <div className="p-[8px] transition-[10px] active hover:bg-[#D8E7D3] rounded-[10px]">
                      <img src="https://i.ibb.co/3yyXxNNB/menu.png" className="w-full object-cover"
                       alt=""/>
                </div>
            </div>
        </div>  
            <div className="w-full flex flex-col">
                <div className="w-full">
               <Top_Header></Top_Header>
                </div>

                <div className="w-full px-[24px] flex gap-[48px]">
                    <div className="w-[280px]"></div>
                    <div className=""></div>
                    <div className="w-[280px]"></div>
                 </div>
            </div>    
        
        
    </div>
  );
}
