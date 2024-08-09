import Image from "next/image";
import Button from "./Button";
import { centuryGothic } from "@/utils/fonts";

export const HeroSection = () => {
  return (
    // <section className="w-full h-full bg-[url('/39.png')] bg-cover bg-opacity-10 lg:py-36 bg-no-repeat bg-center backdrop-filter">
    <section className="w-full h-full">
      <Image
        src="/39.png"
        width={1000}
        height={1000}
        className="w-full md:h-fit h-[50vh] object-cover relative blur-[1px]"
        alt="farm"
      />
      <div className="w-full md:py-8 absolute lg:top-1/3 top-[20%]">
        <div className="mx-auto md:px-8 px-4 max-w-7xl flex flex-col w-full h-full gap-4">
          <div className="relative">
            <p
              className={`md:text-xl text-base font-bold ${centuryGothic.className}`}
            >
              Original & Natural
            </p>
            <img
              src="/Underline.svg"
              alt="underline"
              className="absolute -bottom-4 left-0"
            />
          </div>
          <div className="flex flex-col md:gap-2">
            <h2 className="md:text-6xl text-2xl font-bold text-color">
              Agriculture&nbsp;
              <span className="relative">
                Matter
                <img
                  src="/leaf.svg"
                  alt="leaf"
                  className="absolute top-0 right-0 -mt-8 md:w-auto w-1/2"
                />
              </span>
            </h2>
            <h2 className="md:text-6xl text-2xl font-bold">Good production</h2>
          </div>
          <p
            className={`md:text-xl text-base font-medium md:my-2 w-auto lg:w-8/12 leading-tight ${centuryGothic.className}`}
          >
            Dissuade ecstatic and properly saw entirely sir why laughter
            endeavor. In on my jointure horrible margaret suitable he speedily.
          </p>
          <Button
            text={"Discover More"}
            className="p-3 md:w-80 w-1/2 font-medium text-lg"
          />
        </div>
      </div>
    </section>
  );
};
