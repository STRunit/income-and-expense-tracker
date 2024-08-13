import Image from "next/image";
import { MoneyIcon } from "./icon/moneyIcon";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@radix-ui/react-select";

const data = {
  title: "Select base currency",
  paragraph:
    "Your base currency should be the one you use most often. All transaction in other currencies will be calculated based on this one ",
};

const Currency = () => {
  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex flex-col items-center gap-4">
        <Image src={MoneyIcon} />
        <div className="text-2xl font-semibold">{data.title}</div>
      </div>
      <Select>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="MNT-Mongolian Tugrik" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="MNT">MNT-Mongolian Tugrik</SelectItem>
          <SelectItem value="USD">USD-American Dollar</SelectItem>
          <SelectItem value="JPY">JPY-Japanese Yen</SelectItem>
        </SelectContent>
      </Select>
      <p>{data.paragraph}</p>
    </div>
  );
};

export default Currency;
