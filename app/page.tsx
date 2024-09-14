import { Message } from "@/components/file/Message";
import { UploadForm } from "@/components/file/UploadFileForm";

export default function UploadFile() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-4">
      <Message />
      <UploadForm />
    </div>
  );
}
