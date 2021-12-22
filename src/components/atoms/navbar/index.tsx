import { Checkbox, STYLE_TYPE } from "baseui/checkbox";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { login, logout } from "~/features/userSlice";
import { useAppDispatch } from "~/hooks/useRTK";

const Navbar: React.FC = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatchReduxStore();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  const dispatchReduxStore = () => {
    if (status === "authenticated") {
      dispatch(login({ displayName: session?.user.name }));
    } else {
      dispatch(logout());
    }
  };

  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDark(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  return (
    <div className={styles.navbar}>
      <div>
        <Link href="/">
          <a>サイトロゴ</a>
        </Link>
      </div>
      <div className={styles.spacer} />
      {isDark !== null && (
        <div className={styles["dark-mode-button-container"]}>
          <span className={styles["dark-mode-button-left-label"]}>Light</span>
          <Checkbox
            checked={isDark}
            onChange={() => {
              const theme = isDark ? "light" : "dark";

              // bodyのcolor-themeにthemeを手動でセットし切り替え
              window.document.body.setAttribute("color-theme", theme);

              setIsDark(!isDark);
            }}
            checkmarkType={STYLE_TYPE.toggle_round}
            overrides={{
              Toggle: {
                style: () => ({
                  backgroundColor: "var(--border-color)",
                }),
              },
            }}
          />
          <span className={styles["dark-mode-button-right-label"]}>Dark</span>
        </div>
      )}
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
