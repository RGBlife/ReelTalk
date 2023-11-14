import { useSession } from "next-auth/react";

export const useAuthUser = () => {
  const session = useSession();

  return session?.data?.user;
};
