import {INavItemType} from "@/widgets/homeHeader/lib/types/ITypes";
import {BriefCaseIcon, LaptopIcon, PuzzleIcon, RocketIcon, UsersIcon, VideoPlayerIcon} from "@/shared";

export const NAV_ITEMS: INavItemType[] = [
    {
        text: 'Популярный контент',
        Img: RocketIcon,
        url: '/'
    },
    {
        text: 'Люди',
        Img: UsersIcon,
        url: '/'
    },
    {
        text: 'Linkedin Learning',
        Img: VideoPlayerIcon,
        url: '/'
    },
    {
        text: 'Вакансии',
        Img: BriefCaseIcon,
        url: '/'
    },
    {
        text: 'Игры',
        Img: PuzzleIcon,
        url: '/'
    },
    {
        text: 'Загрузить приложение',
        Img: LaptopIcon,
        url: '/'
    }
]