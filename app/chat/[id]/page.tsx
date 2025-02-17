import { auth } from "@/auth";
import ChatPage from "@/components/ChatPage";
import { getMessage } from "@/lib/messageData";
import { getProfileUser } from "@/lib/userData";
import React from "react";

const ChattingPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;
  let userProfile = await getProfileUser(id);
  // userProfile = JSON.stringify(userProfile);
  const authUser = await auth();
  const messages = authUser ? await getMessage(authUser?.user?._id, id) : []

  return (
    <div className="w-[72%]">
      <ChatPage userProfile={userProfile} messages={messages} authUser={authUser}/>
    </div>
  );
};

export default ChattingPage;
