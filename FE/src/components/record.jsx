import { EyeIcon } from "./icon/eyeIcon";
import { PlusIcon } from "./icon/plusIcon";
import { Radio } from "./icon/radio";
import { TrailingIcon } from "./icon/trailingIcon";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Slider } from "@/components/ui/slider"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { DialogClose } from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { HouseIcon } from "lucide-react";
import { House } from "./icon/add-category-icons/house";
import { HouseLine } from "./icon/add-category-icons/houseLine";
import { IdentificationBadge } from "./icon/add-category-icons/identificationBadge";
import { IdentificationCard } from "./icon/add-category-icons/identificationCard";
import { Ladder } from "./icon/add-category-icons/ladder";
import { IntersectSquare } from "./icon/add-category-icons/interserctSquare";
import { ImageSquare } from "./icon/add-category-icons/imageSquare";
import { MagnifyingGlassPlus } from "./icon/add-category-icons/MagnifyingGlassPlus";
import { Microphone } from "./icon/add-category-icons/microphone";
import { MicrosoftExcelLogo } from "./icon/add-category-icons/MicrosoftExcelLogo";
import { Notepad } from "./icon/add-category-icons/notepad";
import { ListPlus } from "./icon/add-category-icons/listPlus";
import { Leaf } from "./icon/add-category-icons/leaf";
import { NumberFive } from "./icon/add-category-icons/numberFive";
import { NumberCircleSeven } from "./icon/add-category-icons/numberCircleSeven";
import { RoadHorizon } from "./icon/add-category-icons/roadHorizon";
import { HourglassSimpleMedium } from "./icon/add-category-icons/hourglassSimpleMedium";
import { AnchorSimple } from "./icon/add-category-icons/anchorSimple";
import { BezierCurve } from "./icon/add-category-icons/bezierCurve";
import { Exclude } from "./icon/add-category-icons/exclude";
import { Vignette } from "./icon/add-category-icons/vignette";
import { Baseball } from "./icon/add-category-icons/baseball";
import { Question } from "./icon/add-category-icons/question";
import { Exam } from "./icon/add-category-icons/exam";
import { Watch } from "./icon/add-category-icons/watch";
import { GlobeSimple } from "./icon/add-category-icons/globeSimple";
import { OrangeSlice } from "./icon/add-category-icons/orangeSlice";
import { Peace } from "./icon/add-category-icons/peace";
import { ToiletPaper } from "./icon/add-category-icons/toiletPaper";
import { Pencil } from "./icon/add-category-icons/pencil";
import { BlueCircle } from "./icon/add-category-icons/blueCircle";
import { SkyBlueCircle } from "./icon/add-category-icons/skyBlueCircle";
import { GreenCircle } from "./icon/add-category-icons/greenCircle";
import { YellowCircle } from "./icon/add-category-icons/yellowCircle";
import { OrangeCircle } from "./icon/add-category-icons/orangeCircle";
import { PurpleCircle } from "./icon/add-category-icons/purpleCircle";
import { RedCircle } from "./icon/add-category-icons/redCircle";



const Categories = [
  "Food & Drinks",
  "Shopping",
  "Housing",
  "Transportation",
  "Vehicle",
  "Life & Entertainment",
  "Communication, PC",
  "Financial expenses",
  "Investments",
  "Income",
  "Others",
];

const AddCategoryIcons = [
  {
    name: "House",
    icon: <House/>,
  },
  {
    name: "HouseLine",
    icon: <HouseLine/>,
  },
  {
    name: "IdentificationBadge",
    icon: <IdentificationBadge/>,
  },
  {
    name: "IdentificationCard",
    icon: <IdentificationCard/>,
  },
  {
    name: "Ladder",
    icon: <Ladder/>,
  },
  {
    name: "IntersectSquare",
    icon: <IntersectSquare/>,
  },
  {
    name: "ImageSquare",
    icon: <ImageSquare/>,
  },
  {
    name: "MagnifyingGlassPlus",
    icon: <MagnifyingGlassPlus/>,
  },
  {
    name: "Microphone",
    icon: <Microphone/>,
  },
  {
    name: "MicrosoftExcelLogo",
    icon: <MicrosoftExcelLogo/>,
  },
  {
    name: "Notepad",
    icon: <Notepad/>,
  },
  {
    name: "ListPlus",
    icon: <ListPlus/>,
  },
  {
    name: "Leaf",
    icon: <Leaf/>,
  },
  {
    name: "NumberFive",
    icon: <NumberFive/>,
  },
  {
    name: "NumberCircleSeven",
    icon: <NumberCircleSeven/>,
  },
  {
    name: "RoadHorizon",
    icon: <RoadHorizon/>,
  },
  {
    name: "HourglassSimpleMedium",
    icon: <HourglassSimpleMedium/>,
  },
  {
    name: "AnchorSimple",
    icon: <AnchorSimple/>,
  },
  {
    name: "BezierCurve",
    icon: <BezierCurve/>,
  },
  {
    name: "Exclude",
    icon: <Exclude/>,
  },
  {
    name: "Vignette",
    icon: <Vignette/>,
  },
  {
    name: "Baseball",
    icon: <Baseball/>,
  },
  {
    name: "Question",
    icon: <Question/>,
  },
  {
    name: "Exam",
    icon: <Exam/>,
  },
  {
    name: "Watch",
    icon: <Watch/>,
  },
  {
    name: "GlobeSimple",
    icon: <GlobeSimple/>,
  },
  {
    name: "OrangeSlice",
    icon: <OrangeSlice/>,
  },
  {
    name: "Peace",
    icon: <Peace/>,
  },
  {
    name: "ToiletPaper",
    icon: <ToiletPaper/>,
  },
  {
    name: "Pencil",
    icon: <Pencil/>,
  }
]

