import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => (
  <div className="container">
    <Navbar />
    <header className="hero">
      <video autoPlay loop muted className="video-background">
        <source src="tech.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <h1>ARTIFICIAL INTELLIGENCE</h1>
        <p>
          Explore the future of AI technology, innovation, and intelligence.
        </p>
      </div>
    </header>

    <section className="features">
      <h2>What AI Can Do</h2>
      <div className="feature-cards">
        <div className="card">
          <img src="1.jpg" alt="AI Research" />
          <p>Revolutionizing Research</p>
        </div>
        <div className="card">
          <img src="6.jpg" alt="AI in Robotics" />
          <p>Advancements in Robotics</p>
        </div>
        <div className="card">
          <img src="8.jpg" alt="AI in Healthcare" />
          <p>Innovations in Healthcare</p>
        </div>
        <div className="card">
          <img src="7.jpg" alt="AI in Automation" />
          <p>Automation Across Industries</p>
        </div>
        <div className="card">
          <img src="5.jpg" alt="AI in Security" />
          <p>Enhancing Security</p>
        </div>
      </div>
    </section>

    <Footer />

    <style jsx>{`
      .container {
        font-family: Arial, sans-serif;
        color: #ffffff;
        background-color: #0a0a0f;
      }

      .hero {
        position: relative;
        height: 80vh;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
      }

      .video-background {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0.5;
      }

      .hero-content {
        position: relative;
        z-index: 10;
        text-align: center;
      }

      .hero h1 {
        font-size: 2.5rem;
        margin-bottom: 10px;
        color: #00ffff;
        animation: fadeIn 2s ease;
      }

      .hero p {
        font-size: 0.9rem;
        max-width: 600px;
        margin: auto;
        color: ffffff;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      /* Features Section */
      .features {
        padding: 40px 20px;
        text-align: center;
      }

      .features h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
      }

      .feature-cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }

      .card {
        width: 200px;
        border-radius: 8px;
        overflow: hidden;
        background-color: #1a1a2e;
        transition: transform 0.3s ease;
      }

      .card:hover {
        transform: translateY(-10px);
        box-shadow: 0 4px 10px rgba(255, 255, 255, 0.2);
      }

      .card img {
        width: 100%;
        height: auto;
        display: block;
      }

      .card p {
        padding: 10px;
        color: #ffdd57;
        font-weight: bold;
        text-align: center;
      }
    `}</style>
  </div>
);

export default Home;
