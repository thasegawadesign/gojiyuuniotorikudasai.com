import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main>
        <div
          className={clsx(
            "px-5 pb-20 pt-48 text-center -lg:pb-16 -lg:pt-40 -md:pt-32 -sm:pb-12 -sm:pt-24"
          )}
        >
          <h1
            className={clsx(
              "mb-5 text-7xl font-black -lg:text-6xl -md:text-5xl -sm:text-4xl"
            )}
          >
            ご自由にお取りください.com
          </h1>
          <p
            className={clsx("text-9xl -lg:text-8xl -md:text-7xl -sm:text-6xl")}
          >
            🤲
          </p>
        </div>
        <div
          className={clsx(
            "flex flex-col gap-24 bg-gray-100 px-5 pb-52 pt-32 -lg:pb-44 -lg:pt-28 -md:gap-16 -md:pb-40 -md:pt-24 -sm:gap-24 -sm:pb-28 -sm:pt-16"
          )}
        >
          <section>
            <div
              className={clsx(
                "flex flex-row-reverse items-center justify-center gap-5 -sm:flex-col -sm:gap-4"
              )}
            >
              <div>
                <h2
                  className={clsx(
                    "mb-5 text-4xl -lg:text-3xl -md:text-2xl -sm:mb-2"
                  )}
                >
                  一問一答メーカー
                </h2>
                <p
                  className={clsx("max-w-md text-xl -lg:text-lg -md:text-base")}
                >
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
                    className={clsx(
                      "max-w-xl -lg:max-w-md -md:max-w-sm -sm:max-w-sm"
                    )}
                    alt="一問一答メーカー"
                  />
                </Link>
              </div>
            </div>
          </section>
          <section>
            <div
              className={clsx(
                "flex flex-row-reverse items-center justify-center gap-5 -sm:flex-col -sm:gap-4"
              )}
            >
              <div>
                <h2
                  className={clsx(
                    "mb-5 text-4xl -lg:text-3xl -md:text-2xl -sm:mb-2"
                  )}
                >
                  ステメモ
                </h2>
                <p
                  className={clsx("max-w-md text-xl -lg:text-lg -md:text-base")}
                >
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
                    className={clsx(
                      "max-w-xl -lg:max-w-md -md:max-w-sm -sm:max-w-sm"
                    )}
                    alt="ステメモ"
                  />
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className={clsx("bg-gray-100 pb-7 -md:pb-6 -sm:pb-3")}>
        <p className={clsx("text-center text-sm tracking-wide")}>
          <small>© 2024 ご自由にお取りください.com</small>
        </p>
      </footer>
    </>
  );
}
