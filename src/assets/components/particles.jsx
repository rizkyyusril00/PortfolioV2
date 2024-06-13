import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.



const ParticlesComponent = (props) => {

const [init, setInit] = useState(false);
// this should be run only once per application lifetime
useEffect(() => {
    initParticlesEngine(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        //await loadAll(engine);
        //await loadFull(engine);
        await loadSlim(engine);
        //await loadBasic(engine);
    }).then(() => {
        setInit(true);
    });
}, []);

const particlesLoaded = (container) => {
    console.log(container);
};


const options = useMemo(
    () => ({
        background: {
            color: {
            value: "#00010D",
            },
        },
        fpsLimit: 120,
        interactivity: {
            events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: 'grab',
            },
            },
            modes: {
            push: {
                distance: 200,
                duration: 15,
            },
            grab: {
                distance: 150,
            },
            },
        },
        particles: {
            color: {
                value: "#E5E0E1",
            },
        polygon : {
            nb_sides : 3
        },
            links: {
            color: "#BEF1F4",
            distance: 500,
            enable: false,
            opacity: 0.3,
            width: 0.2,
            },
            move: {
            direction: "top",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: true,
            speed: 2,
            straight: false,
            },
            number: {
            density: {
                enable: true,
            },
            value: 250,
            },
            opacity: {
            value: 0.8,
            },
            shape: {
            type: "circle",
            },
            size: {
            value: { min: 1, max: 2 },
            },
        },
        detectRetina: true,
    }),
    [],
);


    return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;