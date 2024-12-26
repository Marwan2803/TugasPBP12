const express = require("express");
const app = express();
const port = 3000;
const prisma = require("./modules/dbprisma");

app.use(express.json());

app.get("/actionmovies", async (req, res) => {
  try {
    const movies = await prisma.actionMovies.findMany();
    res.status(200).json({ message: "Movies retrieved successfully", movies });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/comedymovies", async (req, res) => {
  try {
    const movies = await prisma.comedyMovies.findMany();
    res.status(200).json({ message: "Movies retrieved successfully", movies });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/dramamovies", async (req, res) => {
  try {
    const movies = await prisma.dramaMovies.findMany();
    res.status(200).json({ message: "Movies retrieved successfully", movies });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/horrormovies", async (req, res) => {
  try {
    const movies = await prisma.horrorMovies.findMany();
    res.status(200).json({ message: "Movies retrieved successfully", movies });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/scifimovies", async (req, res) => {
  try {
    const movies = await prisma.sciFiMovies.findMany();
    res.status(200).json({ message: "Movies retrieved successfully", movies });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/movies/:genre", async (req, res) => {
  const genre = req.params.genre;
  const { title, director, releaseYear, rating } = req.body;

  try {
    const insertMovie = await prisma[genre].create({
      data: {
        title,
        director,
        releaseYear,
        rating,
      },
    });
    res
      .status(201)
      .json({ message: "Movie successfully added to " + genre });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.put("/movies/:genre/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const genre = req.params.genre;

  const { title, director, releaseYear, rating } = req.body;

  try {
    const updateMovie = await prisma[genre].update({
      where: { id },
      data: {
        title,
        director,
        releaseYear,
        rating,
      },
    });
    res.status(200).json({ message: "Movie data successfully updated!" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/movies/:genre/:id", async (req, res) => {
  const id = parseInt(req.params.id);
  const genre = req.params.genre;
  try {
    const deleteMovie = await prisma[genre].delete({
      where: { id },
    });
    res.status(202).json({ message: "Movie data successfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("*", (req, res) => {
  res.status(404).json({ message: "The URL you provided does not exist!" });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
                          
