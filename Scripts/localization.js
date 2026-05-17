const translations = {
    'en': {
        //Nav.
        'nav-home-title': 'Home',
        'nav-portfolio-title': 'Portfolio',
        'nav-cv-title': 'CV',
        'nav-home': 'Home',
        'nav-cv': 'Cv',
        'nav-portfolio': 'Portfolio',

        //Subnav titles
        'subnav-oct-title': 'OCT',
        'subnav-th-title': 'TH',
        'subnav-ctr-title': 'CTR',
        'subnav-eduzland-title': 'Eduzland',
        'subnav-tools-title': 'Tools',

        //Subnav
        'subnav-oct': 'OC: Tycoon',
        'subnav-th': 'Tiny Hunters',
        'subnav-ctr': 'Cut the Rope',
        'subnav-eduzland': 'eduZland',
        'subnav-tools': 'Tools',
        'subnav-pp': 'Personal projects',
        'subnav-cs': 'Case studies',

        //Generics
        'check-on-github': 'View on Github',
        'oct-contribution': 'My contribution',
        'th-contribution': 'My contribution',
        'ctr-contribution': 'My contribution',
        'eduzland-contribution': 'My contribution',
        'try-it-out-pc': 'Try it out! (Pc)',
        'try-it-out': 'Try it out! (Pc, mobile)',

        //Titles. 
        'index-title': 'Adrián DG. Game and application developer',
        'portfolio-title': 'Adrián DG. Portfolio',
        'case-studies-title': 'Adrián DG. Portfolio',
        'tools-title': 'Adrián DG. Portfolio',
        'oct-title': 'Adrián DG. Portfolio',
        'th-title': 'Adrián DG. Portfolio',
        'ctr-title': 'Adrián DG. Portfolio',
        'eduzland-title': 'Adrián DG. Portfolio',
        'cv-title': 'Adrián DG. CV',
        'botw-itch-title': 'Bread of the Wild itch.io link',

        //Hello.
        ‘hero-label’: ‘Unity Game Developer’,
        ‘hero-subtitle’: ‘Building scalable game systems for mobile and PC — from prototype to shipped product.’,
        ‘hi-i-am’: ‘Hi, I’m Adrián Durán’,
        
        //Intro.
        'intro-p1': 'Video games have been my greatest passion since childhood. Not only as entertainment, but also as a source of learning. This passion pushed me to explore how they are made and eventually become a game developer.',
        'intro-p2': 'I started with the first Play Station. After that, games such as the Dark Souls saga (including Sekiro), Lineage II, Final Fantasy X and Resident Evil: Requiem left a mark on me.',
        
        //Experience.
        'exp-p1': 'I have experience developing games for mobile and PC, from prototypes to production. I focus on building clean and scalable architectures using tools such as Zenject and VContainer, and on optimizing performance with techniques like object pooling and Addressables.',
        'exp-p2': 'I work with a strong sense of responsibility for what I build, paying attention to detail and maintaining clear communication with professionals from different disciplines. I adapt quickly, prioritize tasks efficiently, and collaborate closely with the team to solve complex problems and deliver solid solutions.',
        'exp-p3': 'My goal is to grow within a creative team, contribute strong technical foundations, and help create unique experiences that push boundaries.',
        
        //Kindness.
        'want-to-know-more': 'Want to know more?',
        'reach-out': 'I’m always open to conversations about my work, background, or collaborations. Feel free to reach out!',
        
        //CV.  
        'cv-img-alt': 'Curriculum Vitae',
        'cv-img-src': 'Imgs/CV_Eng.png',
        
        //Astra.
        'astra-desc1': 'This project is an attempt to tackle the challenge of building a highly ambitious game from scratch.',
        'astra-desc2': 'It uses Zenject as our dependency injection framework. Unity Analytics has also been integrated to evaluate player behavior, helping guide future development decisions based on real gameplay data.',
        'astra-desc3': 'The damage system was carefully designed to allow detailed control over the properties of each attack, such as damage value or whether it can be countered and more. This makes combat highly customizable.',
        'astra-desc4': 'For persistence, we implemented a save system based on encrypted JSON files, making it easier for developers to add and manage saved data securely and consistently.',
        
        //Bread of the wild.
        'botw-desc1': 'In Bread of the Wild you help Bro progress in his ninja training by delivering loaves of bread to a mysterious recipient through a series of platforming levels filled with obstacles and challenges. Inspired by games such as "Celeste", "Super Meat Boy", and "I Wanna Be the Guy", this game focuses on precise controls and tight, rewarding gameplay.',
        'botw-desc2': 'Beyond the core movement mechanics, the game features a variety of interactive objects that enhance the experience. These were designed to be easily scalable, allowing rapid creation of new levels and gameplay elements.',
        'botw-desc3': 'ScriptableObjects played a key role in building the project. They were used in the audio, interaction, and level systems, contributing to a more efficient and modular architecture.',
        
        //Don't get any closer.
        'dgac-itch-title': 'Don\'t Get Any Closer itch.io link',
        'dgac-desc1': 'GameJam project that challenges players to prevent skeletons from reaching the castle gates by quickly pressing the inputs displayed above their heads. One of the main constraints was that the match could not exceed 20 seconds, which pushed us to design a fast and engaging experience that delivers immediate tension and reward.',
        'dgac-desc2': 'During the project, I also had the opportunity to mentor a junior developer. I’m proud of how much they grew during the process and of the project we managed to create.',
        
        //Geometric wars.
        'gw-desc1': 'With this project I wanted to dive into developing a game from the conception of the idea all the way to publishing it on a store.',
        'gw-desc2': 'The player controls a ship tasked with defending their planet from an attack. I focused on creating quick matches, aiming for a gameplay loop that feels tight and satisfying. I chose to publish it on Android to make it more accessible and reach a wider audience.',
        'gw-desc3': 'I’m especially proud of the enemy behavior system. It was designed in a way that allows me to easily create new enemies.',
        
        //Guys that run.
        'gtr-desc1': 'Two players compete in a battle to be the last one standing. While running, they must use their blasters to disrupt the other player and claim victory.',
        'gtr-desc2': 'It won the Best Game award thanks to strong teamwork, which made it possible to deliver a complete and polished experience.',
        
        //High five.
        'hf-desc1': 'Two players must fight to be the last one standing on the platform. There are two characters available to use in order to make the other player fall off the platform. The game includes several power-ups, and players must also pay attention to their surroundings, as the environment will disappear over time.',
        'hf-desc2': 'This game was developed during a GameJam. High Five received the awards for best game and art direction. The game was developed by a team of six people',
        
        //Pokémon team visualizer.
        'pkmn-desc1': 'I created this tool to solve a common problem among Pokémon streamers: displaying their team overlay in OBS. The tool was built using Python.',
        'pkmn-desc2': 'Manually configuring the layout in OBS was time-consuming and fragile, since any small adjustment could break the layout. With this tool I was able to make the process faster and more reliable.',
        
        //Case studies.
        'case-studies-desc1': 'Projects developed as tests for companies. They focus on maintaining a simple architecture, scalability, and production-ready standards.',
        'case-studies-desc2': 'Each one follows a modular structure using VContainer for dependency injection, Addressables, and object pooling. Some of them also integrate audio and vibration systems.',

        //Tools.
        'tools-h1': 'Tools',
        'tools-op-h2': 'Object Pool',
        'tools-op-p1': 'Streamlines object instantiation and management through Unity’s built-in object pooling system. It allows developers to configure efficient pooling with minimal setup.',
        'tools-cst-h2': 'Code Snippet Timer',
        'tools-cst-p1': 'Measures the execution time of code snippets, allowing small performance tests for features added through code.',
        'tools-t-h2': 'Tickets',
        'tools-t-p1': 'Allows managing behaviors while ensuring better control over game states, for example preventing the game from resuming if there are still active pause tickets. This helps coordinate multiple systems depending on the state of the game components.',
        'tools-l-h2': 'Logger',
        'tools-l-p1': 'Allows displaying console messages while applying small customization for each class that uses it.',
        'tools-esl-h2': 'Editor Scene Loader',
        'tools-esl-p1': 'Allows switching scenes quickly and smoothly directly from a custom menu in the Unity editor.',
        
        //Overcrowded tycoon.
        'oct-desc': 'I was responsible for implementing several gameplay features, such as the bigshows: attractions that allowed players to obtain additional rewards. I also handled the analytics related to the features I implemented and their tutorials',
        
        //Tiny hunters.
        'th-desc1': 'I was responsible for implementing several features that improved the gameplay experience, such as a campaign or roadmap system for the hunters. I also implemented analytics, enabling data-driven decisions based on player behavior.',
        'th-desc2': 'I participated in building and optimizing some gameplay systems, for example the logic behind new characters and their abilities, as well as the implementation of missions for them and different game modes. I worked in collaboration with the design team to ensure their integration into the gameplay loop.',
        'th-desc3': 'One of the features I implemented was a mission system so players could level up hunters and unlock new possibilities with them.',
        
        //Cut the rope
        'ctr-desc': 'We focused on prototyping different types of gameplay, general system improvements, project porting, and data migration. I contributed to refining existing mechanics, optimizing system performance, and ensuring smooth transitions between versions and platforms.',
        
        //EduzZland
        'eduzland-desc1': 'As part of the ongoing development of the game, I designed and implemented a variety of minigames and interactive activities to provide players with a richer and more dynamic experience.',
        'eduzland-desc2': 'In parallel, I conducted a thorough performance audit and optimized key systems within the codebase, resulting in noticeable improvements in loading times, frame rate stability, and overall responsiveness.',
    },
    'es': {
        //Nav.
        'nav-home-title': 'Inicio',
        'nav-portfolio-title': 'Portfolio',
        'nav-cv-title': 'CV',
        'nav-home': 'Inicio',
        'nav-cv': 'Cv',
        'nav-portfolio': 'Portfolio',

        //Subnav titles
        'subnav-oct-title': 'OCT',
        'subnav-th-title': 'TH',
        'subnav-ctr-title': 'CTR',
        'subnav-eduzland-title': 'Eduzland',
        'subnav-tools-title': 'Herramientas',

        //Subnav
        'subnav-oct': 'OC: Tycoon',
        'subnav-th': 'Tiny Hunters',
        'subnav-ctr': 'Cut the Rope',
        'subnav-eduzland': 'eduZland',
        'subnav-tools': 'Herramientas',
        'subnav-pp': 'Proyectos personales',
        'subnav-cs': 'Pruebas',

        //Generics
        'check-on-github': 'Ver en Github',
        'oct-contribution': 'Mi contribución',
        'th-contribution': 'Mi contribución',
        'ctr-contribution': 'Mi contribución',
        'eduzland-contribution': 'Mi contribución',
        'try-it-out-pc': '¡Pruébalo! (Pc)',
        'try-it-out': '¡Pruébalo! (Pc, móvil)',

        //Titles. 
        'index-title': 'Adrián DG. Desarrollador de videojuegos y aplicaciones',
        'portfolio-title': 'Adrián DG. Portfolio',
        'case-studies-title': 'Adrián DG. Portfolio',
        'tools-title': 'Adrián DG. Portfolio',
        'oct-title': 'Adrián DG. Portfolio',
        'th-title': 'Adrián DG. Portfolio',
        'ctr-title': 'Adrián DG. Portfolio',
        'eduzland-title': 'Adrián DG. Portfolio',
        'cv-title': 'Adrián DG. CV',
        'botw-itch-title': 'Enlace de itch.io de Bread of the wild',

        //Hello.
        'hero-label': 'Desarrollador Unity',
        'hero-subtitle': 'Construyendo sistemas de juego escalables para móvil y PC — del prototipo al producto lanzado.',
        'hi-i-am': 'Hola, soy Adrián Durán',
        
        //Intro.
        'intro-p1': 'Los videojuegos han sido mi mayor pasión desde la infancia. No solo como entretenimiento, sino también como fuente de aprendizaje. Esta pasión me impulsó a explorar cómo se hacen y, finalmente, a convertirme en desarrollador de videojuegos.',
        'intro-p2': 'Comencé con la Play Station 1. Después de eso, juegos como la saga Dark Souls (incluyendo Sekiro), Lineage II, Final Fantasy X y Resident Evil: Requiem dejaron huella en mi.',
        
        //Experience.
        'exp-p1': 'Tengo experiencia desarrollando juegos para móvil y PC, desde prototipos hasta producción. Me centro en crear arquitecturas limpias y escalables utilizando herramientas como Zenject y VContainer, y en optimizar el rendimiento con técnicas como object pooling y Addressables.',
        'exp-p2': 'Trabajo con un fuerte sentido de responsabilidad sobre lo que construyo, prestando atención al detalle y manteniendo una comunicación clara con perfiles de distintas disciplinas. Me adapto con rapidez, priorizo tareas de forma eficiente y colaboro estrechamente con el equipo para resolver problemas complejos y entregar soluciones sólidas.',
        'exp-p3': 'Mi objetivo es crecer dentro de un equipo creativo, aportar bases técnicas robustas y contribuir a crear experiencias únicas que superen los límites.',
        
        //Kindness.
        'want-to-know-more': '¿Quieres saber más?',
        'reach-out': 'Siempre estoy abierto a conversaciones sobre mi trabajo, trayectoria o colaboraciones. ¡No dudes en contactarme!',
        
        //CV.  
        'cv-img-alt': 'Currículum Vitae',
        'cv-img-src': 'Imgs/CV_ES.png',
        
        //Astra.
        'astra-desc1': 'Este proyecto es un intento de abordar el desafío de construir un juego altamente ambicioso desde cero.',
        'astra-desc2': 'Usa Zenject como framework de inyección de dependencias. También se ha integrado Unity Analytics para evaluar el comportamiento del jugador, ayudando a guiar futuras decisiones de desarrollo basadas en datos reales de juego.',
        'astra-desc3': 'El sistema de daño fue cuidadosamente diseñado para permitir un control detallado sobre las propiedades de cada ataque, como el valor del daño o si se puede contraatacar y más. Esto hace que el combate sea muy personalizable.',
        'astra-desc4': 'Para la persistencia, hemos implementado un sistema de guardado basado en archivos JSON encriptados, lo que facilita a los desarrolladores agregar y gestionar datos guardados de forma segura y consistente.',
        
        //Bread of the wild.
        'botw-desc1': 'En Bread of the Wild ayudas a Bro a avanzar en su entrenamiento ninja entregando hogazas de pan a un destinatario misterioso a través de una serie de niveles de plataformas llenos de obstáculos y desafíos. Inspirado en juegos como "Celeste", "Super Meat Boy" y "I Wanna Be the Guy", este juego se centra en controles precisos y una jugabilidad ajustada y gratificante.',
        'botw-desc2': 'Más allá de las mecánicas principales de movimiento, el juego cuenta con una variedad de objetos interactivos que mejoran la experiencia. Estos fueron diseñados para ser fácilmente escalables, lo que permite la creación rápida de nuevos niveles y elementos de juego.',
        'botw-desc3': 'Los ScriptableObjects jugaron un papel clave en la construcción del proyecto. Se utilizaron en los sistemas de audio, interacción y niveles, contribuyendo a una arquitectura más eficiente y modular.',
        
        //Don't get any closer.
        'dgac-itch-title': 'Enlace de itch.io de Don\'t Get Any Closer',
        'dgac-desc1': 'Proyecto de GameJam que desafía a los jugadores a evitar que los esqueletos lleguen a las puertas del castillo, tocando rápidamente los inputs que se muestran sobre sus cabezas. Una de las principales restricciones fue que la partida no podía exceder los 20 segundos, lo que nos impulsó a diseñar una experiencia rápida y atractiva que ofrece tensión y recompensa inmediatas.',
        'dgac-desc2': 'Durante el proyecto, también tuve la oportunidad de mentorizar a un desarrollador junior. Estoy orgulloso de cuánto creció durante el proceso y del proyecto que conseguimos crear.',
        
        //Geometric wars.
        'gw-desc1': 'Con este proyecto quise sumergirme en el desarrollo de un juego desde la concepción de la idea hasta la publicación en una store.',
        'gw-desc2': 'El jugador controla una nave encargada de defender su planeta de un ataque. Me centré en crear partidas rápidas, buscando un bucle de juego que se sintiera ajustado y satisfactorio. Elegí publicarlo en Android para que fuera más accesible y llegara a una audiencia más amplia.',
        'gw-desc3': 'Estoy especialmente orgulloso del sistema de comportamiento de los enemigos. Fue diseñado de manera que me permite crear nuevos enemigos de manera sencilla.',

        //Guys that run.
        'gtr-desc1': 'Dos jugadores compiten en una batalla para ser el último en pie. Mientras corren, deben usar sus blásters para fastidiar al otro jugador y declararse vencedor.',
        'gtr-desc2': 'Ganó el premio al Mejor Juego gracias al sólido trabajo en equipo, que hizo posible ofrecer una experiencia completa y pulida.',
        
        //High five.
        'hf-desc1': 'Dos jugadores tienen que luchar para ser el último en pie sobre la plataforma. Hay dos personajes disponibles para usar con el fin de hacer que el otro jugador se caiga de la plataforma. El juego incluye varios potenciadores y los jugadores también tendrán que prestar atención a su entorno, ya que irá desapareciendo a medida que pase el tiempo.',
        'hf-desc2': 'Este juego fue desarrollado durante una GameJam. High Five recibió el premio al mejor juego y dirección de arte. El juego fue desarrollado por un equipo de seis personas',
        
        //Pokémon team visualizer.
        'pkmn-desc1': 'Creé esta herramienta para solucionar un problema común entre streamers de pokémon: mostrar el overlay de su equipo en OBS. La herramienta fue construida usando Python.',
        'pkmn-desc2': 'Configurar manualmente el diseño en OBS consumía tiempo y era frágil, ya que cualquier pequeño ajuste podían romper el layout. Gracias a esta herramienta pude hacer que el proceso fuera más rápido y fiable.',
        
        //Case studies.
        'case-studies-desc1': 'Proyectos desarrollados como pruebas para empresas. Se centran en mantener una arquitectura simple, escalabilidad y estándares listos para producción.',
        'case-studies-desc2': 'Cada uno sigue una estructura modular utilizando VContainer para la inyección de dependencias, addressables y object pooling. En algunos de ellos también se han integrado sistemas de audio y vibración.',

        //Tools.
        'tools-h1': 'Herramientas',
        'tools-op-h2': 'Pool de objetos',
        'tools-op-p1': 'Agiliza la instanciación y gestión de objetos a través del sistema de pool de objetos integrado de Unity. Permite a los desarrolladores configurar un pooling eficiente con una configuración mínima.',
        'tools-cst-h2': 'Code Snippet Timer',
        'tools-cst-p1': 'Mide el tiempo de ejecución de fragmentos de código, así podemos realizar pequeñas pruebas de rendimiento para las funcionalidades que añadimos a través del código.',
        'tools-t-h2': 'Tickets',
        'tools-t-p1': 'Permite gestionar comportamientos asegurando un mejor control sobre los estados del juego, por ejemplo, evitando que el juego se reanude si todavía hay tickets de pausa activos. Esto ayuda a coordinar múltiples sistemas dependiendo del estamos de los componentes del juego.',
        'tools-l-h2': 'Logger',
        'tools-l-p1': 'Permite mostrar mensajes por consola permitiendo aplicar una pequeña personalización para cada clase que lo utiliza.',
        'tools-esl-h2': 'Cargador de escenas en editor',
        'tools-esl-p1': 'Permite cambiar de escena de forma rápida y fluida directamente desde un menú personalizado en el editor de Unity.',
        
        //Overcrowded tycoon.
        'oct-desc': 'Fui responsable de implementar varias features de gameplay, como los bigshows: unas atracciones que permitían a los jugadores adquirir recompensas adicionales. También me encargué de gestionar las analytics relativas a las funciones que implementé y sus tutoriales',
        
        //Tiny hunters.
        'th-desc1': 'Fui responsable de implementar varias características que mejoraron la experiencia de juego, como un sistema de campañas o roadmaps para los cazadores. También implementé analytics, permitiendo la toma de decisiones basada en datos de los jugadores.',
        'th-desc2': 'Participé en la construcción y optimización de algunos sistemas de juego, por ejemplo, la lógica detrás de nuevos personajes y sus habilidades, así como la implementación de misiones para ellos, y distintos modos de juego. Trabajé en colaboración con el equipo de diseño para asegurar su integración dentro del bucle de juego.',
        'th-desc3': 'Una de las características que implementé fue un sistema de misiones para que los jugadores pudieran subir de nivel a los cazadores y así desbloquear nuevas posibilidades con ellos.',
        
        //Cut the rope
        'ctr-desc': 'Nos centramos en el prototipado de distintos tipos de gameplay, mejoras del sistema generales, port del proyecto y migración de datos. Contribuí a refinar las mecánicas existentes, optimizar el rendimiento de los sistemas y asegurar transiciones fluidas entre versiones y plataformas.',
        
        //EduzZland
        'eduzland-desc1': 'Como parte del desarrollo continuo del juego, diseñé e implementé una variedad de minigames y actividades interactivas para proporcionar a los jugadores una experiencia más rica y dinámica.',
        'eduzland-desc2': 'En paralelo, realicé una auditoría exhaustiva del rendimiento y optimicé sistemas clave dentro de la base de código, lo que resultó en mejoras notables en los tiempos de carga, la estabilidad de la tasa de fotogramas y la capacidad de respuesta general.',
    }
};

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    applyTranslations(lang);
}

