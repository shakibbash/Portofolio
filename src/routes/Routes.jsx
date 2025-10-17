import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import Error from "../pages/Error";
import RootLayouts from "../Layouts/RootLayouts";
import AboutMe from "../pages/About/AboutMe";

import EducationSection from "../pages/Education/EducationSection";
import FeaturedProject from "../pages/FeaturedProjects/FeaturedProjects";
import Contact from "../pages/Contact/Contact";
import ProjectDetails from "../pages/FeaturedProjects/projectsDetails";


const router = createBrowserRouter([
    {
        path: "/",
      Component: RootLayouts,
        children: [
            {
                index: true,
                Component : Home
            },
            {
                path: '/about',
                Component: AboutMe
            },
            {
                path: '/education',
                Component: EducationSection
            },
            {
                path: '/projects',
                Component: FeaturedProject
            },
             {
                path: '/projects/:id',
                Component: ProjectDetails
            },
            {
                path: '/contact',
                Component: Contact
            },
        ]
    },
    {
        path: "/*",
        element: <Error />,
    },
]);

export default router;
