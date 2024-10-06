import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div className={clsx("px-5 pb-20 pt-48 text-center")}>
          <h1 className={clsx("mb-5 text-7xl font-black")}>
            ご自由にお取りください.com
          </h1>
          <p className={clsx("text-9xl")}>🤲</p>
        </div>
        <div
          className={clsx("flex flex-col gap-24 bg-gray-100 px-5 pb-52 pt-32")}
        >
          <section>
            <div
              className={clsx(
                "flex flex-row-reverse items-center justify-center gap-5"
              )}
            >
              <div>
                <h2 className={clsx("mb-5 text-4xl")}>一問一答メーカー</h2>
                <p className={clsx("max-w-md text-xl")}>
                  オリジナルの一問一答が作成できるアプリです。学習にお役立てください。
                </p>
              </div>
              <div>
                <Link
                  href={"https://question-and-answer.gojiyuuniotorikudasai.com"}
                  target="_blank"
                >
                  <Image
                    src={"/question-and-answer.png"}
                    width={1200}
                    height={482}
                    className={clsx("max-w-xl")}
                    alt="一問一答メーカー"
                  />
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div
              className={clsx(
                "flex flex-row-reverse items-center justify-center gap-5"
              )}
            >
              <div>
                <h2 className={clsx("mb-5 text-4xl")}>ステメモ</h2>
                <p className={clsx("max-w-md text-xl")}>
                  簡易メモアプリです。ちょっとした用事やお買い物のメモにどうぞ。
                </p>
              </div>
              <div>
                <Link
                  href={"https://sutememo.gojiyuuniotorikudasai.com"}
                  target="_blank"
                >
                  <Image
                    src={"/sutememo.png"}
                    width={1200}
                    height={482}
                    className={clsx("max-w-xl")}
                    alt="ステメモ"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className={clsx("bg-gray-100 pb-7")}>
        <p className={clsx("text-center text-sm tracking-wide")}>
          <small>© 2024 ご自由にお取りください.com</small>
        </p>
      </footer>
    </>
  );
}