function applyTranslations(lang) {
    const elements = document.querySelectorAll('[data-i18n], [data-i18n-title], [data-i18n-src]');
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (key && translations[lang] && translations[lang][key]) {
            if (element.tagName === 'IMG') {
                element.alt = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }

        // Handle src attribute translation
        const srcKey = element.getAttribute('data-i18n-src');
        if (translations[lang] && srcKey && translations[lang][srcKey]) {
            element.setAttribute('src', translations[lang][srcKey]);
        }

        // Handle title attribute translation
        const titleKey = element.getAttribute('data-i18n-title') || (key ? (key + '-title') : null);
        if (translations[lang] && titleKey && translations[lang][titleKey]) {
            element.setAttribute('title', translations[lang][titleKey]);
        }
    });

    const titleElement = document.querySelector('title');
    if (titleElement) {
        const titleKey = titleElement.getAttribute('data-i18n');
        if (titleKey && translations[lang][titleKey]) {
            document.title = translations[lang][titleKey];
        }
    }

    document.documentElement.lang = lang;

    // Update active state of language buttons
    const langButtons = document.querySelectorAll('.lang-switcher button[data-lang]');
    langButtons.forEach(button => {
        if (button.getAttribute('data-lang') === lang) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    applyTranslations(savedLang);
});

// Expose setLanguage to window
window.setLanguage = setLanguage;
window.applyTranslations = applyTranslations;
