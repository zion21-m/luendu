import Image from "next/image";

export default function Home() {
  return (
    <main className="flex items-center justify-center h-[80vh] border">
      <div className="p-6">
        <h1 className="text-4xl lg:text-6xl text-center text-blue-500">
          BIENVENUE SUR LE SITE DE <br />{" "}
          <span className="text-blue-500 font-semibold">LUENDU</span>
        </h1>
      </div>
    </main>
  );
}
