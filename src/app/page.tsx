import Image from "next/image";
import Header from "./components/Header";
import PropertyList from "./components/PropertyList";
export default function Home() {
  return (
    <div className="">
        <Header/>
        <PropertyList/>
    </div>
  );
}
