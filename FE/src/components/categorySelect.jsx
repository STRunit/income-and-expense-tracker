import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HomeIcon } from "./icon/homeIcon"
import { PlusIcon } from "./icon/plusIcon";
import { FoodIcon } from "./icon/foodIcon";
import { ShoppingIcon } from "./icon/shoppingIcon";
import { BusIcon, LifeBuoyIcon, PcCaseIcon } from "lucide-react";
import { TaxiIcon } from "./icon/taxiIcon";
import { BalanceIcon } from "./icon/balanceIcon";
import { MoneyIcon } from "./icon/moneyIcon";
import { GiftIcon } from "./icon/giftIcon";

const Categories = [
  {
    name: "Add Category",
    icon: <PlusIcon color="blue" />,
  },
  {
    name: "Food & Drinks",
    icon: <FoodIcon />,
  },
  {
    name: "Shopping",
    icon: <ShoppingIcon />,
  },
  {
    name: "Housing",
    icon: <HomeIcon />,
  },
  {
    name: "Transportation",
    icon: <BusIcon color="red" />,
  },
  {
    name: "Vehicle",
    icon: <TaxiIcon />,
  },
  {
    name: "Life & Entertainment",
    icon: <LifeBuoyIcon color="brown" />,
  },
  {
    name: "Communication, PC",
    icon: <PcCaseIcon color="cyan" />,
  },
  {
    name: "Financial expenses",
    icon: <BalanceIcon />,
  },
  {
    name: "Investments",
    icon: <MoneyIcon />,
  },
  {
    name: "Income",
    icon: <MoneyIcon />,
  },
  {
    name: "Others",
    icon: <GiftIcon />,
  },
];


export const CategorySelect = ({ className }) => {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          {Categories.map((category, index) => {
            return <SelectItem key={index} icon={category.icon} value={category.name}>{category.name}</SelectItem>
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
