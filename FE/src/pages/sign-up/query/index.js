import Balance from "@/components/balance";
import Currency from "@/components/currency";
import { Finish } from "@/components/finish";
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
  linePrimary: "h-1 w-[92px] bg-[#E5E7EB]",
  lineLoaded: "h-1 w-[92px] bg-[#0166FF]",
};

const Query = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const clickHandler = () => {
    setCurrentIndex(currentIndex + 1);
  };
  return (
    <BasicLayout>
      <div className="flex flex-col items-center pt-10 gap-[141px]">
        <div className="flex flex-col items-center gap-12">
          <Logo />
          <div className="flex items-center">
            {stepper.map((item, index) => (
              <div className="flex flex-col items-center gap-1">
                <div className="flex items-center">
                  <p
                    className={`${
                      currentIndex >= index ? styles.loaded : styles.primary
                    }`}
                    key={index}
                  >
                    {item.number}
                  </p>
                  <div
                    className={`${
                      currentIndex <= index
                        ? styles.linePrimary
                        : styles.lineLoaded
                    }`}
                  ></div>
                </div>
                <div className="" key={index}>
                  {item.name}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          {currentIndex == 0 && <Currency />}
          {currentIndex == 1 && <Balance />}
          {currentIndex == 2 && <Finish />}
          <Button
            onClick={clickHandler}
            className="bg-[#0166FF] w-[384px] h-12 rounded-[20px] text-xl font-normal"
          >
            Confirm
          </Button>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Query;
