import Navbar from "@/components/NavBar";

export default function MainPage() {
  return (
    <div>
      <Navbar/>
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto p-4 text-center">
          <h1 className="text-4xl font-bold">Поиск авиабилетов</h1>
          <p className="text-lg"></p>
          <div className="my-8 flex justify-center space-x-4">
            <button className="py-2 px-4 bg-blue-400 text-white rounded-lg">
              Авиабилеты
            </button>
          </div>
        </div>
      </header>
    </div>
  );
}
