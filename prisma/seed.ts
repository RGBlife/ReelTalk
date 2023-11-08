import { PrismaClient, Prisma } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  let moviesArray = [
    {
      id: 507089,
      genres: [27, 9648],
      title: "Five Nights at Freddy's",
      overview:
        "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
      imdb_rating: 3439.286,
      poster_url:
        "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
      release_date: "2023-10-25",
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
      release_date: "2023-09-29",
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
      release_date: "2023-08-23",
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
      release_date: "2023-09-06",
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
      release_date: "2023-08-09",
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
      release_date: "2017-10-27",
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
      release_date: "2023-09-21",
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
      release_date: "2023-08-02",
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
      release_date: "2023-03-02",
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
      release_date: "2023-10-26",
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
      release_date: "2023-08-16",
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
      release_date: "2023-07-19",
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
      release_date: "2023-05-18",
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
      release_date: "2023-04-05",
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
      release_date: "2023-10-27",
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
      release_date: "2023-07-19",
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
      release_date: "2023-09-13",
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
      release_date: "2023-05-03",
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
      release_date: "2002-08-09",
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
      release_date: "2023-07-05",
      vote_count: 25,
      trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
      runtime: 170,
    },
  ];
  let dataArray = [];
  for (const movieItem of moviesArray) {
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
        imdb_rating: 3439.286,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/A4j8S6moJS2zNtRR8oWF08gRnL5.jpg",
        release_date: "2023-10-25",
        vote_count: 5,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 150,
      },
      {
        id: 939335,
        title: "Muzzle",
        overview:
          "LAPD K-9 officer Jake Rosser has just witnessed the shocking murder of his dedicated partner by a mysterious assailant. As he investigates the shooter’s identity, he uncovers a vast conspiracy that has a chokehold on the city in this thrilling journey through the tangled streets of Los Angeles and the corrupt bureaucracy of the LAPD.",
        imdb_rating: 1487.413,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qXChf7MFL36BgoLkiB3BzXiwW82.jpg",
        release_date: "2023-09-29",
        vote_count: 3,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 130,
      },
      {
        id: 762430,
        title: "Retribution",
        overview:
          "When a mysterious caller puts a bomb under his car seat, Matt Turner begins a high-speed chase across the city to complete a specific series of tasks- all with his kids trapped in the back seat.",
        imdb_rating: 1253.237,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ljl70pjLIX1hx3bPyCCbxGj6WPr.jpg",
        release_date: "2023-08-23",
        vote_count: 0,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 90,
      },
      {
        id: 968051,
        title: "The Nun II",
        overview:
          "In 1956 France, a priest is violently murdered, and Sister Irene begins to investigate. She once again comes face-to-face with a powerful evil.",
        imdb_rating: 1110.342,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5gzzkR7y3hnY8AD1wXjCnVlHba5.jpg",
        release_date: "2023-09-06",
        vote_count: 20,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 130,
      },
      {
        id: 980489,
        title: "Gran Turismo",
        overview:
          "The ultimate wish-fulfillment tale of a teenage Gran Turismo player whose gaming skills won him a series of Nissan competitions to become an actual professional racecar driver.",
        imdb_rating: 1028.898,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/51tqzRtKMMZEYUpSYkrUE7v9ehm.jpg",
        release_date: "2023-08-09",
        vote_count: 132,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 354912,
        title: "Coco",
        overview:
          "Despite his family’s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
        imdb_rating: 850.864,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
        release_date: "2017-10-27",
        vote_count: 15,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 893723,
        title: "PAW Patrol: The Mighty Movie",
        overview:
          "A magical meteor crash lands in Adventure City and gives the PAW Patrol pups superpowers, transforming them into The Mighty Pups.",
        imdb_rating: 786.46,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/aTvePCU7exLepwg5hWySjwxojQK.jpg",
        release_date: "2023-09-21",
        vote_count: 40,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 60,
      },
      {
        id: 615656,
        title: "Meg 2: The Trench",
        overview:
          "An exploratory dive into the deepest depths of the ocean of a daring research team spirals into chaos when a malevolent mining operation threatens their mission and forces them into a high-stakes battle for survival.",
        imdb_rating: 829.94,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg",
        release_date: "2023-08-02",
        vote_count: 10,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 120,
      },
      {
        id: 459003,
        title: "Mavka: The Forest Song",
        overview:
          "Forest soul Mavka faces an impossible choice between her heart and her duty as guardian to the Heart of the Forest, when she falls in love with the talented young human musician Lukas.",
        imdb_rating: 646.761,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/eeJjd9JU2Mdj9d7nWRFLWlrcExi.jpg",
        release_date: "2023-03-02",
        vote_count: 20,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 90,
      },
      {
        id: 975902,
        title: "Boudica",
        overview:
          "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
        imdb_rating: 1200.1,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ssEFC5wfFjj7lJpUgwJDOK1Xu1J.jpg",
        release_date: "2023-10-26",
        vote_count: 13,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 130,
      },
      {
        id: 565770,
        title: "Blue Beetle",
        overview:
          "Recent college grad Jaime Reyes returns home full of aspirations for his future, only to find that home is not quite as he left it. As he searches to find his purpose in the world, fate intervenes when Jaime unexpectedly finds himself in possession of an ancient relic of alien biotechnology: the Scarab.",
        imdb_rating: 646.216,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/mXLOHHc1Zeuwsl4xYKjKh2280oL.jpg",
        release_date: "2023-08-16",
        vote_count: 50,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 160,
      },
      {
        id: 872585,
        title: "Oppenheimer",
        overview:
          "The story of J. Robert Oppenheimer’s role in the development of the atomic bomb during World War II.",
        imdb_rating: 407.673,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
        release_date: "2023-07-19",
        vote_count: 50,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 170,
      },
      {
        id: 447277,
        title: "The Little Mermaid",
        overview:
          "The youngest of King Triton’s daughters, and the most defiant, Ariel longs to find out more about the world beyond the sea, and while visiting the surface, falls for the dashing Prince Eric. With mermaids forbidden to interact with humans, Ariel makes a deal with the evil sea witch, Ursula, which gives her a chance to experience life on land, but ultimately places her life – and her father’s crown – in jeopardy.",
        imdb_rating: 290.7,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/ym1dxyOk4jFcSl4Q2zmRrA5BEEN.jpg",
        release_date: "2023-05-18",
        vote_count: 12,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 90,
      },
      {
        id: 502356,
        title: "The Super Mario Bros. Movie",
        overview:
          "While working underground to fix a water main, Brooklyn plumbers—and brothers—Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
        imdb_rating: 427.848,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
        release_date: "2023-04-05",
        vote_count: 50,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 100,
      },
      {
        id: 1190012,
        title: "South Park: Joining the Panderverse",
        overview:
          "Cartman's deeply disturbing dreams portend the end of the life he knows and loves. Meanwhile, the adults in South Park are wrestling with their own life decisions, as the advent of AI is turning their wold upside down.",
        imdb_rating: 371.105,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/18IsRVfs5MkkTcqTGlUAnka6sCh.jpg",
        release_date: "2023-10-27",
        vote_count: 66,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 346698,
        title: "Barbie",
        overview:
          "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
        imdb_rating: 557.947,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
        release_date: "2023-07-19",
        vote_count: 60,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 120,
      },
      {
        id: 820525,
        title: "After Everything",
        overview:
          "Besieged by writer’s block and the crushing breakup with Tessa, Hardin travels to Portugal in search of a woman he wronged in the past – and to find himself. Hoping to win back Tessa, he realizes he needs to change his ways before he can make the ultimate commitment.",
        imdb_rating: 659.116,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/uQxjZGU6rxSPSMeAJPJQlmfV3ys.jpg",
        release_date: "2023-09-13",
        vote_count: 30,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 120,
      },
      {
        id: 447365,
        title: "Guardians of the Galaxy Vol. 3",
        overview:
          "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
        imdb_rating: 295.632,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
        release_date: "2023-05-03",
        vote_count: 100,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 180,
      },
      {
        id: 7451,
        title: "xXx",
        overview:
          'Xander Cage is your standard adrenaline junkie with no fear and a lousy attitude. When the US Government "recruits" him to go on a mission, he\'s not exactly thrilled. His mission: to gather information on an organization that may just be planning the destruction of the world, led by the nihilistic Yorgi.',
        imdb_rating: 179.839,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/xeEw3eLeSFmJgXZzmF2Efww0q3s.jpg",
        release_date: "2002-08-09",
        vote_count: 95,
        trailer_url: "https://www.youtube.com/watch?v=eEzD-Y97ges",
        runtime: 150,
      },
      {
        id: 614479,
        title: "Insidious: The Red Door",
        overview:
          "To put their demons to rest once and for all, Josh Lambert and a college-aged Dalton Lambert must go deeper into The Further than ever before, facing their family's dark past and a host of new and more horrifying terrors that lurk behind the red door.",
        imdb_rating: 170.336,
        poster_url:
          "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/d07phJqCx6z5wILDYqkyraorDPi.jpg",
        release_date: "2023-07-05",
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
        genre: "Action",
      },
      {
        id: 12,
        genre: "Adventure",
      },
      {
        id: 16,
        genre: "Animation",
      },
      {
        id: 35,
        genre: "Comedy",
      },
      {
        id: 80,
        genre: "Crime",
      },
      {
        id: 99,
        genre: "Documentary",
      },
      {
        id: 18,
        genre: "Drama",
      },
      {
        id: 10751,
        genre: "Family",
      },
      {
        id: 14,
        genre: "Fantasy",
      },
      {
        id: 36,
        genre: "History",
      },
      {
        id: 27,
        genre: "Horror",
      },
      {
        id: 10402,
        genre: "Music",
      },
      {
        id: 9648,
        genre: "Mystery",
      },
      {
        id: 10749,
        genre: "Romance",
      },
      {
        id: 878,
        genre: "Science Fiction",
      },
      {
        id: 10770,
        genre: "TV Movie",
      },
      {
        id: 53,
        genre: "Thriller",
      },
      {
        id: 10752,
        genre: "War",
      },
      {
        id: 37,
        genre: "Western",
      },
    ],
  });

  let MoviesOnGenres: Prisma.UserCreateInput;
  const movieGenre = await prisma.moviesOnGenres.createMany({
    data: dataArray,
  });

  let User: Prisma.UserCreateInput;
  const users = await prisma.user.createMany({
    data: [
      {
        username: "oceanic",
        email: "oceanic@gmail.com",
        password: "DeepBlueSea123",
        role: "Admin",
        favourite_movie: "The Abyss",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "coralreef",
        email: "coralreef@gmail.com",
        password: "CoralBloom45",
        role: "User",
        favourite_movie: "Coraline",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "starfish",
        email: "starfish@gmail.com",
        password: "StarryNight55",
        role: "User",
        favourite_movie: "A Star is Born",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "marlinblue",
        email: "marlinblue@gmail.com",
        password: "BlueWaters78",
        role: "User",
        favourite_movie: "Big Fish",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "seaurchin",
        email: "seaurchin@gmail.com",
        password: "SpikeyOcean99",
        role: "User",
        favourite_movie: "Ocean's Eleven",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "dolphinwave",
        email: "dolphinwave@gmail.com",
        password: "SmartMammal88",
        role: "User",
        favourite_movie: "Flipper",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "sharkfin",
        email: "sharkfin@gmail.com",
        password: "JawsOfLife22",
        role: "User",
        favourite_movie: "Jaws",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "seahorse",
        email: "seahorse@gmail.com",
        password: "TinyDancer34",
        role: "User",
        favourite_movie: "Seabiscuit",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "clownfish",
        email: "clownfish@gmail.com",
        password: "AnemoneHome56",
        role: "User",
        favourite_movie: "Finding Nemo",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "manta_ray",
        email: "mantaray@gmail.com",
        password: "DeepSeaDiver82",
        role: "User",
        favourite_movie: "The Deep",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "squidink",
        email: "squidink@gmail.com",
        password: "BlackWater64",
        role: "User",
        favourite_movie: "20,000 Leagues Under the Sea",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "anemone",
        email: "anemone@gmail.com",
        password: "SwimAgainst77",
        role: "User",
        favourite_movie: "Aquaman",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "pelicanpoint",
        email: "pelicanpoint@gmail.com",
        password: "SoarAbove66",
        role: "User",
        favourite_movie: "The Birds",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "turtlebay",
        email: "turtlebay@gmail.com",
        password: "SlowAndSteady11",
        role: "User",
        favourite_movie: "Tortoise and the Hare",
        is_watch_list_public: true,
        is_watched_list_public: true,
      },
      {
        username: "jellyfish",
        email: "jellyfish@gmail.com",
        password: "ILoveJellyfish37",
        role: "User",
        favourite_movie: "Finding Nemo",
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
      },
      {
        author_id: 2,
        title: "Disappointing",
        body: "I was really looking forward to this movie but it didn't live up to my expectations. The plot was weak and the acting was mediocre.",
        movie_id: 565770,
        vote_count: 2,
      },
      {
        author_id: 2,
        title: "Mixed feelings",
        body: "I'm not sure how I feel about this movie. There were some good moments but overall it was just okay.",
        movie_id: 872585,
        vote_count: 5,
      },
      {
        author_id: 3,
        title: "A must-see movie",
        body: "This movie is a masterpiece. The acting, the story, the cinematography, everything is perfect.",
        movie_id: 507089,
        vote_count: 20,
      },
      {
        author_id: 3,
        title: "Not worth the hype",
        body: "I don't understand why everyone is raving about this movie. It was boring and predictable.",
        movie_id: 939335,
        vote_count: 3,
      },
      {
        author_id: 4,
        title: "A rollercoaster of emotions",
        body: "This movie made me laugh, cry, and everything in between. It's a must-watch.",
        movie_id: 968051,
        vote_count: 15,
      },
      {
        author_id: 4,
        title: "Disgusting",
        body: "I can't believe I wasted my time watching this movie. It was vulgar and offensive.",
        movie_id: 762430,
        vote_count: 1,
      },
      {
        author_id: 4,
        title: "A classic",
        body: "This movie is a timeless classic. It's a must-watch for any movie lover.",
        movie_id: 980489,
        vote_count: 18,
      },
      {
        author_id: 5,
        title: "A pleasant surprise",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgetable.",
        movie_id: 1190012,
        vote_count: 18,
      },
      {
        author_id: 5,
        title: "A must-watch movie",
        body: "This movie is a must-watch. It's a beautiful story about love and friendship.",
        movie_id: 968051,
        vote_count: 15,
      },
      {
        author_id: 5,
        title: "A forgettable movie",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgettable.",
        movie_id: 447365,
        vote_count: 2,
      },
      {
        author_id: 5,
        title: "A visually stunning movie",
        body: "This movie is a feast for the eyes. The visuals are breathtaking.",
        movie_id: 615656,
        vote_count: 17,
      },
      {
        author_id: 6,
        title: "A heart-pumping thriller",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any thriller fan.",
        movie_id: 820525,
        vote_count: 13,
      },
      {
        author_id: 6,
        title: "A forgettable sequel",
        body: "I loved the first movie but this sequel was forgettable. It didn't live up to my expectations.",
        movie_id: 507089,
        vote_count: 6,
      },
      {
        author_id: 6,
        title: "A heart-wrenching story",
        body: "This movie is a heart-wrenching story about love and loss. It's a must-watch.",
        movie_id: 459003,
        vote_count: 11,
      },
      {
        author_id: 7,
        title: "A predictable movie",
        body: "I knew exactly how this movie was going to end from the beginning. It was too predictable.",
        movie_id: 614479,
        vote_count: 4,
      },
      {
        author_id: 8,
        title: "A real tearjerker",
        body: "This movie had me in tears. It's a beautiful story about love and loss.",
        movie_id: 975902,
        vote_count: 12,
      },
      {
        author_id: 9,
        title: "Pleasantly surprised",
        body: "I didn't have high expectations for this movie but it turned out to be really good. I was pleasantly surprised.",
        movie_id: 615656,
        vote_count: 7,
      },
      {
        author_id: 10,
        title: "Overrated",
        body: "This movie was hyped up so much but it didn't live up to my expectations. It was just okay.",
        movie_id: 980489,
        vote_count: 4,
      },
      {
        author_id: 11,
        title: "A real tearjerker",
        body: "This movie had me in tears. It's a beautiful story about love and loss.",
        movie_id: 968051,
        vote_count: 12,
      },
      {
        author_id: 11,
        title: "A waste of time",
        body: "I regret watching this movie. It was a complete waste of time.",
        movie_id: 459003,
        vote_count: 1,
      },
      {
        author_id: 11,
        title: "A thrilling ride",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any action movie fan.",
        movie_id: 762430,
        vote_count: 16,
      },
      {
        author_id: 11,
        title: "A heartwarming story",
        body: "This movie is a heartwarming story about family and friendship. It's a must-watch.",
        movie_id: 820525,
        vote_count: 22,
      },
      {
        author_id: 11,
        title: "A real gem",
        body: "This movie is a hidden gem. It's not well-known but it's definitely worth watching.",
        movie_id: 502356,
        vote_count: 9,
      },
      {
        author_id: 12,
        title: "A disappointing sequel",
        body: "I loved the first movie but this sequel was a letdown. The plot was weak and the acting was subpar.",
        movie_id: 354912,
        vote_count: 3,
      },
      {
        author_id: 12,
        title: "A thought-provoking movie",
        body: "This movie really made me think. It's a deep and meaningful story about life and death.",
        movie_id: 447365,
        vote_count: 14,
      },
      {
        author_id: 12,
        title: "A hilarious comedy",
        body: "This movie had me laughing from start to finish. It's a must-watch for any comedy fan.",
        movie_id: 762430,
        vote_count: 19,
      },
      {
        author_id: 12,
        title: "A forgettable movie",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgettable.",
        movie_id: 7451,
        vote_count: 2,
      },
      {
        author_id: 12,
        title: "A visually stunning movie",
        body: "This movie is a feast for the eyes. The visuals are breathtaking.",
        movie_id: 502356,
        vote_count: 17,
      },
      {
        author_id: 13,
        title: "A heart-pumping thriller",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any thriller fan.",
        movie_id: 614479,
        vote_count: 13,
      },
      {
        author_id: 13,
        title: "A forgettable sequel",
        body: "I loved the first movie but this sequel was forgettable. It didn't live up to my expectations.",
        movie_id: 565770,
        vote_count: 6,
      },
      {
        author_id: 13,
        title: "A heart-wrenching story",
        body: "This movie is a heart-wrenching story about love and loss. It's a must-watch.",
        movie_id: 447365,
        vote_count: 11,
      },
      {
        author_id: 13,
        title: "A predictable movie",
        body: "I knew exactly how this movie was going to end from the beginning. It was too predictable.",
        movie_id: 820525,
        vote_count: 4,
      },
      {
        author_id: 13,
        title: "A forgettable movie",
        body: "I watched this movie a few days ago and I can't even remember what it was about. It was that forgettable.",
        movie_id: 820525,
        vote_count: 2,
      },
      {
        author_id: 14,
        title: "A visually stunning movie",
        body: "This movie is a feast for the eyes. The visuals are breathtaking.",
        movie_id: 872585,
        vote_count: 17,
      },
      {
        author_id: 14,
        title: "A heart-pumping thriller",
        body: "This movie had me on the edge of my seat the whole time. It's a must-watch for any thriller fan.",
        movie_id: 820525,
        vote_count: 13,
      },
      {
        author_id: 14,
        title: "A forgettable sequel",
        body: "I loved the first movie but this sequel was forgettable. It didn't live up to my expectations.",
        movie_id: 762430,
        vote_count: 6,
      },
      {
        author_id: 15,
        title: "A heart-wrenching story",
        body: "This movie is a heart-wrenching story about love and loss. It's a must-watch.",
        movie_id: 459003,
        vote_count: 11,
      },
      {
        author_id: 15,
        title: "A predictable movie",
        body: "I knew exactly how this movie was going to end from the beginning. It was too predictable.",
        movie_id: 459003,
        vote_count: 4,
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
