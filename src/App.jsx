import { useEffect, useState } from "react";
import {
  toast,
  ToastContainer,
} from "react-toastify";

import Navbar from "./components/navbar";
import Hero from "./components/hero";
import TechnologyCard from "./components/technologycard";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";
function App() {
  // All technologies loaded from JSON
  const [technologies, setTechnologies] = useState([]);

  // Technologies added by the user
  const [stack, setStack] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Load technology data from JSON
  useEffect(() => {
    fetch("/src/data/technologies.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to load technologies");
        }

        return response.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);

        toast.error("Failed to load technologies.");
      });
  }, []);

  // Add technology to stack
  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    // Prevent duplicate technology
    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack.`
      );

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack.`
    );
  };

  // Remove one technology
  const handleRemoveFromStack = (id) => {
    const removedTechnology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    if (removedTechnology) {
      toast.info(
        `${removedTechnology.name} removed from your stack.`
      );
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.info("Your stack is already empty.");

      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <>
      {/* Navbar */}
      <Navbar />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Technologies Section */}
        <section
          className="technologies-section"
          id="technologies"
        >
          <div className="container">

            {/* Section Heading */}
            <div className="section-heading">
              <h2>
                Explore the{" "}
                <span>Technologies</span>
              </h2>

              <p>
                Pick one technology per category to build
                your ideal stack.
              </p>
            </div>

            {/* Loading State */}
            {loading ? (
              <div className="loading-state">
                <div className="spinner"></div>

                <p>
                  Loading technologies...
                </p>
              </div>
            ) : (
              /* Technology Grid + Your Stack */
              <div className="technology-layout">

                {/* Technology Cards */}
                <div className="technology-grid">
                  {technologies.map((technology) => {

                    const isAdded = stack.some(
                      (item) =>
                        item.id === technology.id
                    );

                    return (
                      <TechnologyCard
                        key={technology.id}
                        technology={technology}
                        isAdded={isAdded}
                        onAdd={handleAddToStack}
                      />
                    );
                  })}
                </div>

                {/* Your Stack */}
                <YourStack
                  stack={stack}
                  onRemove={handleRemoveFromStack}
                  onRemoveAll={handleRemoveAll}
                />

              </div>
            )}
          </div>
        </section>

        {/* About Section Placeholder */}
        <section id="about"></section>

        {/* Projects Section Placeholder */}
        <section id="projects"></section>

        {/* Contact Section Placeholder */}
        <section id="contact"></section>
      </main>
      <Footer/>
      <ToastContainer
        position="top-right"
        autoClose={2000}
      />
    </>
  );
}

export default App;