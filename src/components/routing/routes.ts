interface SwitchRoutes {
  main: string;
  notFound: string;
  about: string;
  competitors: string;
  categories: string;
  umpires: string;
  clubs: string;
  events: string;
}

export const switchRoutes: SwitchRoutes = {
  main: '/',
  notFound: '*',
  about: 'about',
  competitors: 'competitors',
  categories: 'categories',
  umpires: 'umpires',
  clubs: 'clubs',
  events: 'events',
};

interface LinkRoutes extends SwitchRoutes {}

export const linkRoutes: LinkRoutes = {
  ...switchRoutes,
};
