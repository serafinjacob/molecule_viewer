import { Button, Spinner } from "flowbite-react";
import { useFormStatus } from "react-dom";

export default function SaveButton() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <>
          <Button
            type="submit"
            color="indigo"
            className="rounded-xl px-10 py-2 font-bold bg-transparent border-2"
            disabled
          >
            <Spinner color="info" size="md" className="mr-5" />
            <span>Saving...</span>
          </Button>
        </>
      ) : (
        <Button type="submit" color="indigo" className="rounded-xl px-10 py-2 font-bold bg-transparent border-2">
          Save
        </Button>
      )}
    </>
  );
}
