import Feed from "@/components/Feed";
import Headers from "@/components/Headers";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Headers />
      <Feed />
    </div>
  );
}
