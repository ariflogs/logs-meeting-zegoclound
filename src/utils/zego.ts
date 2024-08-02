import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { v4 as uuid } from "uuid";

export const generateKitToken = (roomID: string) => {
  if (typeof Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID) !== "number") {
    throw new Error("Zego app id missing!");
  }

  if (typeof process.env.NEXT_PUBLIC_ZEGO_APP_SECRET !== "string") {
    throw new Error("Zego app secret missing!");
  }
  return ZegoUIKitPrebuilt.generateKitTokenForTest(
    Number(process.env.NEXT_PUBLIC_ZEGO_APP_ID),
    process.env.NEXT_PUBLIC_ZEGO_APP_SECRET,
    roomID,
    uuid(),
    "Arif Hossain"
  );
};
