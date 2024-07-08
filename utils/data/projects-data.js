import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Online BookStore Managment System',
        description: "Designed a comprehensive backend system for an online bookstore using Node.js, Express, MySQL, Passport.js, Express Sessions, Winston, Bcrypt, Salt, Passport-Local, and Sequelize. This system implements robust Role-Based Access Control (RBAC) to ensure users have specific roles and permissions, enhancing security and efficiency. Key features include secure user registration and login APIs, an upload API for book details with thorough validation, user management capabilities for modifying or deleting users and their uploads, and extensive audit and monitoring using Winston. This RBAC system offers scalable, maintainable, and secure management of bookstore operations, showcasing innovation and creativity in software engineering",
        tools: ["Gmail Passkey", "Passport.js" ,"Express .js" , "Node.js" ,"Bcrypt" ,"Salt"],
        role: 'Backend Developer',
        code: '',
        demo: '',
        image: crefin,
    },
    {
        id: 2,
        name: 'Realtime Simple Chat App',
        description: 'Developed a Realtime Simple Chat App using Socket.io, featuring real-time messaging with minimal latency and reliable bidirectional communication. The app boasts a simple and intuitive interface, secure end-to-end encrypted conversations, and customizable settings, enhancing user experience and fostering efficient collaboration and connectivity',
        tools: ['Express' ,'Socket.io' , 'Node.js' , 'Next.js'],
        role: 'Full Stack Developer',
        code: '',
        demo: '',
        image: travel,
    },
    {
        id: 3,
        name: 'AI Powered Real Estate',
        description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
        tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
        code: '',
        role: 'Full Stack Developer',
        demo: '',
        image: realEstate,
    },
    {
        id: 4,
        name: 'Auction platform',
        description: "Developed a robust backend system for an auction platform using Node.js, Express, and MySQL, featuring secure user registration and login APIs, JWT authentication for user sessions, and a product addition API to streamline the auction process. The system also includes certificate management with Multer, password reset functionality via Nodemailer, and auction management APIs to start auctions and check their status. This project showcases my commitment to creating secure, efficient, and user-friendly solutions, enhancing the overall auction experience",
        tools: ['NextJS', 'Tailwind', "Express.js" ,"Node.js" , "JSON Web Token" ,"MySQL", "Multer" ,"Nodemailer","API" ],
        code: '',
        demo: '',
        image: ayla,
        role: 'Backend  Developer',
    }
   
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },