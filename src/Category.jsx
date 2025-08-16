import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFoodBank, MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { CiBowlNoodles } from "react-icons/ci";
import { GiHamburger } from "react-icons/gi";
export const categories = [
    {
        id: 1,
        name: "All",
        icon: <TiThSmallOutline className="size-[60px] text-green-600" />
    },
    {
        id: 2,
        name: "breakpast",
        icon: <MdOutlineFreeBreakfast className="size-[60px] text-green-600" />
    },
    {
        id: 3,
        name: "soups",
        icon: <TbSoup className="size-[60px] text-green-600" />
    },
    {
        id: 4,
        name: "pasta",
        icon: <CiBowlNoodles className="size-[60px] text-green-600" />
    },
    {
        id: 5,
        name: "main_course",
        icon: <MdOutlineFoodBank className="size-[60px] text-green-600" />
    },
    {
        id: 6,
        name: "Pizza",
        icon: <GiFullPizza className="size-[60px] text-green-600" />
    },
    {
        id: 7,
        name: "burger",
        icon: <GiHamburger className="size-[60px] text-green-600" />
    }
]