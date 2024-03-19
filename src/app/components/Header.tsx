import Image from "next/image";
import header from "@/app/assets/images/header.png";
const Header = () => {
  return (
    <div className="relative">
        <div className="absolute flex flex-col px-[190px] py-[100px]">
            <p className="text-[57px] font-extrabold text-[#1D3461]">Amaia Scapes Laguna</p>
            <p className="text-[39px] font-extrabold text-[#007366]" style={{ letterSpacing: '10px' }}>PROPERTY LIST</p>
        </div>
        <div className="">
        <Image src={header} alt="Header Image" />
        </div>
      
    </div>
  );
};

export default Header;
