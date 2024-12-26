const request = require("supertest");
const app = require("../index");
const { PrismaClient } = require("@prisma/client");
const Prisma = new PrismaClient();

beforeAll(async () => {
  await Prisma.actionMovies.deleteMany();
  await Prisma.comedyMovies.deleteMany();
  await Prisma.dramaMovies.deleteMany();
  await Prisma.horrorMovies.deleteMany();
  await Prisma.sciFiMovies.deleteMany();
});

afterAll(async () => {
  await Prisma.$disconnect();
});

describe("Movies API Endpoints", () => {
  const genre = "actionMovies";
  let id;

  test("GET /actionmovies - Read Action Movies Data", async () => {
    const response = await request(app).get("/actionmovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /comedymovies - Read Comedy Movies Data", async () => {
    const response = await request(app).get("/comedymovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /dramamovies - Read Drama Movies Data", async () => {
    const response = await request(app).get("/dramamovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /horrormovies - Read Horror Movies Data", async () => {
    const response = await request(app).get("/horrormovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("GET /scifimovies - Read Sci-Fi Movies Data", async () => {
    const response = await request(app).get("/scifimovies");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("movies");
  });

  test("POST /movies/:genre - Create Movie Data", async () => {
    const response = await request(app).post(`/movies/${genre}`).send({
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Action",
      rating: 8.8,
    });
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("insertMovie");
    id = response.body.insertMovie.id;
  });

  test("PUT /movies/:genre/:id - Edit Movie Data", async () => {
    const response = await request(app).put(`/movies/${genre}/${id}`).send({
      title: "Inception",
      director: "Christopher Nolan",
      releaseYear: 2010,
      genre: "Action",
      rating: 9.0,
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("message");
    expect(response.body).toHaveProperty("updateMovie");
  });

  test("DELETE /movies/:genre/:id - Delete Movie Data", async () => {
    const response = await request(app).delete(`/movies/${genre}/${id}`);
    expect(response.statusCode).toBe(202);
    expect(response.body).toHaveProperty("message");
  });
});
      
