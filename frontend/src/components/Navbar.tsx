import { Link } from "react-router";
import { Button } from "./ui/button";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-primary border-primary/10 border-b">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-secondary tracking-tight">
            NoteVai
          </h1>
          <Button variant="outline">
            <Link to={"/create"} className="flex items-center gap-x-1">
              <PlusIcon className="size-5" />
              <span>New Note</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
