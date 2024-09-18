'use client';

import {
  createContext,
  SetStateAction,
  useContext,
  useState,
} from 'react';

const github_url =
  'https://api.github.com/users';

interface GithubUserInterface {
  login: string;
  avatar_url: string;
  name: string;
  blog: string;
  location: string;
  company: string;
  email: string;
  bio: string;
  twitter_username: string;
  created_at: string;
  public_repos: string;
  followers: string;
  following: string;
}

interface GithubUserContextType {
  githubUser:
    | GithubUserInterface
    | undefined;
  fetchUser: (username: string) => void;
  userSearch: string;
  setUserSearch: React.Dispatch<
    SetStateAction<string>
  >;
}

interface GithubUserProviderProps {
  children: React.ReactNode;
}

export const GithubUserContext =
  createContext<
    GithubUserContextType | undefined
  >(undefined);

export default function GithubUserProvider({
  children,
}: GithubUserProviderProps) {
  const [githubUser, setGithubUser] =
    useState<
      GithubUserInterface | undefined
    >(undefined);
  const [userSearch, setUserSearch] =
    useState('');

  const fetchUser = async (
    username: string
  ) => {
    try {
      const response = await fetch(
        `${github_url}/${username}`
      );
      if (!response.ok) {
        throw new Error(
          'User not found'
        );
      }
      const data =
        await response.json();
      if (!data) {
        throw new Error(
          'No user data found'
        );
      }
      // Zmapowanie obiektu, aby zwrócić tylko pola zdefiniowane w interfejsie
      const mappedUser: GithubUserInterface =
        {
          login: data.login,
          avatar_url: data.avatar_url,
          name: data.name,
          blog: data.blog,
          location: data.location,
          company: data.company,
          email: data.email,
          bio: data.bio,
          twitter_username:
            data.twitter_username,
          created_at: data.created_at,
          public_repos:
            data.public_repos,
          followers: data.followers,
          following: data.following,
        };
      setGithubUser(mappedUser);
    } catch (error) {
      console.error(
        'Error fetching user:',
        error
      );
      setGithubUser(undefined);
    }
  };
  return (
    <GithubUserContext.Provider
      value={{
        githubUser,
        fetchUser,
        userSearch,
        setUserSearch,
      }}
    >
      {children}
    </GithubUserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(
    GithubUserContext
  );
  if (context === undefined) {
    throw new Error(
      'useUser must be used within a UserProvider'
    );
  }
  return context;
};
