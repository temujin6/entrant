import * as React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Button from "@/components/Button";

interface IProps {
  children: any;
}

const DefaultLayout = (props: IProps) => {
  return (
    <main className="">
      <Header />
      {props.children}
      <Footer />
      <Button />
    </main>
  );
};

export default DefaultLayout;
