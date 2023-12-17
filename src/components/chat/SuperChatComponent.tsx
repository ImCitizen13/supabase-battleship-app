import {
  createClient,
  type RealtimeChannelSendResponse,
  type REALTIME_LISTEN_TYPES,
  type RealtimeChannel,
  type SupabaseClient,
} from "@supabase/supabase-js";
import { env } from "~/env";
import {
  type ChatAvatarProps,
  type ChatBubbleProps,
  ChatInputColor,
  ChatBubbleColor,
  ChatBubblePosition,
  AvatarEnum
} from "./types";



export default function SuperChatComponent() {
  const client = createClient(
    env.NEXT_PUBLIC_SUPA_URL,
    env.NEXT_PUBLIC_SUPA_ANON,
  );

  return (
    <>
      <div className="flex flex-col gap-3">
        <div className="bg-base-300 flex min-w-[40%] flex-col items-center justify-center gap-7 border">
          <ChatBubble
            message={"It's over Anakin, I have the high ground."}
            position={ChatBubblePosition.start}
            color={ChatBubbleColor.lightSide}
            avatarProps={{
              _src: AvatarEnum.light,
              _alt: "Obi Wan",
            }}
          />

          <ChatBubble
            message={"You underestimate my power!"}
            position={ChatBubblePosition.end}
            color={ChatBubbleColor.darkSide}
            avatarProps={{
              _src: AvatarEnum.dark,
              _alt: "Anakin",
            }}
          />
        </div>
        <ChatAction />
      </div>
    </>
  );
}

export function SendButton({ hasText }: { hasText: boolean }) {
  return (
    <button className="btn btn-circle">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        viewBox="0 0 24 24"
      >
        <path
          d="m20.447 11.105-16-8A1 1 0 0 0 3.152 4.53L7.82 12l-4.668 7.47a1 1 0 0 0 1.3 1.425l16-8a1 1 0 0 0 0-1.79zM6.731 17.517 9.554 13H12a1 1 0 0 0 0-2H9.554L6.731 6.483 17.764 12z"
          style={{
            fill: "#ffffff",
          }}
        />
      </svg>
    </button>
  );
}

export function ChatAction() {
  return (
    <div className="flex min-w-[40%] justify-between">
      <ChatInput inputColor={ChatInputColor.lightSide} />
      <SendButton hasText={false} />
    </div>
  );
}

export function ChatBubble({
  message,
  position,
  color,
  avatarProps,
}: ChatBubbleProps) {
  return (
    <div className="p-3">
      <div className={position}>
        <ChatAvatar {...avatarProps} />
        <div className={`chat-bubble ${color} text-lg`}>{message}</div>
      </div>
    </div>
  );
}

export function ChatAvatar({ _src, _alt }: ChatAvatarProps) {
  return (
    <div className="chat-image avatar">
      <div className="w-10 rounded-full">
        <img alt={_alt} src={_src} />
      </div>
    </div>
  );
}

export function ChatInput({ inputColor }: { inputColor: ChatInputColor }) {
  return (
    <input
      type="text"
      placeholder="Type here"
      className={`input input-bordered w-full max-w-xs ${inputColor}`}
    />
  );
}
