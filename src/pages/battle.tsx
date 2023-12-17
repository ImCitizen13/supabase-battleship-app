/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Battle } from "~/types/Battle";
import BattleList from "~/components/battle/BattleshipList/BattleShipList";
import SuperChatComponent from "~/components/chat/SuperChatComponent";
import { type Player } from "~/types/Player";

export default function Battle() {
  const player1: Player = {
    id: 1,
    name: "Anakin",
    avatar: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const player2: Player = {
    id: 2,
    name: "Obi Wan˝",
    avatar: "",
    createdAt: new Date(),
    updatedAt: new Date(),
  };
  const battles: Battle[] = [
    {
      id: 2343,
      name: "Battle1",
      host: player1,
      playerId: player1.id,
      // guest:
      // guestId: 322,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2344,
      name: "Battle2",
      host: player2,
      playerId: player2.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <div className="flex min-h-screen min-w-full flex-col gap-20 bg-black">
      <BattleList battles={battles} />
      <SuperChatComponent />
    </div>
  );
}
