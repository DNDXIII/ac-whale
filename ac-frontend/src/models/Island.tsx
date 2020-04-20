export enum EntryFeeType {
  bells = "Bells",
  nookTicket = "Nook Ticket",
  other = "Other",
}

export enum Hemisphere {
  north = "North",
  south = "South",
}

export enum IslandTypes {
  default = "Default",
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