const CategoryColorPicker = [
  {
    name: "Blue",
    icon: <BlueCircle/>
  },
  {
    name: "Sky Blue",
    icon: <SkyBlueCircle/>
  },
  {
    name: "Green",
    icon: <GreenCircle/>
  },
  {
    name: "Yellow",
    icon: <YellowCircle/>
  },
  {
    name: "Orange",
    icon: <OrangeCircle/>
  },
  {
    name: "Purple",
    icon: <PurpleCircle/>
  },
  {
    name: "Red",
    icon: <RedCircle/>
  },
]

export const Record = () => {
  return (
    <div className="inline-flex p-6 flex-col items-start gap-6 rounded-xl border-solid border-[1px] border-[#E5E7EB] mt-6">
      <div className="flex flex-col items-start self-stretch gap-6">
        <h3 className="text-2xl font-semibold">Records</h3>
        <Button className="flex items-center self-stretch justify-center h-8 gap-1 bg-[#0166FF] rounded-[20px]">
          <PlusIcon />
          Add
        </Button>
      </div>
      <div className="flex w-[250px] max-w-[320px] flex-col justify-center items-center rounded-lg">
        <Input
          className="flex h-8 max-w-[320px] p-4 items-center self-stretch rounded-lg border-[1px] border-solid border-[#D1D5DB]"
          placeholder="Search"
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-base font-semibold">Types</h4>
        <div className="w-[109px] h-[104px]">
          <Button variant="ghost" className="gap-2">
            <Radio />
            All
          </Button>
          <Button variant="ghost" className="gap-2">
            <Radio />
            Income
          </Button>
          <Button variant="ghost" className="gap-2">
            <Radio />
            Expense
          </Button>
        </div>
      </div>
      <div className="flex flex-col items-start self-stretch gap-4">
        <div className="flex items-center self-stretch justify-between">
          <h4 className="font-semibold">Category</h4>
          <Button
            variant="ghost"
            className="flex items-center justify-center h-8 gap-1 rounded-[20px] text-gray-400"
          >
            Clear
          </Button>
        </div>
        <div className="flex flex-col items-start self-stretch gap-2">
          {Categories.map((category, index) => {
            return (
              <div className="flex items-center self-stretch justify-between" key={index}>
                <Button
                  variant="ghost"
                  className="flex items-center justify-center h-8 gap-2"
                  key={index}
                >
                  <EyeIcon />
                  {category}
                </Button>
                <TrailingIcon />
              </div>
            );
          })}
          <div className="flex items-center self-stretch justify-between">

            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="ghost"
                  className="flex items-center self-stretch justify-center h-8 gap-1 rounded-[20px]"
                >
                  <PlusIcon color="#0166FF" />
                  Add Category
                </Button>
              </DialogTrigger>
              <DialogContent className="">
                <DialogHeader className="justify-between">
                  <DialogTitle>Add Category</DialogTitle>
                  <DialogClose><Cross2Icon /></DialogClose>
                </DialogHeader>
                <div className="flex p-6 flex-col items-start gap-5">
                  <div className="flex flex-col items-start gap-8 self-stretch">
                    <div className="flex items-start gap-3 self-stretch">
                      <div className="flex items-start gap-3">
                        <Select>
                          <SelectTrigger className="w-[80px] h-[48px]">
                            <SelectValue placeholder={<House/>} />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectGroup className="grid grid-rows-5 grid-cols-6 p-6 gap-6" >
                              {AddCategoryIcons.map((category,index) => {
                                return <SelectItem className="p-0 gap-0 grid justify-center items-center" key={index} value={category.name}>{category.icon}</SelectItem>
                              })}
                            </SelectGroup>
                            <SelectGroup className="flex gap-4 justify-center py-6 border-t-[1px]">
                              {CategoryColorPicker.map((color, index) => {
                                return <div key={index} value={color.name}>{color.icon}</div>
                              })}
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                      <Input placeholder="Name"/>
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button type="submit" className="w-full bg-[#16A34A] rounded-full">Add Category</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4">
        <h4 className="text-base font-semibold">Amount Range</h4>
        <div className="flex flex-col items-center gap-4">
          <div className="flex items-start self-stretch gap-4">
            <Input className="w-[120px] flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#D1D5DB] bg-[#F3F4F6]" />
            <Input className="w-[120px] flex flex-col items-center justify-center rounded-lg border-[1px] border-solid border-[#D1D5DB] bg-[#F3F4F6]" />
          </div>
          <div className="flex w-[245px] items-start content-start gap-[189px] flex-wrap">
            <Slider defaultValue={[0]} max={100000} step={50} />
          </div>
        </div>
      </div>
    </div>
  );
};
