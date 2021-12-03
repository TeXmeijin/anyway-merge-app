import { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";

const Auth: React.FC = ({ children }) => {
  const { data: session, status } = useSession();
  const isUser = !!session?.user;

  useEffect(() => {
    if (status === "loading") return; // ローディング中は何もしない
    if (!isUser) signIn(); // 未ログインならログイン画面に遷移
  }, [isUser, status]);

  if (isUser) {
    return <>{children}</>;
  }

  return <div>Loading...</div>;
};
export default Auth;
