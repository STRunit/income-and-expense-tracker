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

export const CategorySelect = ({className}) => {
  return (
    <Select>
      <SelectTrigger className={className}>
        <SelectValue placeholder="Select a Category" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Categories</SelectLabel>
          <SelectItem value="food & drinks">Food & Drinks</SelectItem>
          <SelectItem value="shopping">Shopping</SelectItem>
          <SelectItem value="housing">Housing</SelectItem>
          <SelectItem value="transportation">Transportation</SelectItem>
          <SelectItem value="vehicle">Vehicle</SelectItem>
          <SelectItem value="life & entertainment">Life & Entertainment</SelectItem>
          <SelectItem value="communication, pc">Communication, PC</SelectItem>
          <SelectItem value="financial expenses">Financial expenses</SelectItem>
          <SelectItem value="investments">Investments</SelectItem>
          <SelectItem value="income">Income</SelectItem>
          <SelectItem value="others">Others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
