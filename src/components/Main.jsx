import CardItem from "./CardItem";

const Main = () => {
  const kik = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15];
  return (
    <main className='animate__animated main animate__fadeInUp'>
      {kik.map((k) => (
        <CardItem />
      ))}
    </main>
  );
};

export default Main;
