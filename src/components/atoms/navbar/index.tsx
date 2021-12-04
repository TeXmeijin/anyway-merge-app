import { useRouter } from "next/router";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import styles from "./styles.module.css";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <a>サイトロゴ</a>
        </Link>
      </div>
      {status === "authenticated" && (
        <div>
          ログイン中：{session?.user.name}さん{" "}
          <button onClick={() => router.push("/dashboard")}>
            ユーザー専用ページ
          </button>{" "}
          <button onClick={() => signOut()}>ログアウト</button>
        </div>
      )}
      {status === "unauthenticated" && (
        <div>
          未ログイン <button onClick={() => signIn()}>ログイン</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
