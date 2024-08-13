import Currency from "@/components/currency";
import Logo from "@/components/icon/logo";
import { Button } from "@/components/ui/button";
import { BasicLayout } from "@/layout/layout";
import { useState } from "react";

const stepper = [
  {
    number: "1",
    name: "Currency",
  },
  {
    number: "2",
    name: "Balance",
  },
  {
    number: "3",
    name: "Finish",
  },
];

const styles = {
  primary: "w-6 h-6 text-center rounded-full bg-[#E5E7EB]",
  loaded: "w-6 h-6 text-center rounded-full bg-[#0166FF] text-white",
};

const Query = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clickHandler = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <BasicLayout>
      <div className="flex flex-col items-center pt-10">
        <div className="flex flex-col items-center gap-12">
          <Logo />
          <div className="flex items-center gap-4">
            {stepper.map((item, index) => (
              <div className="flex flex-col items-center gap-1">
                <p
                  className={`${
                    currentIndex >= index ? styles.loaded : styles.primary
                  }`}
                  key={index}
                >
                  {item.number}
                </p>
                <div className="" key={index}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>{currentIndex === 0 && <Currency />}</div>

        <div>
          <Button onClick={clickHandler} className="bg-[#0166FF]">
            Confirm
          </Button>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Query;
