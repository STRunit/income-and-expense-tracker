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

import { Button } from "./ui/button";
import { PlusIcon } from "./icon/plusIcon";
import { Input } from "./ui/input";


const AddCategoryIcons = [
    {
        name: "House",
        icon: <House />,
    },
    {
        name: "HouseLine",
        icon: <HouseLine />,
    },
    {
        name: "IdentificationBadge",
        icon: <IdentificationBadge />,
    },
    {
        name: "IdentificationCard",
        icon: <IdentificationCard />,
    },
    {
        name: "Ladder",
        icon: <Ladder />,
    },
    {
        name: "IntersectSquare",
        icon: <IntersectSquare />,
    },
    {
        name: "ImageSquare",
        icon: <ImageSquare />,
    },
    {
        name: "MagnifyingGlassPlus",
        icon: <MagnifyingGlassPlus />,
    },
    {
        name: "Microphone",
        icon: <Microphone />,
    },
    {
        name: "MicrosoftExcelLogo",
        icon: <MicrosoftExcelLogo />,
    },
    {
        name: "Notepad",
        icon: <Notepad />,
    },
    {
        name: "ListPlus",
        icon: <ListPlus />,
    },
    {
        name: "Leaf",
        icon: <Leaf />,
    },
    {
        name: "NumberFive",
        icon: <NumberFive />,
    },
    {
        name: "NumberCircleSeven",
        icon: <NumberCircleSeven />,
    },
    {
        name: "RoadHorizon",
        icon: <RoadHorizon />,
    },
    {
        name: "HourglassSimpleMedium",
        icon: <HourglassSimpleMedium />,
    },
    {
        name: "AnchorSimple",
        icon: <AnchorSimple />,
    },
    {
        name: "BezierCurve",
        icon: <BezierCurve />,
    },
    {
        name: "Exclude",
        icon: <Exclude />,
    },
    {
        name: "Vignette",
        icon: <Vignette />,
    },
    {
        name: "Baseball",
        icon: <Baseball />,
    },
    {
        name: "Question",
        icon: <Question />,
    },
    {
        name: "Exam",
        icon: <Exam />,
    },
    {
        name: "Watch",
        icon: <Watch />,
    },
    {
        name: "GlobeSimple",
        icon: <GlobeSimple />,
    },
    {
        name: "OrangeSlice",
        icon: <OrangeSlice />,
    },
    {
        name: "Peace",
        icon: <Peace />,
    },
    {
        name: "ToiletPaper",
        icon: <ToiletPaper />,
    },
    {
        name: "Pencil",
        icon: <Pencil />,
    }
]

const CategoryColorPicker = [
    {
        name: "Blue",
        icon: <BlueCircle />
    },
    {
        name: "Sky Blue",
        icon: <SkyBlueCircle />
    },
    {
        name: "Green",
        icon: <GreenCircle />
    },
    {
        name: "Yellow",
        icon: <YellowCircle />
    },
    {
        name: "Orange",
        icon: <OrangeCircle />
    },
    {
        name: "Purple",
        icon: <PurpleCircle />
    },
    {
        name: "Red",
        icon: <RedCircle />
    },
]


export const AddCategory = () => {
    return <Dialog>
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
                                    <SelectValue placeholder={<House />} />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup className="grid grid-rows-5 grid-cols-6 p-6 gap-6" >
                                        {AddCategoryIcons.map((category, index) => {
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
                        <Input placeholder="Name" />
                    </div>
                </div>
            </div>
            <DialogFooter>
                <Button type="submit" className="w-full bg-[#16A34A] rounded-full">Add Category</Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
}