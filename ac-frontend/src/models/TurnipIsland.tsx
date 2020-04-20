import { Island } from "./Island";

export interface TurnipIsland extends Island {
    buying: boolean;
    currentPrice: number;
}