import { type Battle } from "~/types/Battle";




export default function BattleList({ battles }: { battles: Battle[] }) {
    return (
      <div className="container mx-auto mt-10 flex w-full max-w-md flex-col items-center justify-center rounded-lg bg-white shadow dark:bg-gray-800">
        <ul className="flex w-full flex-col divide-y">
          {battles.map((battle) => {
            return <BattleListItem {...battle}/>;
          })}
        </ul>
      </div>
    );
  }
  
export function BattleListItem(battle: Battle) {
    return (
      <li className="flex flex-row">
        <div className="flex flex-1 cursor-pointer select-none items-center p-4 hover:opacity-20">
  
          <div className="flex-1 pl-1">
            <div className="font-medium dark:text-white">{battle.name}</div>
            <div className="text-sm text-gray-600 dark:text-gray-200">
              {battle.playerId}
            </div>
          </div>
          <div className="flex flex-row justify-center">
            <div className="text-xs text-gray-600 dark:text-gray-200">
              {battle.createdAt.toDateString()}
            </div>
            <button className="flex w-10 justify-end text-right">
              <svg
                width="20"
                fill="currentColor"
                height="20"
                className="text-gray-500 hover:text-gray-800 dark:text-gray-200 dark:hover:text-white"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1363 877l-742 742q-19 19-45 19t-45-19l-166-166q-19-19-19-45t19-45l531-531-531-531q-19-19-19-45t19-45l166-166q19-19 45-19t45 19l742 742q19 19 19 45t-19 45z"></path>
              </svg>
            </button>
          </div>
        </div>
      </li>
    );
  }