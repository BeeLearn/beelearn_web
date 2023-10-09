import { Albert_Sans, Nunito, Inter, Lato , Noto_Sans} from "next/font/google";

export const nunitoSans = Noto_Sans({
    subsets: ["latin"],
    weight: ["100", "300", "400", "600", "800", "700", "900"]
});

export const defaultFont = Lato({
    subsets: ["latin"],
    weight: ["100", "300", "400", "700", "900"]
});