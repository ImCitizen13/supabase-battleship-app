import { type ChangeEvent, useState } from "react";
import { api } from "~/utils/api";
import { env } from "~/env"
import { AvatarEnum } from "../chat/types";

// const supabase = createClient(
//   env.NEXT_PUBLIC_SUPA_URL,
//   env.NEXT_PUBLIC_SUPA_ANON,
// );

enum ForceColor {
  darkSide = "#fa5761",
  lightSide = "#38b6ff",
}
export default function ChooseSideForm() {
  const [side, setSide] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [addingName, setAddingName] = useState<boolean>(false);

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleTextChange = () => {
    setSide(!side);
  };

  function openCompletionModel() {
    //const modal  = document.getElementById('my_modal_5').showModal()
    
  }

  const createPlayer = api.player.add.useMutation({
    onSuccess: (newPlayer) => {
      console.log("Successfully added: ", newPlayer);
      setAddingName(false);
      openCompletionModel()
    },
    onError(error, variables, context) {
      console.error;
    },
    onMutate: () => {
      setAddingName(true);
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
      {" "}
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
          <input checked={side} onChange={handleTextChange} type="checkbox" />

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
            {addingName && <span className="loading loading-spinner"></span>}
          </button>
        ) : (
          <button
            onClick={handleButtonClick}
            className="btn btn-error hover:bg-primary-red"
          >
            Join the Dark Side
            {addingName && <span className="loading loading-spinner"></span>}
          </button>
        ))}
    </>
  );
}

// function FaceCheck
