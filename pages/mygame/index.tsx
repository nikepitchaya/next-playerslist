import { useRouter } from "next/router";
import BaseButton from "../../components/base/base-button";
import Card from "../../components/mygame/card-mylist";

export default function MyGame() {
  const router = useRouter();
  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="p-4 mb-8 bg-blood rounded-md">
        <p className="text-5xl text-sky">
          My Game <span className="text-sun">200%</span>
        </p>
      </div>
      <div className="w-11/12 flex justify-between items-center mb-4">
        <p className="text-4xl underline">Game List</p>
        <BaseButton
          onClick={() => {
            router.push("/gamelist");
          }}
          slot="Add Game"
          style="lime"
          className="text-2xl py-2 px-6 hover:scale-110"
        />
      </div>
      <div className="w-11/12 h-auto grid grid-cols-5 place-items-center gap-0 px-4 py-2 bg-white bg-opacity-50 rounded-md">
        {[...Array(8)].map((e, i) => (
          <Card key={i} />
        ))}
      </div>
    </div>
  );
}
