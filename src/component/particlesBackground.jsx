import { useCallback } from "react";
import Particles from "react-tsparticles";
// Import loadSlim from tsparticles-slim
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
    // Function to initialize particles
    const particlesInit = useCallback(async (engine) => {
        console.log(engine); // Logs the engine instance
        // Load the slim version of tsparticles
        await loadSlim(engine);
    }, []);

    // Function to handle particles loaded event
    const particlesLoaded = useCallback(async (container) => {
        console.log(container); // Logs the container instance after loading
    }, []);

    return (
        <Particles
            id="tsparticles" // ID for the particle element
            init={particlesInit} // Initialize function
            loaded={particlesLoaded} // Loaded event function
            options={{
                fpsLimit: 120, // Limit the FPS for smoother performance
                interactivity: {
                    events: {
                        onClick: {
                            enable: true, // Enable click interaction
                            mode: "push", // Action on click (push particles)
                        },
                        onHover: {
                            enable: true, // Enable hover interaction
                            mode: "repulse", // Action on hover (repel particles)
                        },
                        resize: true, // Enable resizing
                    },
                    modes: {
                        push: {
                            quantity: 4, // Number of particles to push on click
                        },
                        repulse: {
                            distance: 150, // Distance for repulsion on hover
                            duration: 0.4, // Duration of repulsion effect
                        },
                    },
                },
                particles: {
                    color: {
                        value: "#500771cd", // Set particle color to white
                    },
                    links: {
                        color: "#b366d7cd", // Set the link color between particles
                        distance: 150, // Distance at which particles connect
                        enable: true, // Enable links
                        opacity: 0.5, // Set the opacity of links
                        width: 1, // Set the width of the links
                    },
                    move: {
                        direction: "none", // No specific direction for movement
                        enable: true, // Enable particle movement
                        outModes: {
                            default: "bounce", // Make particles bounce when they hit edges
                        },
                        random: false, // Disable random movement
                        speed: 3, // Set movement speed
                        straight: false, // Disable straight-line movement
                    },
                    number: {
                        density: {
                            enable: true, // Enable density control
                            area: 800, // Set density area
                        },
                        value: 100, // Set the initial number of particles
                    },
                    opacity: {
                        value: 0.5, // Set particle opacity
                    },
                    shape: {
                        type: "circle", // Set the shape of particles to circle
                    },
                    size: {
                        value: { min: 1, max: 5 }, // Set the size range for particles
                    },
                },
                detectRetina: true, // Enable retina detection for better scaling
            }}
        />
    );
};

export default ParticlesBackground;
