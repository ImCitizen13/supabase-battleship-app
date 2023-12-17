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
import ChooseSideForm from "~/components/setup/ChooseSideForm";



export default function Home() {


  return (
    <>
      <main
        className={`flex min-h-screen flex-col items-center justify-center gap-4 bg-black`}
      >
        <Fade>
          <div className="flex flex-col gap-14">
            <ChooseSideForm/>
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
