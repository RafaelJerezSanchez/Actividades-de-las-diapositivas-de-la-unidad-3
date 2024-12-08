import { BrowserRouter as Router, Route, Routes, useParams, Link } from "react-router-dom";

export default function Rutas() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/usuario/:nombre" element={<MySkills />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </Router>
  );
}

// Componente MySkills
function MySkills() {
  const { nombre } = useParams();

  // Función para generar un avatar (simple ejemplo)
  const generateAvatarUrl = (name) => {
    const baseUrl = "https://ui-avatars.com/api/";
    return `${baseUrl}?name=${name}&background=random&color=fff`;
  };

  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>Bienvenido, {nombre}</h2>
      <img 
        src={generateAvatarUrl(nombre)} 
        alt={`Avatar de ${nombre}`} 
        style={{ borderRadius: "50%", width: "150px", height: "150px", marginBottom: "20px" }}
      />
      <p>
        Hola, {nombre}. Esta es tu página personalizada. Aquí podríamos añadir más
        información basada en tus intereses o preferencias.
      </p>
    </div>
  );
}

// Componente NoPage
function NoPage() {
  return (
    <div style={{ textAlign: "center", margin: "20px" }}>
      <h2>La página que has solicitado no existe</h2>
      <p>
        Regresa a la <Link to="/">página principal</Link>.
      </p>
    </div>
  );
}

// Ejemplo de otros componentes
function Navbar() {
  return (
    <nav style={{ padding: "10px", background: "#eee", textAlign: "center" }}>
      <Link to="/">Inicio</Link> | <Link to="/about">Acerca de</Link>
    </nav>
  );
}

function Home() {
  return <h2>Bienvenido a la página principal</h2>;
}

function About() {
  return <h2>Acerca de nosotros</h2>;
}
