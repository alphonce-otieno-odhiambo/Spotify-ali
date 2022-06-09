import NextAuth from 'next-auth'
import SpotifyProvider from 'next-auth/providers/spotify'

const options = ({
  providers: [
    SpotifyProvider({
        clientId: process.env.SPOTIFY_CLIENT_ID,
        clientSecret: process.env.SPOTIFY_CLIENT_SECRET
    }),
  ],
  pages: {
      signIn: "/auth/signin"
  }
});

