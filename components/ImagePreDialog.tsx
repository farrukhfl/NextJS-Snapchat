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

const ImagePreDialog = ({
  selectedFile,
  close,
  imageChange,
  setFlag,
}: {
  selectedFile: string;
  close: () => void;
  imageChange: any;
  setFlag: any;
}) => {
  return (
    <Dialog open={!!selectedFile}>
      <DialogContent
        onInteractOutside={close}
        className="sm:max-w-[425px] bg-white border max-w-xl flex flex-col"
      >
        <DialogHeader>
          <div className="flex items-center relative h-3/4 my-auto">
            <Image
              src={selectedFile}
              alt="selectedFile"
              width={400}
              height={400}
              className="rounded-md border mx-auto border-gray-400 object-contain"
            />
          </div>
        </DialogHeader>

        <DialogFooter className="flex mx-auto items-center">
          <DialogClose asChild>
            <Button
              className="rounded-full"
              onClick={close}
              variant="destructive"
              size={"sm"}
            >
              Cancel
            </Button>
          </DialogClose>
          <Button
            className="rounded-full"
            variant="destructive"
            size={"sm"}
            onClick={imageChange}
          >
            Change
          </Button>
          <Button
            className="rounded-full px-4 bg-green-500 hover:bg-green-400"
            size={"sm"}
            onClick={() => setFlag && setFlag(true)}
          >
            Next
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ImagePreDialog;
