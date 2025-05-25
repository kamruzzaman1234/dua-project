const Top_Header = ()=>{
    return(
        <div className="flex justify-between items-center
         h-[64px] px-[24px] py-[13px] border-b-2 border-[#E1EBE1]">
            <div className="w-[305px] h-[44px] cursor-pointer">
                <img src="https://i.ibb.co/hJjJwDD7/Frame-66.png"
                className="w-full h-full" alt="Images"/>
            </div>
            <div className="flex items-center  gap-[16px]">
                <div className="p-[10px] bg-[#E1EBE199] rounded-[30px]">
                    <div className="w-[18px] h-[18px]">
                        <img src="https://i.ibb.co/LwQ2ckc/search-normal.png"
                        className="w-full h-full object-cover" alt="" />
                    </div>
                </div>

                <div className="p-[10px] bg-[#E1EBE199] rounded-[30px]">
                    <div className="w-[18px] h-[18px]">
                        <img src="https://i.ibb.co/jvd9ZB0q/color-swatch.png"
                        className="w-full h-full object-cover" alt="" />
                    </div>
                </div>

                 <div className="p-[10px] bg-[rgba(225,235,225,0.6)] flex gap-[] rounded-[30px]">
                    <div className="w-[92px] flex items-center gap-[10px]">
                        <div className="w-[24.55px] h-[18px]">
                            <img src="https://i.ibb.co/W4mNfZL0/flag.png"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                        <div>
                            <select>
                                <option value="EN" className="text-[14px] leading-[100%]">En</option>
                                <option value="BN">BN</option>
                            </select>
                        </div>
                    </div>
                 </div>

                 <div className="w-[133px]  flex gap-[8px] items-center
                    bg-[#417360] py-[12px] rounded-[30px] px-[14px] ">
                        <div>
                            <h3 className="text-white mb-0 text-[16px]
                         font-[500px]">Support Us</h3>
                        </div>
                        <div className="w-[18px] h-[18px]">
                            <img src="https://i.ibb.co/mC8vWqn5/direct-right.png"
                            className="w-full h-full object-cover" alt="" />
                        </div>
                    </div>
               
            </div>
        </div>
    )
}
export default Top_Header;