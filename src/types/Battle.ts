import { type Player } from "./Player";

export type Battle = {
  id: number;
  name: string;
  host: Player;
  playerId: number;
  guest?: Player;
  guestId?: number;
  createdAt: Date;
  updatedAt: Date;
};
