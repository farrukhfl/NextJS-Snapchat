"use client";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { Avatar, AvatarImage } from "./ui/avatar";
import { UserDocument } from "@/models/user.model";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { snapMessage } from "@/lib/actions";

const PreviewUserDialog = ({
  selectedFile,
  close,
  onPreview,
}: {
  selectedFile: string;
  close: () => void;
  onPreview: () => void;
}) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserDocument>();
  const [sendMessageLoading, setSendMessageLoading] = useState(false)
  const router = useRouter()

  const selectedUserHandler = (user: UserDocument) => {
    setSelectedUser(user);
  };

  const sendSnapMessageHandler = async() =>{
    try {
      setSendMessageLoading(true)
      await snapMessage(
        selectedFile, selectedUser?._id, "image"
      )
      router.push(`/chat/${selectedUser?._id}`)
    } catch (error) {
      console.log(error)
    }finally{
      setSendMessageLoading(false)
    }
  }

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const res = await fetch("/api/chat/getusers");
        const jsonData = await res.json();
        setUsers(jsonData);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  return (
    <Dialog open={!!selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col"
      >
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Input
              type="text"
              placeholder="Search user to send snap"
              id="name"
            />
          </div>
        </DialogHeader>

        <div className="grid gap-1 py-4">
          {users.map((user: UserDocument) => {
            return (
              <div
              key={user._id}
                onClick={() => selectedUserHandler(user)}
                className={` ${
                  selectedUser?._id === user._id ? "bg-gray-200" : null
                } flex items-center gap-5 cursor-pointer p-2 rounded-md hover:bg-gray-200`}
              >
                <Avatar>
                  <AvatarImage src={user.profilePhoto} alt="user pic" />
                </Avatar>
                <div>
                  <h1 className="font-medium">{user.fullname}</h1>
                  <p className="text-sm text-gray-500">@{user.username}</p>
                </div>
              </div>
            );
          })}
          {loading && (
            <div>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            </div>
          )}
        </div>

        <DialogFooter>
          <Button onClick={close}>Cancel</Button>
          {
            sendMessageLoading ? (
              <Button type="submit">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </Button>
            ) : (
              <Button type="submit" onClick={sendSnapMessageHandler}>
              Send
            </Button>
            )
          }
         
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default PreviewUserDialog;
