import React from "react";
import { Outlet } from "react-router";
import Header from "../Components/Header";
import LetestsNews from "../Components/LetestsNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RigthAside from "../Components/HomeLayout/RigthAside";

const HomeLayouts = () => {
  return (
    <div>
      <header>
        <Header></Header>

        <section className="max-w-11/12 mx-auto my-7">
          <LetestsNews></LetestsNews>
        </section>
        <nav className="max-w-11/12 mx-auto my-7">
          <Navbar></Navbar>
        </nav>
      </header>

      <main className="max-w-11/12 mx-auto my-7 grid grid-cols-12 gap-5">
        <aside className="col-span-3 sticky top-5 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3 sticky top-5 h-fit">
          <RigthAside></RigthAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayouts;
