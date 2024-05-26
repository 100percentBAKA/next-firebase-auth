// ? withAuth is a HOC which will be used to protect our routes
// ? other ways to implement normal authorization and Route protection will be to use middlewares and layout which checks for the user's value

import FullScreenLoader from "@/components/ui/screen-loader";
import { useAuth } from "@/context/auth-context";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const withAuth = (WrapperComponent: React.ComponentType) => {
  const Wrapper = (props: any) => {
    const { user, loading } = useAuth();
    const router = useRouter();
    // ? we can totally avoid using router here
    // ? but we can make the below useEffect run once again when the router is updated
    // ? thus, every time the router changes, we check for route protection

    useEffect(() => {
      if (!loading && !user) {
        router.replace("/sign-in");
      }
    }, [loading, user, router]);

    if (loading || !user) {
      return <FullScreenLoader />;
    }

    return <WrapperComponent {...props} />;
  };

  return Wrapper;
};

export default withAuth;
