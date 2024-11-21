import React from "react";
import DefaultLayout from "@/layout";
import Section1 from "@/components/Index/Section1";
import Section2 from "@/components/Index/Section2";
import Section3 from "@/components/Index/Section3";
import Section4 from "@/components/Index/Section4";
import Section5 from "@/components/Index/Section5";
import Section6 from "@/components/Index/Section6";
import Section7 from "@/components/Index/Section7";
import Button from "@/components/Button";

const IndexPage: React.FC = () => {
  return (
    <DefaultLayout>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
    </DefaultLayout>
  );
};

export default IndexPage;
