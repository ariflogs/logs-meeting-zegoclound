"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Home() {
  const router = useRouter();
  const [meetingId, setMeetingId] = useState<string>("");

  const joinMeeing = () => {
    router.push(`/room/${meetingId}`);
  };

  return (
    <main>
      <Card className="mt-12 max-w-96 mx-auto p-4 space-y-4">
        <Link href={`/room/${uuid()}`}>
          <Button>Create New Meeting</Button>
        </Link>
        <p className="text-gray-500">or,</p>
        <div className="flex space-x-4">
          <Input
            value={meetingId}
            onChange={(e) => setMeetingId(e.target.value)}
            name="meetingCode"
            placeholder="Enter meeting code"
          ></Input>
          <Button onClick={joinMeeing}>Join Meeting</Button>
        </div>
      </Card>
    </main>
  );
}
