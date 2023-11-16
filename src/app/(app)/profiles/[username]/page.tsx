import { db } from "~/server/db";
import { getAuthUser } from "~/server/auth";
import Link from "next/link";
import { ProfileMovieLists } from "./components/ProfileMovieLists";
import { Movie } from "@prisma/client";
import { genRelativeDateStr } from "~/utils/date-formatters";
import { ModalOpenButton } from "~/components/ModalOpenButton";
import { ProfileUpdateModal } from "./components/ProfileUpdateModal";

type Props = {
  params: {
    username: string;
  };
};

const getUserByUsername = (username: string) => {
  return db.user.findUniqueOrThrow({
    where: { username },
    select: {
      id: true,
      avatar_url: true,
      username: true,
      role: true,
      email: true,
      favourite_movie: true,
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
  });
};

const getRecommendedMovies = async (userId: number) => {
  const recommendations = await db.recommendation.findMany({
    where: {
      user_id: userId,
    },
    include: {
      movie: true,
    },
    take: 3,
  });

  const movies = recommendations.map((rec) => rec.movie);
  return movies;
};

export default async function ProfilePage({ params }: Props) {
  const authUser = await getAuthUser();
  const profileUser = await getUserByUsername(params.username);
  const recMovies = await getRecommendedMovies(Number(authUser?.id));

  const isAuthUser = authUser?.id === profileUser.id.toString();

  const ProfileHeader = () => {
    return (
      <div className="rounded-lg bg-white p-8 md:basis-2/3">
        <div className="flex items-center">
          <img
            src={profileUser.avatar_url!}
            alt="User Avatar"
            className="mr-4 h-24 w-24 rounded-full"
          />
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">{profileUser.username}</h2>
              {isAuthUser && <ProfileUpdateModal user={profileUser} />}
            </div>
            <p className="text-gray-500">25 years old, M</p>
            <p className="text-gray-700">
              My Favourite Movie:{" "}
              <span className="font-bold">{profileUser.favourite_movie}</span>
            </p>
            <p className="text-gray-700">
              Passionate about movies! 🍿🎬 Always looking for new
              recommendations!
            </p>

            {/* Social Media Links ? */}
          </div>
        </div>
        <ProfileMovieLists />
      </div>
    );
  };

  return (
    <div className="flex h-screen flex-col md:flex-row">
      <ProfileHeader />
      <ProfileMovieRecommendations movies={recMovies} />
    </div>
  );
}

const ProfileMovieRecommendations = ({ movies }: { movies: Movie[] }) => {
  return (
    <div className="flex-shrink-0 bg-white p-8 md:basis-1/3">
      <h2 className="mb-4 text-xl font-bold">Recommended for You</h2>
      <div>
        {movies.map((movie) => (
          <Link key={movie.id} href={`/movies/${movie.id}`}>
            <article key={movie.id} className="mb-4">
              <img
                src={movie.poster_url}
                alt={`Movie Poster for ${movie.title}`}
                className="mb-2 h-56 w-full rounded-lg object-cover"
              />
              <div className="flex items-center justify-between p-4">
                <h3 className="text-lg font-semibold">
                  {movie.title}{" "}
                  <span className="font-normal">({movie.release_year})</span>
                </h3>
                <p className="text-sm text-gray-500">
                  {movie.imdb_rating.toFixed(1)} ⭐
                </p>
              </div>
            </article>
          </Link>
        ))}
      </div>
      <Link
        href="/movies/recommendations"
        className="text-lg font-medium text-blue-600 hover:underline dark:text-blue-500"
      >
        See more
      </Link>
    </div>
  );
};
