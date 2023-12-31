const Page = require("./helpers/page");

let page;

beforeEach(async () => {
  page = await Page.build();
  await page.goto("http://localhost:3000");
});

afterEach(async () => {
  await page.close();
});

test("Titulo del Header correcto", async () => {
  const text = await page.getContentOfPage("a.brand-logo");
  expect(text).toEqual("Blogs | node | advanced");
});

test("Click en login empieza el proceso de oauth", async () => {
  await page.click(".right a");
  const url = await page.url();
  expect(url).toMatch(/accounts\.google\.com/);
});

test("Click me logueo, debe mostrar el boton de cerrar sesión", async () => {
  await page.login();

  const text = await page.$eval(`a[href="/auth/logout"]`, (el) => el.innerHTML);

  expect(text).toEqual("Cerrar Sesión");
});
