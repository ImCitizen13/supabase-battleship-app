import { type ChangeEvent, useState } from "react";
import { api } from "~/utils/api";
import { env } from "~/env";
import { AvatarEnum } from "../chat/types";
import {
  darkSideCover,
  HoverCardView,
  lightSideCover,
} from "../popCover/PopCover";
import CompletionModal, { ModalProps } from "./CompletionModal";
import Link from "next/link";

// const supabase = createClient(
//   env.NEXT_PUBLIC_SUPA_URL,
//   env.NEXT_PUBLIC_SUPA_ANON,
// );

enum ForceColor {
  darkSide = "#fa5761",
  lightSide = "#38b6ff",
}

const lightsideModalProps = {
  title: "Congratulations Padawan",
  message: "May the Force be with you...",
  link: "/battle",
};
const darksideModalProps = {
  title: "Yees yess",
  message: "Infinite Power",
  link: "/battle",
};

export default function ChooseSideForm() {
  const [side, setSide] = useState<boolean>(true);
  const [userName, setUserName] = useState<string>("");
  const [addingName, setAddingName] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleTextChange = () => {
    setSide(!side);
  };

  function openCompletionModel() {
    setShowModal(true);
  }

  const createPlayer = api.player.add.useMutation({
    onSuccess: (newPlayer) => {
      console.log("Successfully added: ", newPlayer);
      setAddingName(false);
      openCompletionModel();
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
      side: side ? "darkSide" : "lightSide"
    });
  };
  return (
    <div
      className="flex h-[100vh] w-[100vw] flex-col flex-wrap items-center justify-center gap-20"
      style={{
        backgroundImage: `radial-gradient(black, black, var(--${
          side ? "darkside" : "lightside"
        }-radial-color)`,
      }}
    >
      {!showModal && (
        <>
          <span
            style={{
              color: !side ? ForceColor.lightSide : ForceColor.darkSide,
            }}
            className="text-6xl"
          >
            Pick a side?
          </span>
          <div className="flex flex-wrap items-center justify-center gap-12">
            <div className="flex flex-wrap gap-20">
              <div onClick={() => setSide(false)}>
                <HoverCardView {...darkSideCover} />
              </div>
              <div className="divider lg:divider-horizontal">OR</div>
              <div
                onClick={() => {
                  setSide(true);
                }}
              >
                <HoverCardView {...lightSideCover} />{" "}
              </div>
            </div>
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
          {!side ? (
            <button
              onClick={handleButtonClick}
              className={`btn btn-info ${
                userName.length < 1 ? "btn-disabled" : ""
              }`}
            >
              Join the Light Side
              {addingName && <span className="loading loading-spinner"></span>}
            </button>
          ) : (
            <button
              onClick={handleButtonClick}
              className={`btn btn-error hover:bg-primary-red ${
                userName.length < 1 ? "btn-disabled" : ""
              }`}
            >
              Join the Dark Side
              {addingName && <span className="loading loading-spinner"></span>}
            </button>
          )}
        </>
      )}
      {showModal && side && <CompletionView {...darksideModalProps} />}
      {showModal && side && <CompletionView {...lightsideModalProps} />}
    </div>
  );
}

function CompletionView({ title, message, link }: ModalProps) {
  return (
    <div>
      <h1>{title}</h1>
      <span>{message}</span>
      <Link href={link}>
        <button>Let's Battle</button>
      </Link>
    </div>
  );
}

// function FaceCheck
