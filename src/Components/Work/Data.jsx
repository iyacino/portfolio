import Work1 from '../../Assets/work1.png';
import Work2 from '../../Assets/work2.png';
import Work3 from '../../Assets/work3.png';
import Work4 from '../../Assets/work4.png';



export const projectsData = [
    {
      id: 1,
      image: Work1,
      title: "Dashboard (React, Material UI, Formik, Calendar)",
      category: "web",
      link: "https://iyacino-react-dashboard.netlify.app",
    },
    {
        id: 2,
        image: Work2,
        title: "Todoist Clone App (React, Firebase)",
        category: "web",
        link: "https://iyacino-todoist-clone.netlify.app",
      },
      {
        id: 3,
        image: Work3,
        title: "Responsive website Inspired from Starbucks",
        category: "web",
        link: "https://iyacino-signature-coffe-shop.netlify.app",
      },
      {
        id: 4,
        image: Work4,
        title: "Realtime Chap App (React, GraphQL, Web Sockets)",
        category: "app",
        link: "https://iyacino-realtime-chat-app",
      },
  ];
  
export const projectsNav = [
    {
        name: 'all', id:0,
    },
    {
        name: 'web', id:1,
    },
    {
        name: 'app', id:2,
    },  
    {
        name: 'design', id:3,
    },
];