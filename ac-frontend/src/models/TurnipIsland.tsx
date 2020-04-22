import { Island, EntryFeeType, Hemisphere } from "./Island";

export interface TurnipIsland extends Island {
    buying: boolean;
    currentPrice: number;
}

export const initialTurnipIslandState: TurnipIsland = {
    name: '',
    description: '',
    entryFeeType: EntryFeeType.bells,
    entryFeeAmount: 1,
    hemisphere: Hemisphere.north,
    dodoCode: '',
    buying: false,
    currentPrice: 0
};