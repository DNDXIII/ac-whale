export enum EntryFeeType {
  bells = "Bells",
  nookTicket = "Nook Ticket",
  other = "Other",
  none = "None"
}

export enum Hemisphere {
  north = "North",
  south = "South",
}

export enum IslandTypes {
  default = "Default",
  eventIsland = "Event",
  turnipIsland = "Turnip"
}

export interface Island {
  id?: number;
  dateCreated?: Date;
  name: string;
  description: string;
  entryFeeType: EntryFeeType;
  entryFeeAmount: number;
  hemisphere: Hemisphere;
  dodoCode: string;
}

export const initialIslandState: Island = {
  name: '',
  description: '',
  entryFeeType: EntryFeeType.bells,
  entryFeeAmount: 1,
  hemisphere: Hemisphere.north,
  dodoCode: '',
};