import { ModeToggle } from "@/components/mode-toggle";
import SideBar from "@/components/sidebar";

export default function Home() {
  return (
    <>
      <SideBar />

      <div className="flex justify-end absolute top-0 right-0 p-4">
        <ModeToggle />
      </div>
    </>
  );
}
