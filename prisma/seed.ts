import { PrismaClient, type Prisma } from "@prisma/client";
import { hash } from "bcrypt";

import { movies } from "../data/movies.json";

const formattedMovies = movies.map((movie) => {
  return { ...movie, release_date: new Date(movie.release_date) };
});

const prisma = new PrismaClient();
async function main() {
  const moviesArray = [
    {
      id: 507089,
      genres: [27, 9648],
      title: "Five Nights at Freddy's",
      overview:
        "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
      imdb_rating: 3439.286,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
      release_date: 2023,
      vote_count: 5,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 150,
    },
    {
      id: 939335,
      genres: [28, 80, 18, 53],
      title: "Muzzle",
      overview:
        "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
      imdb_rating: 1487.413,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
      release_date: 2023,
      vote_count: 3,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 130,
    },
    {
      id: 762430,
      genres: [28, 53, 80],
      title: "Retribution",
      overview:
        "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
      imdb_rating: 1253.237,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg",
      release_date: 2023,
      vote_count: 0,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 90,
    },
    {
      id: 968051,
      genres: [27, 9648, 53],
      title: "The Nun II",
      overview:
        "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
      imdb_rating: 1110.342,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
      release_date: 2023,
      vote_count: 20,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 130,
    },
    {
      id: 980489,
      genres: [12, 28, 18],
      title: "Gran Turismo",
      overview:
        "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
      imdb_rating: 1028.898,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
      release_date: 2023,
      vote_count: 132,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 180,
    },
    {
      id: 354912,
      genres: [10751, 16, 14, 10402, 35, 12],
      title: "Coco",
      overview:
        "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
      imdb_rating: 850.864,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
      release_date: 2017,
      vote_count: 15,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 180,
    },
    {
      id: 893723,
      genres: [16, 10751, 28, 878],
      title: "PAW Patrol: The Mighty Movie",
      overview:
        "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
      imdb_rating: 786.46,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aTvePCU7exLepwg5hWySjwxojQK.jpg",
      release_date: 2023,
      vote_count: 40,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 60,
    },
    {
      id: 615656,
      genres: [28, 878, 27],
      title: "Meg 2: The Trench",
      overview:
        "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
      imdb_rating: 829.94,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
      release_date: 2023,
      vote_count: 10,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 120,
    },
    {
      id: 459003,
      genres: [16, 12, 10751, 14],
      title: "Mavka: The Forest Song",
      overview:
        "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
      imdb_rating: 646.761,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
      release_date: 2023,
      vote_count: 20,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 90,
    },
    {
      id: 975902,
      genres: [28, 10752],
      title: "Boudica",
      overview:
        "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
      imdb_rating: 1200.1,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg",
      release_date: 2023,
      vote_count: 13,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 130,
    },
    {
      id: 565770,
      genres: [28, 878, 12],
      title: "Blue Beetle",
      overview:
        "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
      imdb_rating: 646.216,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
      release_date: 2023,
      vote_count: 50,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 160,
    },
    {
      id: 872585,
      genres: [18, 36],
      title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
      imdb_rating: 407.673,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: 2023,
      vote_count: 50,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 170,
    },
    {
      id: 447277,
      genres: [12, 10751, 14, 10749],
      title: "The Little Mermaid",
      overview:
        "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
      imdb_rating: 290.7,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
      release_date: 2023,
      vote_count: 12,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 90,
    },
    {
      id: 502356,
      genres: [16, 10751, 12, 14, 35],
      title: "The Super Mario Bros. Movie",
      overview:
        "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
      imdb_rating: 427.848,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
      release_date: 2023,
      vote_count: 50,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 100,
    },
    {
      id: 1190012,
      genres: [16, 35, 10770, 878],
      title: "South Park: Joining the Panderverse",
      overview:
        "Cartman's deeply disturbing dreams portend the end of the life he knows and loves. Meanwhile, the adults in South Park are wrestling with their own life decisions, as the advent of AI is turning their wold upside down.",
      imdb_rating: 371.105,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/18IsRVfs5MkkTcqTGlUAnka6sCh.jpg",
      release_date: 2023,
      vote_count: 66,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 180,
    },
    {
      id: 346698,
      genres: [35, 12, 14],
      title: "Barbie",
      overview:
        "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
      imdb_rating: 557.947,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
      release_date: 2023,
      vote_count: 60,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 120,
    },
    {
      id: 820525,
      genres: [10749, 18],
      title: "After Everything",
      overview:
        "Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
      imdb_rating: 659.116,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
      release_date: 2023,
      vote_count: 30,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 120,
    },
    {
      id: 447365,
      genres: [878, 12, 28],
      title: "Guardians of the Galaxy Vol. 3",
      overview:
        "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
      imdb_rating: 295.632,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
      release_date: 2023,
      vote_count: 100,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 180,
    },
    {
      id: 7451,
      genres: [28, 12, 53],
      title: "xXx",
      overview:
        'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
      imdb_rating: 179.839,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
      release_date: 2002,
      vote_count: 95,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 150,
    },
    {
      id: 614479,
      genres: [27, 9648, 53],
      title: "Insidious: The Red Door",
      overview:
        "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
      imdb_rating: 170.336,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d07phJqCx6z5wILDYqkyraorDPi.jpg",
      release_date: 2023,
      vote_count: 25,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 170,
    },
  ];
  const dataArray = [];
  for (const movieItem of formattedMovies) {
    for (const genre of movieItem.genres) {
      dataArray.push({
        genre_id: genre,
        movie_id: movieItem.id,
      });
    }
  }

  let movie: Prisma.UserCreateInput;
  const movies = await prisma.movie.createMany({
    data: [
      {
        id: 507089,
        title: "Five Nights at Freddy's",
        overview:
          "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
        release_date: new Date("2023-10-25"),
        release_year: 2023,
        vote_count: 5,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 150,
      },
      {
        id: 939335,
        title: "Muzzle",
        overview:
          "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
        imdb_rating: 3,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
        release_date: new Date("2023-09-29"),
        release_year: 2023,
        vote_count: 3,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 130,
      },
      {
        id: 762430,
        title: "Retribution",
        overview:
          "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg",
        release_date: new Date("2023-08-23"),
        release_year: 2023,
        vote_count: 0,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 90,
      },
      {
        id: 968051,
        title: "The Nun II",
        overview:
          "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
        release_date: new Date("2023-09-06"),
        release_year: 2023,
        vote_count: 20,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 130,
      },
      {
        id: 980489,
        title: "Gran Turismo",
        overview:
          "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
        release_date: new Date("2023-08-09"),
        release_year: 2023,
        vote_count: 132,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 354912,
        title: "Coco",
        overview:
          "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        release_date: new Date("2017-10-27"),
        release_year: 2017,
        vote_count: 15,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 893723,
        title: "PAW Patrol: The Mighty Movie",
        overview:
          "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aTvePCU7exLepwg5hWySjwxojQK.jpg",
        release_date: new Date("2023-09-21"),
        release_year: 2023,
        vote_count: 40,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 60,
      },
      {
        id: 615656,
        title: "Meg 2: The Trench",
        overview:
          "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        release_date: new Date("2023-08-02"),
        release_year: 2023,
        vote_count: 10,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 120,
      },
      {
        id: 459003,
        title: "Mavka: The Forest Song",
        overview:
          "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
        release_date: new Date("2023-03-02"),
        release_year: 2023,
        vote_count: 20,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 90,
      },
      {
        id: 975902,
        title: "Boudica",
        overview:
          "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg",
        release_date: new Date("2023-10-26"),
        release_year: 2023,
        vote_count: 13,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 130,
      },
      {
        id: 565770,
        title: "Blue Beetle",
        overview:
          "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
        release_date: new Date("2023-08-16"),
        release_year: 2023,
        vote_count: 50,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 160,
      },
      {
        id: 872585,
        title: "Oppenheimer",
        overview:
          "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: new Date("2023-07-19"),
        release_year: 2023,
        vote_count: 50,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 170,
      },
      {
        id: 447277,
        title: "The Little Mermaid",
        overview:
          "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        release_date: new Date("2023-05-18"),
        release_year: 2023,
        vote_count: 12,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 90,
      },
      {
        id: 502356,
        title: "The Super Mario Bros. Movie",
        overview:
          "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        release_date: new Date("2023-04-05"),
        release_year: 2023,
        vote_count: 50,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 100,
      },
      {
        id: 1190012,
        title: "South Park: Joining the Panderverse",
        overview:
          "Cartman's deeply disturbing dreams portend the end of the life he knows and loves. Meanwhile, the adults in South Park are wrestling with their own life decisions, as the advent of AI is turning their wold upside down.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/18IsRVfs5MkkTcqTGlUAnka6sCh.jpg",
        release_date: new Date("2023-10-27"),
        release_year: 2023,
        vote_count: 66,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 346698,
        title: "Barbie",
        overview:
          "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        release_date: new Date("2023-07-19"),
        release_year: 2023,
        vote_count: 60,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 120,
      },
      {
        id: 820525,
        title: "After Everything",
        overview:
          "Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
        release_date: new Date("2023-09-13"),
        release_year: 2023,
        vote_count: 30,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 120,
      },
      {
        id: 447365,
        title: "Guardians of the Galaxy Vol. 3",
        overview:
          "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        imdb_rating: 4,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        release_date: new Date("2023-05-03"),
        release_year: 2023,
        vote_count: 100,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 7451,
        title: "xXx",
        overview:
          'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
        imdb_rating: 3,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
        release_date: new Date("2002-08-09"),
        release_year: 2002,
        vote_count: 95,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 150,
      },
      {
        id: 614479,
        title: "Insidious: The Red Door",
        overview:
          "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
        imdb_rating: 3.5,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d07phJqCx6z5wILDYqkyraorDPi.jpg",
        release_date: new Date("2023-07-05"),
        release_year: 2023,
        vote_count: 25,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 170,
      },
    ],
  });

  let genre: Prisma.UserCreateInput;
  const genresList = await prisma.genre.createMany({
    data: [
      {
        id: 28,
        genre: "action",
      },
      {
        id: 12,
        genre: "adventure",
      },
      {
        id: 16,
        genre: "animation",
      },
      {
        id: 35,
        genre: "comedy",
      },
      {
        id: 80,
        genre: "crime",
      },
      {
        id: 99,
        genre: "documentary",
      },
      {
        id: 18,
        genre: "drama",
      },
      {
        id: 10751,
        genre: "family",
      },
      {
        id: 14,
        genre: "fantasy",
      },
      {
        id: 36,
        genre: "history",
      },
      {
        id: 27,
        genre: "horror",
      },
      {
        id: 10402,
        genre: "music",
      },
      {
        id: 9648,
        genre: "mystery",
      },
      {
        id: 10749,
        genre: "romance",
      },
      {
        id: 878,
        genre: "science_fiction",
      },
      {
        id: 10770,
        genre: "tv_movie",
      },
      {
        id: 53,
        genre: "thriller",
      },
      {
        id: 10752,
        genre: "war",
      },
      {
        id: 37,
        genre: "western",
      },
    ],
  });

  let MoviesOnGenres: Prisma.UserCreateInput;
  const movieGenre = await prisma.moviesOnGenres.createMany({
    data: dataArray,
  });

  let User: Prisma.UserCreateInput;
  const adminPassword = await hash("admin123", 12);
  const userPassword = await hash("user123", 12);
  const users = await prisma.user.createMany({
    data: [
      {
        username: "oceanic",
        email: "oceanic@gmail.com",
        password:
          "$2b$12$Tux5AC8Sns/V/SHY8I.Tfe6y4vJX55JOX.LMKV9Q/cn.hTAUV6vXW",
        role: "Admin",
        favourite_movie: "The Abyss",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "coralreef",
        email: "coralreef@gmail.com",
        password:
          "$2b$12$B31pkyvMQMOgH40eBIxKvuJNQ8Rsiq7q6LVRPBiK7n8SvfHEQ4Cqm",
        role: "User",
        favourite_movie: "Coraline",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "starfish",
        email: "starfish@gmail.com",
        password:
          "$2b$12$X3cB.NSTLkju3UVZDjbLjephwXtac2bWO6TEwW7riaC6/OL6DeR22",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "A Star is Born",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "marlinblue",
        email: "marlinblue@gmail.com",
        password:
          "$2b$12$ZWBIYkK/P6lz9LxQjfBxPuhO4ST/Pkpbrw21jo7HtBaNa/NyomKDG",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Big Fish",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "seaurchin",
        email: "seaurchin@gmail.com",
        password:
          "$2b$12$OFhN8YCyprYU8MnOq0piZeS8UtTuDSDbvMkvd2.K/VbjVST11gode",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Ocean's Eleven",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "dolphinwave",
        email: "dolphinwave@gmail.com",
        password:
          "$2b$12$xlaq2/maGdDlR.H3Rfl/G.Oo9si1m7Iqpij7UL.N.ux5/Tqt9Fmqm",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Flipper",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "sharkfin",
        email: "sharkfin@gmail.com",
        password:
          "$2b$12$FWYopWWcoAPYDnwTkmhntOTWFdK8.q9bJUNR4m.o/pTIT7NEREdzW",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Jaws",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "seahorse",
        email: "seahorse@gmail.com",
        password:
          "$2b$12$KtClvniJJPF.mL/T2DMPQuMaAYKSAspT9sBuJQKI5nEVBWpCsFm2W",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Seabiscuit",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "clownfish",
        email: "clownfish@gmail.com",
        password:
          "$2b$12$3gZ/8oFus8548m3ZYdmkTusJf.SYAAPH5rwYPqv9V/kwVVjQlALXu'",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Finding Nemo",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "manta_ray",
        email: "mantaray@gmail.com",
        password:
          "$2b$12$9wvS.JJmNj3ZjXt5n5Ft3OWe1NnWsr5tI/qGA9QIfBJwL8Hdr2XJq",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "The Deep",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "squidink",
        email: "squidink@gmail.com",
        password:
          "$2b$12$fMrLPeZ.WhJwzNm3101JWez7JlreRhSu/UGPXq/jAQ8yOJs700D9C",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "20,000 Leagues Under the Sea",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "anemone",
        email: "anemone@gmail.com",
        password:
          "$2b$12$HzvFebdo1J/ngmsT1Cng2e5JrMizW9vlMtu8Y5/Y02zz25pqjigOa'",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Aquaman",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "pelicanpoint",
        email: "pelicanpoint@gmail.com",
        password:
          "$2b$12$PxVeayUbRxNZQmErwUzOe.ygVUk9OQ0QGDclYe7tcoNo2XUTNx8Qm",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "The Birds",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "turtlebay",
        email: "turtlebay@gmail.com",
        password:
          "$2b$12$ynkbOOt/0t19vkoNpFJtHeRBKCs3VbRKoudf.uoUP2xBPvbtyVOLC",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Tortoise and the Hare",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "jellyfish",
        email: "jellyfish@gmail.com",
        password:
          "$2b$12$i8Xq1Gu7ct3oa9locMqq1.OjO2hxUOYmKZWg763U0Rba3fcMmRtX2",
        avatar_url:
          "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
        role: "User",
        favourite_movie: "Finding Nemo",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "testAdmin",
        email: "admin@email.com",
        password: adminPassword,
        role: "Admin",
        favourite_movie: "Terminator 2",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "testUser",
        email: "user@email.com",
        password: userPassword,
        role: "User",
        favourite_movie: "Shrek",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
    ],
  });

  let Review: Prisma.UserCreateInput;
  const reviews = await prisma.review.createMany({
    data: [
      {
        author_id: 1,
        title: "Great movie!",
        body: "I loved this movie. The acting was great and the story was really engaging.",
        movie_id: 980489,
        vote_count: 10,
        rating: 5,
        has_spoilers: true,
      },
      {
        author_id: 2,
        title: "Disappointing",
        body: "I was really looking forward to this movie but it didn't live up to my expectations. The plot was weak and the acting was mediocre.",
        movie_id: 565770,
        vote_count: 2,
        rating: 5,
        has_spoilers: true,
      },
      {
        author_id: 2,
        title: "Mixed feelings",
        body: "I'm not sure how I feel about this movie. There were some good moments but overall it was just okay.",
        movie_id: 872585,
        vote_count: 5,
        rating: 3,
        has_spoilers: false,
      },
      {
        author_id: 3,
        title: "A must-see movie",
        body: "This movie is a masterpiece. The acting, the story, the cinematography, everything is perfect.",
        movie_id: 507089,
        vote_count: 20,
        rating: 2,
        has_spoilers: false,
      },
      {
        author_id: 3,
        title: "Not worth the hype",
        body: "I don't understand why everyone is raving about this movie. It was boring and predictable.",
        movie_id: 939335,
        vote_count: 3,
        rating: 2,
        has_spoilers: false,
      },
      {
        author_id: 4,
        title: "A rollercoaster of emotions",
        body: "This movie made me laugh, cry, and everything in between. It's a must-watch.",
        movie_id: 968051,
        vote_count: 15,
        rating: 5,
        has_spoilers: false,
      },
      {
        author_id: 4,
        title: "Disgusting",
        body: "I can't believe I wasted my time watching this movie. It was vulgar and offensive.",
        movie_id: 762430,
        vote_count: 1,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 4,
        title: "A classic",
        body: "This movie is a timeless classic. It's a must-watch for any movie lover.",
        movie_id: 980489,
        vote_count: 18,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 5,
        title: "A pleasant surprise",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgetable.",
        movie_id: 1190012,
        vote_count: 18,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 5,
        title: "A must-watch movie",
        body: "This movie is a must-watch. It's a beautiful story about love and friendship.",
        movie_id: 968051,
        vote_count: 15,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 5,
        title: "A forgettable movie",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgettable.",
        movie_id: 447365,
        vote_count: 2,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 5,
        title: "A visually stunning movie",
        body: "This movie is a feast for the eyes. The visuals are breathtaking.",
        movie_id: 615656,
        vote_count: 17,
        rating: 4,
        has_spoilers: true,
      },
      {
        author_id: 6,
        title: "A heart-pumping thriller",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any thriller fan.",
        movie_id: 820525,
        vote_count: 13,
        rating: 1,
        has_spoilers: false,
      },
      {
        author_id: 6,
        title: "A forgettable sequel",
        body: "I loved the first movie but this sequel was forgettable. It didn't live up to my expectations.",
        movie_id: 507089,
        vote_count: 6,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 6,
        title: "A heart-wrenching story",
        body: "This movie is a heart-wrenching story about love and loss. It's a must-watch.",
        movie_id: 459003,
        vote_count: 11,
        rating: 2,
        has_spoilers: false,
      },
      {
        author_id: 7,
        title: "A predictable movie",
        body: "I knew exactly how this movie was going to end from the beginning. It was too predictable.",
        movie_id: 614479,
        vote_count: 4,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 8,
        title: "A real tearjerker",
        body: "This movie had me in tears. It's a beautiful story about love and loss.",
        movie_id: 975902,
        vote_count: 12,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 9,
        title: "Pleasantly surprised",
        body: "I didn't have high expectations for this movie but it turned out to be really good. I was pleasantly surprised.",
        movie_id: 615656,
        vote_count: 7,
        rating: 3,
        has_spoilers: true,
      },
      {
        author_id: 10,
        title: "Overrated",
        body: "This movie was hyped up so much but it didn't live up to my expectations. It was just okay.",
        movie_id: 980489,
        vote_count: 4,
        rating: 3,
        has_spoilers: true,
      },
      {
        author_id: 11,
        title: "A real tearjerker",
        body: "This movie had me in tears. It's a beautiful story about love and loss.",
        movie_id: 968051,
        vote_count: 12,
        rating: 2,
        has_spoilers: true,
      },
      {
        author_id: 11,
        title: "A waste of time",
        body: "I regret watching this movie. It was a complete waste of time.",
        movie_id: 459003,
        vote_count: 1,
        rating: 5,
        has_spoilers: true,
      },
      {
        author_id: 11,
        title: "A thrilling ride",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any action movie fan.",
        movie_id: 762430,
        vote_count: 16,
        rating: 4,
        has_spoilers: true,
      },
      {
        author_id: 11,
        title: "A heartwarming story",
        body: "This movie is a heartwarming story about family and friendship. It's a must-watch.",
        movie_id: 820525,
        vote_count: 22,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 11,
        title: "A real gem",
        body: "This movie is a hidden gem. It's not well-known but it's definitely worth watching.",
        movie_id: 502356,
        vote_count: 9,
        rating: 5,
        has_spoilers: false,
      },
      {
        author_id: 12,
        title: "A disappointing sequel",
        body: "I loved the first movie but this sequel was a letdown. The plot was weak and the acting was subpar.",
        movie_id: 354912,
        vote_count: 3,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 12,
        title: "A thought-provoking movie",
        body: "This movie really made me think. It's a deep and meaningful story about life and death.",
        movie_id: 447365,
        vote_count: 14,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 12,
        title: "A hilarious comedy",
        body: "This movie had me laughing from start to finish. It's a must-watch for any comedy fan.",
        movie_id: 762430,
        vote_count: 19,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 12,
        title: "A forgettable movie",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgettable.",
        movie_id: 7451,
        vote_count: 2,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 12,
        title: "A visually stunning movie",
        body: "This movie is a feast for the eyes. The visuals are breathtaking.",
        movie_id: 502356,
        vote_count: 17,
        rating: 0.5,
        has_spoilers: false,
      },
      {
        author_id: 13,
        title: "A heart-pumping thriller",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any thriller fan.",
        movie_id: 614479,
        vote_count: 13,
        rating: 0,
        has_spoilers: false,
      },
      {
        author_id: 13,
        title: "A forgettable sequel",
        body: "I loved the first movie but this sequel was forgettable. It didn't live up to my expectations.",
        movie_id: 565770,
        vote_count: 6,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 13,
        title: "A heart-wrenching story",
        body: "This movie is a heart-wrenching story about love and loss. It's a must-watch.",
        movie_id: 447365,
        vote_count: 11,
        rating: 1.5,
        has_spoilers: false,
      },
      {
        author_id: 13,
        title: "A predictable movie",
        body: "I knew exactly how this movie was going to end from the beginning. It was too predictable.",
        movie_id: 820525,
        vote_count: 4,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 13,
        title: "A forgettable movie",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgettable.",
        movie_id: 820525,
        vote_count: 2,
        rating: 2.5,
        has_spoilers: false,
      },
      {
        author_id: 14,
        title: "A visually stunning movie",
        body: "This movie is a feast for the eyes. The visuals are breathtaking.",
        movie_id: 872585,
        vote_count: 17,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 14,
        title: "A heart-pumping thriller",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any thriller fan.",
        movie_id: 820525,
        vote_count: 13,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 14,
        title: "A forgettable sequel",
        body: "I loved the first movie but this sequel was forgettable. It didn't live up to my expectations.",
        movie_id: 762430,
        vote_count: 6,
        rating: 4,
        has_spoilers: false,
      },
      {
        author_id: 15,
        title: "A heart-wrenching story",
        body: "This movie is a heart-wrenching story about love and loss. It's a must-watch.",
        movie_id: 459003,
        vote_count: 11,
        rating: 3.5,
        has_spoilers: false,
      },
      {
        author_id: 15,
        title: "A predictable movie",
        body: "I knew exactly how this movie was going to end from the beginning. It was too predictable.",
        movie_id: 459003,
        vote_count: 4,
        rating: 4.5,
        has_spoilers: false,
      },
    ],
  });

  let ChatRoom: Prisma.UserCreateInput;
  const chatroom = await prisma.chatRoom.createMany({
    data: [
      {
        owner_id: 1,
        room_name: "Trending Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Horror Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Adventure Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Fantasy Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Animation Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Drama Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Action Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Comedy Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "History Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Western Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Thriller Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Crime Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Documentary Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Sci-Fi Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Mystery Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Romance Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "Family Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "War Movie Discussion",
        owner: "oceanic",
        members: [],
      },
      {
        owner_id: 1,
        room_name: "TV Movie Movie Discussion",
        owner: "oceanic",
        members: [],
      },
    ],
  });

  let Preference: Prisma.UserCreateInput;
  const preferences = await prisma.preference.createMany({
    data: [
      {
        user_id: 1,
        action:5,
        adventure: 5,
        animation: 5,
        comedy: 5,
        crime: 5,
        documentary: 5,
        drama: 5,
        family: 5,
        fantasy: 5,
        history: 5,
        horror: 10,
        music: 5,
        mystery: 5,
        romance: 5,
        science_fiction: 5,
        tv_movie: 5,
        thriller: 10,
        war: 5,
        western: 5,
        release_year: "2000-01-01",
        imdb_rating: 9,
      },
      {
        user_id: 2,
        action:10,
        adventure: 5,
        animation: 5,
        comedy: 10,
        crime: 5,
        documentary: 5,
        drama: 5,
        family: 5,
        fantasy: 5,
        history: 5,
        horror: 5,
        music: 5,
        mystery: 5,
        romance: 5,
        science_fiction: 5,
        tv_movie: 5,
        thriller: 5,
        war: 5,
        western: 5,
        release_year: "2005-01-01",
        imdb_rating: 7,
      },
    ],
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
