import { CollectionSelector } from "./components/CollectionSelector";
import { MainHeader } from "./components/MainHeader";

export default function App() {
  return (
    <>
      <MainHeader />
      <p className="text-white font-detailsSolid text-3xl text-center">
        Selecione uma das coleções abaixo para ter acesso às cartas.
      </p>
      <CollectionSelector />
    </>
  );
}
