import { Session, SupabaseClient } from "@supabase/supabase-js";
import Head from "next/head";
import Link from "next/link";
import SuperChatComponent from "~/components/chat/SuperChatComponent";
import { useState, type ChangeEvent } from "react";
import { createClient } from "@supabase/supabase-js";
import { Fade } from "react-awesome-reveal";

// import { Auth } from "@supabase/auth-ui-react";
// import { ThemeSupa } from "@supabase/auth-ui-shared";

// import { api } from "~/utils/api";
import { env } from "~/env";
import LightSaber from "~/components/LightSaber";
import { api } from "~/utils/api";
import { AvatarEnum } from "~/components/chat/types";
import { redirect } from "next/navigation";

const supabase = createClient(
  env.NEXT_PUBLIC_SUPA_URL,
  env.NEXT_PUBLIC_SUPA_ANON,
);

enum ForceColor {
  darkSide = "#fa5761",
  lightSide = "#38b6ff",
}

export default function Home() {

  const [side, setSide] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleChange = () => {
    setSide(!side);
  };
  const createPlayer = api.player.add.useMutation({
    onSuccess: (newPlayer) => {
      console.log("Successfully added: ", newPlayer)
    },onError(error, variables, context) {
      console.error
    },
  });
  const handleButtonClick = () => {
    createPlayer.mutate({
      name: userName,
      avatar: !side ? AvatarEnum.light : AvatarEnum.dark,
    });
  };

  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-center gap-4 bg-black`}
      >
        <Fade>
          <div className="flex flex-col gap-14">
            <span
              style={{
                color: !side ? ForceColor.lightSide : ForceColor.darkSide,
              }}
              className="text-6xl"
            >
              Pick a side?
            </span>
            <div className="flex items-center justify-center gap-12">
              <label className="swap swap-flip text-9xl">
                {/* this hidden checkbox controls the state */}
                <input checked={side} onChange={handleChange} type="checkbox" />

                <div className="swap-on">😈</div>
                <div className="swap-off">😇</div>
              </label>
            </div>
            <input
              type="text"
              placeholder="Enter your name"
              name="userName"
              onChange={handleUserNameChange}
              value={userName}
              className={`input input-bordered  w-full max-w-xs ${
                !side ? "input-info" : "input-error"
              }`}
            />

            {userName.length > 0 &&
              (!side ? (
                <button onClick={handleButtonClick} className={`btn btn-info`}>
                  Join the Light Side
                </button>
              ) : (
                <button
                  onClick={handleButtonClick}
                  className="btn btn-error hover:bg-primary-red"
                >
                  Join the Dark Side
                </button>
              ))}

            <div></div>
            <div></div>
            <div></div>
          </div>
        </Fade>
        {/* <div className="diff h-[100vh]">
          <div onClick={() => console.log("Light Side")} className="diff-item-1">
            <div  className="gap-6 grid place-content-center bg-secondary-blue text-9xl font-black text-white">
              <span className="">Light</span>
            </div>
          </div>
          <div onClick={() => console.log("Dark Side")} className="diff-item-2">
            <div className="gap-6 grid place-content-center bg-primary-red text-9xl font-black text-black">
              <span >Dark</span>
            </div>
          </div>
          <div className="diff-resizer"></div>
        </div> */}

        {/* <SuperChatComponent/> */}
      </main>
    </>
  );
}

// function AuthShowcase() {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = api.post.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined }
//   );

//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// }
