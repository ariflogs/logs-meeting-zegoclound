"use client";

import { generateKitToken } from "@/utils/zego";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import React from "react";

export default function page({ params }: { params: { id: string } }) {
  const token = generateKitToken(params.id);
  const zp = ZegoUIKitPrebuilt.create(token);

  const joinMeeting = (element: HTMLDivElement) => {
    zp.joinRoom({
      container: element,
      scenario: {
        mode: ZegoUIKitPrebuilt.VideoConference,
      },
      sharedLinks: [
        {
          name: "Arif Meeting",
          url:
            window.location.protocol +
            "//" +
            window.location.host +
            window.location.pathname,
        },
      ],
    });
  };

  return <div ref={joinMeeting}>ID: {params.id}</div>;
}
