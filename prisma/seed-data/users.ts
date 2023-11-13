import { hash } from "bcrypt";
import { Role, type User } from "prisma/prisma-client";

export const getUsersSeedData = async (): Promise<Omit<User, "id">[]> => {
  const adminPassword = await hash("admin123", 12);
  const userPassword = await hash("user123", 12);

  return [
    {
      username: "oceanic",
      email: "oceanic@gmail.com",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      password: "$2b$12$Tux5AC8Sns/V/SHY8I.Tfe6y4vJX55JOX.LMKV9Q/cn.hTAUV6vXW",
      role: Role.Admin,
      favourite_movie: "The Abyss",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "coralreef",
      email: "coralreef@gmail.com",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      password: "$2b$12$B31pkyvMQMOgH40eBIxKvuJNQ8Rsiq7q6LVRPBiK7n8SvfHEQ4Cqm",
      role: Role.User,
      favourite_movie: "Coraline",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "starfish",
      email: "starfish@gmail.com",
      password: "$2b$12$X3cB.NSTLkju3UVZDjbLjephwXtac2bWO6TEwW7riaC6/OL6DeR22",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "A Star is Born",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "marlinblue",
      email: "marlinblue@gmail.com",
      password: "$2b$12$ZWBIYkK/P6lz9LxQjfBxPuhO4ST/Pkpbrw21jo7HtBaNa/NyomKDG",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Big Fish",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "seaurchin",
      email: "seaurchin@gmail.com",
      password: "$2b$12$OFhN8YCyprYU8MnOq0piZeS8UtTuDSDbvMkvd2.K/VbjVST11gode",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Ocean's Eleven",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "dolphinwave",
      email: "dolphinwave@gmail.com",
      password: "$2b$12$xlaq2/maGdDlR.H3Rfl/G.Oo9si1m7Iqpij7UL.N.ux5/Tqt9Fmqm",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Flipper",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "sharkfin",
      email: "sharkfin@gmail.com",
      password: "$2b$12$FWYopWWcoAPYDnwTkmhntOTWFdK8.q9bJUNR4m.o/pTIT7NEREdzW",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Jaws",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "seahorse",
      email: "seahorse@gmail.com",
      password: "$2b$12$KtClvniJJPF.mL/T2DMPQuMaAYKSAspT9sBuJQKI5nEVBWpCsFm2W",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Seabiscuit",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "clownfish",
      email: "clownfish@gmail.com",
      password: "$2b$12$3gZ/8oFus8548m3ZYdmkTusJf.SYAAPH5rwYPqv9V/kwVVjQlALXu'",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Finding Nemo",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "manta_ray",
      email: "mantaray@gmail.com",
      password: "$2b$12$9wvS.JJmNj3ZjXt5n5Ft3OWe1NnWsr5tI/qGA9QIfBJwL8Hdr2XJq",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "The Deep",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "squidink",
      email: "squidink@gmail.com",
      password: "$2b$12$fMrLPeZ.WhJwzNm3101JWez7JlreRhSu/UGPXq/jAQ8yOJs700D9C",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "20,000 Leagues Under the Sea",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "anemone",
      email: "anemone@gmail.com",
      password: "$2b$12$HzvFebdo1J/ngmsT1Cng2e5JrMizW9vlMtu8Y5/Y02zz25pqjigOa'",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Aquaman",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "pelicanpoint",
      email: "pelicanpoint@gmail.com",
      password: "$2b$12$PxVeayUbRxNZQmErwUzOe.ygVUk9OQ0QGDclYe7tcoNo2XUTNx8Qm",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "The Birds",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "turtlebay",
      email: "turtlebay@gmail.com",
      password: "$2b$12$ynkbOOt/0t19vkoNpFJtHeRBKCs3VbRKoudf.uoUP2xBPvbtyVOLC",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Tortoise and the Hare",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "jellyfish",
      email: "jellyfish@gmail.com",
      password: "$2b$12$i8Xq1Gu7ct3oa9locMqq1.OjO2hxUOYmKZWg763U0Rba3fcMmRtX2",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      role: Role.User,
      favourite_movie: "Finding Nemo",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "testAdmin",
      email: "admin@email.com",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      password: adminPassword,
      role: Role.Admin,
      favourite_movie: "Terminator 2",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
    {
      username: "testUser",
      email: "user@email.com",
      avatar_url:
        "https://api.iconify.design/clarity/avatar-solid.svg?width=360&height=360",
      password: userPassword,
      role: Role.User,
      favourite_movie: "Shrek",
      is_watch_list_public: true,
      is_watched_list_public: true,
    },
  ];
};
