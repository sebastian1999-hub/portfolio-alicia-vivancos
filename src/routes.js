import Home from './Home.svelte';
import About from './About.svelte';
import Projects from './Projects.svelte';
import Contact from './Contact.svelte';
import ProjectPage from './ProjectPage.svelte';

export default {
  '/': Home,
  '/about': About,
  '/projects': Projects,
  '/projects/:id': ProjectPage,
  '/contact': Contact
};
