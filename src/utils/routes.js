const homeRoute = "/gift-finder";
const selectAgeRoute = `${homeRoute}/age`;
const parentOrChildRoute = `${homeRoute}/by`;
const themeRoute = `${homeRoute}/theme`;
const themeRoute2 = `${homeRoute}/theme2`;
const comingSoon = `/coming-soon`;
const model = `${homeRoute}/model`;
const complete = `${homeRoute}/complete`;
const recommendations = `${homeRoute}/recommendations`;

const routes = {
  home: homeRoute,
  selectAge: selectAgeRoute,
  parentOrChild: parentOrChildRoute,
  theme: themeRoute,
  theme2: themeRoute2,
  comingSoon: comingSoon,
  model: model,
  complete: complete,
  recommendations: recommendations,
};

export default routes;
