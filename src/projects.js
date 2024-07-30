
const projects = {
    'vocaplace' : {
        title: 'VocaPlace',
        icon: "fas fa-book-open",
        date: "October 2023 - June 2024",
        about:
            <div id="about">
                <p><span className="bold">VocaPlace</span> is a dynamic web application designed to facilitate English learning and foster a collaborative community environment. Drawing inspiration from popular platforms such as Memrise and Duolingo, the app offers users an immersive and engaging learning experience.</p>
                <br />
                <p>This full-stack application was developed as a collaborative effort by a three-person team, with a primary focus on utilizing <span className="color bold">React.js</span> for its front-end architecture and seamlessly integrating it with <span className="color bold">Node.js</span> and <span className="color bold">PostgreSQL</span> back-end.</p>
            </div>,
        features: 
            <div id="features">
                <ul>
                    <li>Creating an account and logging in
                        <ul>
                            <li>Signing in using social media (Google, GitHub)</li>
                            <li>User roles</li>
                        </ul>
                    </li>
                    <li>Solving quizes of varying difficulty and types
                        <ul>
                            <li>Learning progress displayed as percentage completed</li>
                            <li>Gaining points for correct answers</li>
                            <li>Streak system</li>
                        </ul>
                    </li>
                    <li>Reviewing previous mistakes</li>
                    <li>Adding users to friends</li>
                    <ul>Creating and joining groups
                        <li>Group ranking and chat</li>
                    </ul>
                    <li>Global ranking of points and streak</li>
                    <ul>Admin panel
                        <li>Creating and managing units, topics and questions</li>
                        <li>Managing users and groups</li>
                    </ul>
                    <li>Notifications about friend and group requests</li>
                    <li>Search tool for users and groups</li>
                </ul>
            </div>,
        tech:
            <div id="tech">
                <ul>
                    <li>Front-end - React.js + SCSS</li>
                    <li>Back-end - NodeJS
                        <ul>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                        </ul>
                    </li>
                    <li>Database - PostgreSQL 16</li>
                    <li>Authorization - Keycloak 18.0.2</li>
                    <li>Containerization - Docker</li>
                </ul>
            </div>,
        logo: "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/logo.png?raw=true",
        images: [
            "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/home.png?raw=true",
            "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/questions.png?raw=true",
            "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/topics.png?raw=true",
            "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/groups.png?raw=true",
            "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/ranking.png?raw=true",
            "https://github.com/oworob/ug-react-english-learning-app/blob/main/screenshots/admin.png?raw=true"
        ],
    },


    'wings-of-fire': {
        title: 'Wings of Fire Roblox Video Game',
        icon: "fas fa-dragon",
        date: "September 2019 - ongoing",
        roblox: 'https://www.roblox.com/games/3618661625/Wings-of-Fire-Early-Access',
        logo: 'https://github.com/oworob/roblox-screenshots/blob/main/wings-of-fire/wof-logo.png?raw=true',
        about:
            <div id="about">
                <p><span className="bold">Wings of Fire</span> is a series of fantasy novels by Tui. T. Sutherland, taking place on the two fictional, dragon-inhabited continents of Pyrrhia and Pantala. Each novel takes the reader on a thrilling adventure of various twists and turns, following a lovable cast of characters. </p>
                <br />
                <p>The game is a loose adaptation of the books developed by a small team on <span className="color bold">Roblox</span> over the last couple of years, that allows players to create their characters, complete quests, decorate houses and roleplay in the world of dragons.</p>
            </div>,
        features:
            <div id="features">
                <ul>
                    <li>Character customization
                        <ul>
                            <li>8+ races to choose from</li>
                            <li>Accessories unlocking and customization</li>
                            <li>Multiple characters slots</li>
                            <li>Paint tool</li>
                        </ul>
                    </li>
                    <li>Animations
                        <ul>
                            <li>70+ detailed animation per model</li>
                            <li>Emotes, actions and movement cycles, including walking, flying and swimming</li>
                        </ul>
                    </li>
                    <li>In-game currency
                        <ul>
                            <li>Acquiring currency by playing mini-games</li>
                            <li>Purchasing house equipment and furniture</li>
                        </ul>
                    </li>
                    <li>Housing system
                        <ul>
                            <li>Claiming houses</li>
                            <li>Decorating houses with purchased items</li>
                        </ul>
                    </li>
                    <li>Quest system
                        <ul>
                            <li>Acquiring character accessories by completing in-game quests</li>
                        </ul>
                    </li>
                    <li>Weather system and day/night cycle
                        <ul>
                            <li>Rain, fog, snow and sandstorms</li>
                            <li>Detailed lighting</li>
                        </ul>
                    </li>
                    <li>Game maps
                        <ul>
                            <li>Vast, detailed and optimized maps for players to explore</li>
                            <li>Varying weather and climate</li>
                        </ul>
                    </li>
                </ul>
            </div>,
        tech:
            <div id="tech">
                <ul>
                    <li>Engine - Roblox</li>
                    <li>User Interface
                        <ul>
                            <li>Roblox Studio</li>
                            <li>Adobe Photoshop</li>
                        </ul>
                    </li>
                    <li>Programming - Luau</li>
                    <li>3D Models - Blender</li>
                    <li>Rigging
                        <ul>
                            <li>Roblox Rig Editor</li>
                            <li>Blender</li>
                        </ul>
                    </li>
                    <li>3D Animations - Roblox Animation Editor</li>
                    <li>Data Storage - Roblox DataStoreService</li>
                </ul>
            </div>,
        images: [
            "https://github.com/oworob/roblox-screenshots/blob/main/wings-of-fire/menu.png?raw=true",
            "https://github.com/oworob/roblox-screenshots/blob/main/wings-of-fire/customization.png?raw=true",
            "https://github.com/oworob/roblox-screenshots/blob/main/wings-of-fire/duel.png?raw=true",
            "https://github.com/oworob/roblox-screenshots/blob/main/wings-of-fire/housing.png?raw=true",
            "https://github.com/oworob/roblox-screenshots/blob/main/wings-of-fire/blender.png?raw=true"

        ],
    },


    'twitter': {
        title: 'Twitter',
        icon: "fab fa-twitter",
        date: "December 2023 - February 2024",
        logo: "https://github.com/oworob/ug-twitter-vue/blob/main/client/public/logo.png?raw=true",
        about:
            <div id="about">
                <p><span className="bold">Twitter</span> is a social media platform that allows users to share short messages. It serves as a real-time microblogging platform where users can post updates, thoughts, news, and engage in conversations with others and is used by millions of users across the world.</p>
                <br />
                <p>This project, also called 'Y' is a full-stack application with the goal to recreate a simple version of the platform. It was written with the aim to learn <span className="color bold">Vue.js</span> and <span className="color bold">Socket.io</span>.</p>
            </div>,
        features:
            <div id="features">
                <ul>
                    <li>Creating an account and logging in
                        <ul>
                            <li>No access without account</li>
                        </ul>
                    </li>
                    <li>Submitting, replying to and deleting posts</li>
                    <li>Post pagination</li>
                    <li>Profile customization, including profile picture and a short bio</li>
                    <li>Following users
                        <ul>
                            <li>Only posts from followed users are listed</li>
                        </ul>
                    </li>
                    <li>Notification system for new posts from folllowed users</li>
                    <li>Search tool for users and posts</li>
                </ul>
            </div>,
        tech:
            <div id="tech">
                <ul>
                    <li>Front-end - Vue.js + SCSS</li>
                    <li>Back-end - NodeJS
                        <ul>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                            <li>Passport.js</li>
                        </ul>
                    </li>
                    <li>Database - Neo4j</li>
                    <li>Containerization - Docker</li>
                </ul>
            </div>,
        images: [
            "https://github.com/oworob/ug-twitter-vue/blob/main/screenshots/home.png?raw=true",
            "https://github.com/oworob/ug-twitter-vue/blob/main/screenshots/post.png?raw=true",
            "https://github.com/oworob/ug-twitter-vue/blob/main/screenshots/profile.png?raw=true",
            "https://github.com/oworob/ug-twitter-vue/blob/main/screenshots/login.png?raw=true",
            "https://github.com/oworob/ug-twitter-vue/blob/main/screenshots/search.png?raw=true"
        ],
        github: "https://github.com/oworob/ug-twitter-vue"
    },


    'restaurant-orders': {
        title: 'Restaurant Orders',
        icon: "fas fa-burger",
        date: "December 2023",
        about:
            <div id="about">
                <p>Create your perfect order - choose your favorite dishes and customize them with a variety of extras.</p>
                <br/>
                <p>This project is a small application written in <span className="color bold">Spring Boot</span> using <span className="bold color">Thymeleaf</span> that allows users to place orders in a fictional restaurant. The menu consisting of multiple meals with a list of available extras is imported using beans.</p>
            </div>,
        features:
            <div id="features">
                <ul>
                    <li>Creating orders
                        <ul>
                            <li>Adding meals from selection</li>
                            <li>Customization of each meal by adding one or more of available extras</li>
                        </ul>
                    </li>
                    <li>Admin panel
                        <ul>
                            <li>Meal manager that allows the user to manage meals by changing their price, name and category</li>
                            <li>Managing meals and updating statuses</li>
                            <li>Order summary from the current month</li>
                        </ul>
                    </li>
                </ul>
            </div>,
        tech:
            <div id="tech">
                <ul>
                    <li>Front-end - Thymeleaf</li>
                    <li>Back-end - Java Spring Boot</li>
                    <li>Database - MongoDB</li>
                    <li>Containerization - Docker</li>
                </ul>
            </div>,
        images: [
            "https://github.com/oworob/ug-restaurant-springboot/blob/main/screenshots/home.png?raw=true",
            "https://github.com/oworob/ug-restaurant-springboot/blob/main/screenshots/order.png?raw=true",
            "https://github.com/oworob/ug-restaurant-springboot/blob/main/screenshots/meals.png?raw=true",
            "https://github.com/oworob/ug-restaurant-springboot/blob/main/screenshots/extras.png?raw=true",
            "https://github.com/oworob/ug-restaurant-springboot/blob/main/screenshots/summary.png?raw=true",
            "https://github.com/oworob/ug-restaurant-springboot/blob/main/screenshots/admin.png?raw=true",
        ],
        github: "https://github.com/oworob/ug-restaurant-springboot"
    },


    'deviantart': {
        title: 'DeviantArt',
        icon: "fab fa-deviantart",
        date: "November 2022 - January 2023",
        about:
            <div id="about">
                <p><span className="bold">DeviantArt</span> is an online platform and community that serves as a showcase for artists of various mediums, including visual arts, photography, literature, and digital creations. It provides a space for artists to exhibit their work, connect with other creatives, and receive feedback from a global audience.</p>
                <br />
                <p>This project is a full-stack application aimed at recreating the platform from scratch. It was undertaken with the goal of learning technologies like <span className="color bold">React.js</span>, <span className="color bold">Express</span>, <span className="color bold">Neo4j</span>, <span className="color bold">Keycloak</span>, and <span className="color bold">Docker</span>.</p>
            </div>,
        features:
            <div id="features">
                <ul>
                    <li>Creating an account and logging in
                        <ul>
                            <li>User roles</li>
                        </ul>
                    </li>
                    <li>Submitting and managing images, including description and tags</li>
                    <li>Adding images to favourites</li>
                    <li>Posting comments under images</li>
                    <li>User profile customization, including profile picture, background picture and a short bio</li>
                    <li>Browsing featured images
                        <ul>
                            <li>Top favourited and top commented images</li>
                        </ul>
                    </li>
                    <li>Search tool for users and images</li>
                    <li>Randomized facts about art</li>
                </ul>
            </div>,
        tech:
            <div id="tech">
                <ul>
                    <li>Front-end - React.js + SCSS</li>
                    <li>Back-end - NodeJS
                        <ul>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                        </ul>
                    </li>
                    <li>Database - Neo4j</li>
                    <li>Authorization - Keycloak 18.0.2</li>
                    <li>Containerization - Docker</li>
                </ul>
            </div>,
        images: [
            "https://github.com/oworob/ug-deviantart-react/blob/main/screenshots/home.png?raw=true",
            "https://github.com/oworob/ug-deviantart-react/blob/main/screenshots/imagepage.png?raw=true",
            "https://github.com/oworob/ug-deviantart-react/blob/main/screenshots/edit.png?raw=true",
            "https://github.com/oworob/ug-deviantart-react/blob/main/screenshots/search.png?raw=true",
            "https://github.com/oworob/ug-deviantart-react/blob/main/screenshots/database.png?raw=true"
        ],
        // github: "https://github.com/oworob/ug-deviantart-react"
    },
}

export default projects