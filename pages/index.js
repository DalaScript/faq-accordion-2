import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import AccordionItem from "@/components/AccordionItem";
import { useState } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {

  const [open, setOpen] = useState(false);

  const toggle = (index) => {
    if(open === index) {
      return setOpen(null);
    }

    setOpen(index);
  }

  const accordionData = [
    {
      title: "This is demo title 1",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at volutpat augue. Nunc tempor, mauris eget faucibus porttitor, risus nisi ultricies diam, vel tempor sapien dui ac erat. Integer in molestie nisl. Curabitur vitae orci dolor. Quisque nisi nisi, condimentum eget odio quis, auctor gravida neque. Nam non est posuere, dignissim lectus vel, aliquet sem. Donec cursus elementum lorem ac rhoncus. Maecenas interdum semper vestibulum. Nulla accumsan augue in neque hendrerit laoreet."
    },
    {
      title: "This is demo title 2",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at volutpat augue. Nunc tempor, mauris eget faucibus porttitor, risus nisi ultricies diam, vel tempor sapien dui ac erat. Integer in molestie nisl. Curabitur vitae orci dolor. Quisque nisi nisi, condimentum eget odio quis, auctor gravida neque. Nam non est posuere, dignissim lectus vel, aliquet sem. Donec cursus elementum lorem ac rhoncus. Maecenas interdum semper vestibulum. Nulla accumsan augue in neque hendrerit laoreet."
    },
    {
      title: "This is demo title 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at volutpat augue. Nunc tempor, mauris eget faucibus porttitor, risus nisi ultricies diam, vel tempor sapien dui ac erat. Integer in molestie nisl."
    },
  ]

  return (
    <section className="bg-[#3d3db9] h-screen grid place-items-center">
      <div className="px-[40px] max-w-[800px]">
        {accordionData.map((data, index) => {
          return (
            <AccordionItem
              key={index}
              open={index === open}
              title={data.title}
              desc={data.desc}
              toggle={() => toggle(index)}
            />
          );
        })}
      </div>
    </section>
  );
}
