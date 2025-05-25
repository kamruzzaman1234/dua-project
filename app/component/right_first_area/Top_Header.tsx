const Top_Header = ()=>{
    return(
        <div className="flex justify-between items-center
         h-[64px] px-[24px] py-[13px] border-2 border-amber-50">
            <div className="w-[305px] h-[44px] cursor-pointer">
                <img src="https://i.ibb.co/hJjJwDD7/Frame-66.png"
                className="w-full h-full" alt="Images"/>
            </div>
            <div className="flex gap-[16px]">
                <div className="p-[10px] bg-[#E1EBE199] rounded-[30px]">
                    <div className="w-[18px] h-[18px]">
                        <img src="https://i.ibb.co/LwQ2ckc/search-normal.png"
                        className="w-full h-full" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Top_Header;