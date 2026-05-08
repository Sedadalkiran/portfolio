export const projects = [
    {
        slug: "death-line",
        title: "Death Line — Animation Based Gameplay System",
        shortDescription:
            "A high-intensity extraction shooter built in Unreal Engine 5, featuring gameplay systems powered by the Gameplay Ability System and C++.",
        longDescription:
            "Death Line is an Unreal Engine 5 extraction shooter built with C++, featuring modular gameplay systems powered by GAS. The project focuses on animation-driven combat and traversal, utilizing Motion Warping for mechanics such as vaulting, climbing, jumping. Enemy AI behaviors, including stagger, dodge and hit reactions, were implemented through ability-based architectures for scalability and consistency. Additional systems include healing, quick-death mechanics, and a multiplayer-ready barter system. The development emphasizes clean architecture, responsiveness, and extensible gameplay design.",
        techStack: ["Unreal Engine 5", "C++", "Blueprint", "Animation Blueprints", "Gameplay Ability System"],
        thumbnail: "/images/a1.png",
        heroImage: "/images/a1.png",
        developmentProcess:
            "Development began with a core attack state machine in C++, defining states for idle, attacking, blocking, dodging, and staggered. The Gameplay Ability System (GAS) was integrated to manage ability activation, cooldowns, and attribute modifications like stamina.",
     challenges: [
            {
                title: "Balancing Difficulty Without Feeling Artificial",
                description:
                    "The core challenge was making difficulty adjustments feel organic. Instead of directly modifying enemy health or damage, the system adjusts behavioral parameters — reaction times, coordination between squads, and tactical decision quality — creating difficulty shifts that feel like smarter enemies rather than stat inflation.",
            },
            {
                title: "Performance at Scale",
                description:
                    "Running continuous telemetry analysis and EQS queries for 30+ AI agents required aggressive optimization. A tiered update system was implemented where distant enemies use simplified behavior profiles, and EQS queries are distributed across frames using a batched evaluation pipeline.",
            },
            {
                title: "Designer Authoring Tools",
                description:
                    "A custom Editor Utility Widget was built to visualize the Director's internal state — intensity curves, active modifiers, and per-agent behavior profiles — allowing designers to fine-tune the system's responsiveness and thresholds without code changes.",
            },
        ],

    },
    {
        slug: "death-relives",
        title: "Death Relives — Puzzle Systems | AI",
        shortDescription:
            "A mythological horror game released on Steam, Xbox, and PlayStation 5, developed in Unreal Engine 5, featuring Utility AI systems and Blueprint-driven puzzle mechanics.",
        longDescription:
            "Death Relives is a mythological horror game released on Steam, Xbox, and PlayStation 5, developed using Unreal Engine 5. The project integrates advanced Utility AI systems built on score-based decision-making mechanisms, enabling dynamic, context-aware enemy behaviors that enhance player tension and unpredictability. Within this system, AI decision processes were driven by weighted scoring logic, allowing characters to evaluate multiple states and select appropriate actions based on real-time gameplay conditions. This approach ensured flexible and scalable behavior design across different gameplay scenarios. In addition to AI development, I was actively involved in the design and implementation of various Blueprint-driven puzzle mechanics. These systems were developed to support exploration and narrative progression, with a focus on modularity and ease of iteration. The overall development emphasized immersive atmosphere, responsive gameplay interactions, and robust system design, contributing to a polished multi-platform release experience.c difficulty systems in games like Left 4 Dead and Resident Evil. It monitors player metrics — accuracy, damage taken, resource usage, and pacing — to adjust encounter intensity in real time. The system controls enemy spawn rates, aggression levels, flanking behavior, and boss phase transitions to maintain optimal tension without overwhelming or boring the player.",
        techStack: ["Unreal Engine 5", "Blueprint", "Behavior Trees", "Environment Query System"],
        thumbnail: "/images/a2.png",
        heroImage: "/images/a2.png",
        developmentProcess:
            "The AI systems were developed using a Utility AI approach built on score-based decision-making. Enemy behaviors evaluate multiple gameplay factors through weighted scoring logic, allowing dynamic and context-aware action selection in real time. This structure enables flexible and scalable behavior design across different gameplay scenarios. I contributed to the design and implementation of these AI systems, focusing on creating responsive and believable enemy interactions that enhance tension in a horror-driven experience. In addition to AI development, I was involved in the implementation of Blueprint-based puzzle mechanics, supporting gameplay progression and environmental interaction systems. The development process emphasized maintainability, iteration speed, and integration with the overall gameplay experience.",
        challenges: [
            {
                title: "Balancing Difficulty Without Feeling Artificial",
                description:
                    "The core challenge was making difficulty adjustments feel organic. Instead of directly modifying enemy health or damage, the system adjusts behavioral parameters — reaction times, coordination between squads, and tactical decision quality — creating difficulty shifts that feel like smarter enemies rather than stat inflation.",
            },
            {
                title: "Performance at Scale",
                description:
                    "Running continuous telemetry analysis and EQS queries for 30+ AI agents required aggressive optimization. A tiered update system was implemented where distant enemies use simplified behavior profiles, and EQS queries are distributed across frames using a batched evaluation pipeline.",
            },
            {
                title: "Designer Authoring Tools",
                description:
                    "A custom Editor Utility Widget was built to visualize the Director's internal state — intensity curves, active modifiers, and per-agent behavior profiles — allowing designers to fine-tune the system's responsiveness and thresholds without code changes.",
            },
        ],
    },
    {
        slug: "era-of-newborns",
        title: "Era Of Newborns — UI Programming",
        shortDescription:
            "A large-scale multiplayer survival game set in a post-apocalyptic sci-fi world, featuring interconnected systems such as character progression, taming, trading, building, and resource management.",
        longDescription:
            "ERA OF NEWBORNS is a large-scale multiplayer survival game set in a post-apocalyptic sci-fi universe, developed with a focus on systemic gameplay and player-driven interaction. The game combines multiple interconnected systems including character progression, taming, trading, resource gathering, base building, and electrical systems, creating a layered and evolving gameplay experience. The world spans up to 100 km² and features nine distinct post-apocalyptic sci-fi environments, each designed to offer unique challenges and exploration opportunities. Additional gameplay systems such as loot mechanics, perks, and job-based progression further expand player choice and long-term engagement. The project emphasizes scalability, modular system design, and continuous content expansion, aiming to deliver a persistent and evolving multiplayer experience where players can interact, progress, and shape the world collaboratively.",
        techStack: ["Unreal Engine 4", "Blueprints"],
        thumbnail: "/images/a3.png",
        heroImage: "/images/a3.png",
        developmentProcess:
            "I was responsible for the multiplayer UI programming, focusing on designing and implementing user interfaces that interact seamlessly with networked gameplay systems. This included systems such as clan creation and management, real-time chat functionality, and health-related UI elements.",
        challenges: [
            {
                title: "Eliminating Blend Pops",
                description:
                    "Transitions between traversal states (sprint-to-vault, land-to-roll) required custom transition rules that evaluate velocity, trajectory, and animation pose distance to select optimal blend entry points, eliminating visual discontinuities.",
            },
            {
                title: "IK Ground Adaptation",
                description:
                    "Foot IK on uneven terrain needed to handle edge cases — stairs, slopes, ledges — without jittering. A multi-trace approach with smoothing interpolation and pelvis height adjustment was implemented to maintain stable foot contact across varied geometry.",
            },
            {
                title: "Performance Profiling",
                description:
                    "The full animation graph with IK, Control Rig, and Motion Matching was initially too expensive for scenes with multiple characters. A LOD system was implemented that reduces animation complexity based on camera distance and screen percentage, maintaining visual fidelity for on-screen characters while saving budget for distant ones.",
            },
        ],
    },
];
