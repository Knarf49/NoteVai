import { Link } from "react-router";
import { type Note } from "@/lib/types";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquarePen, Trash2 } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import api from "@/lib/axios";
import toast from "react-hot-toast";

const NoteCard = ({
  note,
  setNotes,
}: {
  note: Note;
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}) => {
  const handleDelete = async (
    e: React.MouseEvent<HTMLButtonElement>,
    id: string
  ) => {
    e.preventDefault();
    if (!window.confirm("Are you sure you want to delete this note?")) return;
    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((note) => note._id !== id));
      toast.success("Note deleted successfully");
    } catch (error: any) {
      console.log("Error in handleDelete", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <Link to={`/note/${note._id}`}>
      <Card className="border-t-4 border-primary">
        <CardHeader>
          <CardTitle>{note.title}</CardTitle>
          <CardDescription>{note.content}</CardDescription>
        </CardHeader>
        <CardFooter>
          <div className="flex justify-between w-full">
            <div>{formatDate(new Date(note.createdAt))}</div>
            <div className="flex gap-x-4 cursor-default">
              <Button>
                <SquarePen />
              </Button>
              <Button
                variant="destructive"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                  handleDelete(e, note._id)
                }
              >
                <Trash2 className="cursor-pointer" />
              </Button>
            </div>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default NoteCard;
