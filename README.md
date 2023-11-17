# ReelTalk

## About the Project

Connect with Movie Enthusiasts - Watch, Chat and Action!

ReelTalk is an engaging app crafted by movie lovers, for movie lovers. More than just a database, it's a community hub for sharing and discovering films. Our app brings cinema enthusiasts together, offering a space to explore trending movies, delve into favourite genres, and chat about film with peers. ReelTalk aims to redefine movie exploration and discussion, making it your essential destination for all things cinema.

![Demo Screenshot](https://github.com/RGBlife/ReelTalk/assets/47285194/88337102-6e16-4f50-a438-d7819ce549ff)



## Built with
![Next.js](https://img.shields.io/badge/Next.js-v14.0.0-blue.svg)
![T3 Stack](https://img.shields.io/badge/T3%20Stack-Next.js%20%2B%20TS%20%2B%20Tailwind-blue.svg)
![DaisyUI](https://img.shields.io/badge/DaisyUI-v3.9.4-ff69b4.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v2.2.19-blueviolet.svg)
![Prisma](https://img.shields.io/badge/Prisma-5.1.1-brightgreen.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-v5.2.2-blue.svg)
![Supabase](https://img.shields.io/badge/Supabase-v2.38.4-orange.svg)
![React Icons](https://img.shields.io/badge/React%20Icons-v4.12.0-lightgrey.svg)
![date-fns](https://img.shields.io/badge/date--fns-v2.30.0-yellow.svg)
![NextAuth.js](https://img.shields.io/badge/NextAuth.js-v4.23.0-blue.svg)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-v7.15.4-ff69b4.svg)
![Zod](https://img.shields.io/badge/Zod-v3.22.4-lightgrey.svg)


## Features

### Home Page:
- **Trending Movies**: Discover the latest and most popular movies, ranked by real-time user votes.
- **Most Reviewed Movies**: Explore films that are sparking the most conversation, featuring a selection of recent reviews.

### All Movies:
- A comprehensive database where users can search for specific movies.
- Detailed movie information to satisfy your cinematic curiosity.

### Profile Customisation:
- Personalise your experience with a custom avatar.
- Track your movie journey with 'Watch' and 'Seen' lists.
- Set your movie preferences to tailor your ReelTalk experience.

### Recommendations:
- A curated list of movie suggestions based on your genre preferences and unique weighting system.
- Personalised recommendations to ensure you discover films that truly resonate with your taste.

### Account Management:
- Easy and secure login/out process.
- Manage your account settings and preferences effortlessly.

## Coming soon

### Chatroom:
- Connect with other users in genre-specific chat rooms.
- Discuss, debate, and share insights about movies with a community of film lovers.


## Building from source
```sh
# Clone the project:
git clone https://github.com/RGBlife/ReelTalk
cd ReelTalk

# Install the dependencies:
npm i

# Run the docker
docker-compose up

#Configure `.env` File:
#Add the details below, username and password can be any string you like and the database name will need to match PostgreSQL container created by default
    - Example:
      ```makefile
      POSTGRES_USER=USERNAME
      POSTGRES_PASSWORD=PASSWORD
      POSTGRES_DB=DATABASE_NAME
#This URL tells Prisma how to connect to your PostgreSQL database running in Docker. The format is 
      DATABASE_URL=postgresql://USERNAME:PASSWORD@localhost:5555/DATABASE_NAME?schema=public

# Running the application:
npm run dev
```


## How do I deploy this?

Deploying this application involves setting up a database with Supabase, configuring NextAuth for authentication, and deploying the app using Vercel. Follow these steps:

### Setting Up Supabase

1. **Create a Supabase Account**: Sign up at [Supabase](https://supabase.com/).

2. **Create a New Project**: Fill in the project details, including name and password.

3. **Database Setup**: Use the Supabase dashboard to configure your database.

4. **Get Database URL**: In the 'Settings' > 'API' section, note your database URL and keys.

### Configuring NextAuth

1. **Set up NextAuth**: In your application, configure NextAuth for handling authentication.

2. **Generate a NextAuth Secret**: Create a secure secret for NextAuth. You can generate a new secret on the command line with:
```openssl rand -base64 32```

3. **Configure `.env` File**:
    - Add the NextAuth secret and Supabase keys to your `.env` file.
    - Example:
      ```makefile
      NEXTAUTH_SECRET=your_generated_secret
      DATABASE_URL=your_supabase_url
      ```

### Deploying with Vercel

1. **GitHub Repo Setup**: Push your code to GitHub.

2. **Create a Vercel Account**: Sign up at [Vercel](https://vercel.com/).

3. **Connect GitHub Repo to Vercel**: Create a new Vercel project linked to your GitHub repo.

4. **Configure Environment Variables in Vercel**:
    - Add the same variables from your `.env` file to Vercel's 'Environment Variables' section.

5. **Deploy the Application**: Allow Vercel to build and deploy your app.

6. **Verify Deployment**: Check the provided URL for your live application.

### Additional Notes

- Ensure that local and Vercel environment variables are consistent.
- Adjust build commands and settings in Vercel as needed for your specific application requirements.

Follow the deployment guides for [Vercel](https://create.t3.gg/en/deployment/vercel), [Netlify](https://create.t3.gg/en/deployment/netlify) and [Docker](https://create.t3.gg/en/deployment/docker) for more information.
