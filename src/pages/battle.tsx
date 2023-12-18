/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { type Battle } from "~/types/Battle";
import BattleList from "~/components/battle/BattleshipList/BattleShipList";
import SuperChatComponent from "~/components/chat/SuperChatComponent";
import { type Player } from "~/types/Player";
import { PieChart } from "react-minimal-pie-chart";

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
      <FactionsStats />
      <BattleList battles={battles} />
      <div className="flex flex-wrap">
      <PieChart
        data={[
          { title: "One", value: 45, color: "blue" },
          { title: "Two", value: 50, color: "red" },
        ]}
      />
      </div>
      ;{/* <SuperChatComponent /> */}
    </div>
  );
}

function FactionsStats() {
  return (
    <div className="stats shadow">
      <div className="stat">
        <div className="stat-figure text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Total Likes</div>
        <div className="stat-value text-primary">25.6K</div>
        <div className="stat-desc">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title">Page Views</div>
        <div className="stat-value text-secondary">2.6M</div>
        <div className="stat-desc">21% more than last month</div>
      </div>
    </div>
  );
}
