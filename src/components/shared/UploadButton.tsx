import { Button } from "@mantine/core";
import { DropzoneButton } from "../Dropzone/DropzoneButton";
import { modals } from "@mantine/modals";

export type UploadButtonProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  accept: string;
};
export const UploadButton = (props: UploadButtonProps) => {
  const openModal = () =>
    {
       <DropzoneButton/>
    };
  return (
    <label htmlFor="fileInput" className={props.className}>
      <input
        id="fileInput"
        type="file"
        accept={props.accept}
        className="hidden"
        onChange={props.onChange}
      />
      <Button onClick={openModal}>Upload</Button>
    </label>
  );
};
