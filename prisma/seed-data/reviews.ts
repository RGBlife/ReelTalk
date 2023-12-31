type ReviewSeedData = {
    author_id: number;
    title: string;
    body: string;
    movie_id: number;
    vote_count: number;
    rating: number;
    has_spoilers: boolean;
}

export const reviewsSeedData = [
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
  ] satisfies ReviewSeedData[]