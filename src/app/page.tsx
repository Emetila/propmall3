"use client";

import Image from "next/image";
import { Signin } from "./pages/Signin/page";
import { HomePage } from "./pages/home/page";

const Home: React.FC = () =>{
  return (
    <div>
      <main>
        <HomePage />
        {/* <Signin /> */}
      </main>
    </div>
  );
}

export default Home