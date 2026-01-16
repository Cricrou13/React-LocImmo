import logements from '../data/logements.json';

function Home() {
  return (
    <main>
      <h1>Bienvenue sur Kasa</h1>
      <div className="logements-list">
        {logements.map((item) => (
          <p key={item.id}>{item.title}</p>
        ))}
      </div>
    </main>
  );
}

export default Home;