import ecom from "../assets/projects/ecom.png";
import books from "../assets/projects/books.png";
import brain from "../assets/projects/brain.png";
import driving from "../assets/projects/driving.png";
import pics from "../assets/projects/pics.png";
import text from "../assets/projects/text.png";

export const ProjectList = [
  {
    id: 1,
    name: "E-Commerce",
    description:
      "This project encompasses a fully functional online store with features like product listings, user authentication, shopping cart, and secure payment processing. The front-end is built using React, while the back-end is powered by Node.js and Express.js, with data storage in MongoDB. The implementation includes state management with Redux.",
    img: ecom,
    //max 6 tech stack
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
    source: "https://github.com/nomishpriv/codsoft-ecom",
    demo: "https://nomishpriv.github.io/codsoft-ecom/",
  },
  {
    id: 2,
    name: "Add Books",
    description:
      "This project showcases the use of state management to add, update, and delete books. It offers a simple and intuitive user interface, making it easy for users to interact with the application. The project's primary focus is on demonstrating the utilization of state in React to create a dynamic and responsive frontend. Users can effortlessly add, modify, or remove books, much like a basic to-do app.",
    img: books,
    //max 6 tech stack
    tech: ["React"],
    source: "https://github.com/nomishpriv/books-v1",
    demo: "https://nomishpriv.github.io/books-v1/",
  },
  {
    id: 3,
    name: "Picture",
    description:
      "This project allows users to search for images and then displays the results in an aesthetically pleasing manner. It emphasizes a user-friendly interface that provides a seamless experience when searching for images. This project demonstrates my ability to design and implement an attractive frontend, as well as integrate search functionality, resulting in a practical and visually pleasing web application.",
    img: pics,
    //max 6 tech stack
    tech: ["React.js"],
    source: "https://github.com/nomishpriv/pics",
    demo: "https://nomishpriv.github.io/pics/",
  },
  {
    id: 4,
    name: "Xpert Driving School",
    description:
      "his project showcases my proficiency in creating engaging and user-friendly web interfaces. It focuses on delivering an impactful first impression to clients and visitors, with a strong emphasis on aesthetic appeal and intuitive navigation.",
    img: driving,
    //max 6 tech stack
    tech: ["React"],
    source: "https://github.com/nomishpriv/xpert-app",
    demo: "https://xpertdrivingschool.netlify.app/",
  },
  {
    id: 5,
    name: "Smart Brain App",
    description:
      "This app reflects my comprehensive skills in front-end and back-end development, offering a seamless and secure login experience. The integration of image face recognition APIs adds an innovative layer to the application, showcasing my expertise in leveraging external technologies to enhance user experiences. The Smart Brain app is a testament to my commitment to creating cutting-edge solutions.",
    img: brain,
    //max 6 tech stack
    tech: ["React", "Tachyons", "Node", "Express"],
    source: "https://github.com/nomishpriv/smart-brain",
    demo: "https://nomishpriv.github.io/smart-brain/",
  },
  {
    id: 6,
    name: "Text Changer",
    description:
      "I've created a versatile changer app equipped with a range of functions and an aesthetically pleasing user interface built with Bootstrap. This project highlights my proficiency in front-end development, as I've incorporated user-friendly features that simplify various tasks. The app's modern design and seamless functionality underscore my commitment to crafting effective and visually appealing software solutions.",
    img: text,
    //max 6 tech stack
    tech: ["React", "Bootstrap"],
    source: "https://github.com/nomishpriv/TextChanger",
    demo: "https://nomishpriv.github.io/TextChanger/",
  },
];
