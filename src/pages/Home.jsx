import logements from '../data/logements.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import bannerImage from '../assets/images/home-banner_1.jpg';


function Home() {
  return (
    <main>
      <Banner
        image={bannerImage}
        text="Chez vous, partout ailleurs"
      />

      <div className="logements-list">
        {logements.map((item) => (
           <Card
              key={item.id} 
              id={item.id}
              title={item.title} 
              cover={item.cover} 
            />
        ))}
      </div>
    </main>
  );
}

export default Home;