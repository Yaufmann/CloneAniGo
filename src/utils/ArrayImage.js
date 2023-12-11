import fullAlc from "../assets/FullAlc.jpg";
import naruto from "../assets/naruto.jpg";
import bleach from "../assets/bleach.jpg";
import gurrenLaggan from "../assets/GurrenLaggan.jpg";
import blackClover from "../assets/black-clover.webp";
import {v4} from "uuid";

export const arrayImage = [
    {
        id: v4(),
        img: fullAlc,
        text: "Стальной алхимик",
    },
    {
        id: v4(),
        img: naruto,
        text: "Наруто",
    },
    {
        id: v4(),
        img: bleach,
        text: "Блич",
    },
    {
        id: v4(),
        img: gurrenLaggan,
        text: "Гуррен Лагган",
    },
    {
        id: v4(),
        img: blackClover,
        text: "Черный клевер",
    },
]