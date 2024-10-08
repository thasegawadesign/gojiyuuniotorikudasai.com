import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

type Item = {
  name: string;
  description: string;
  image: string;
  width: number;
  height: number;
  url: string;
};

const items: Item[] = [
  {
    name: "一問一答メーカー",
    description:
      "オリジナルの一問一答が作成できるアプリです。学習にお役立てください。",
    image: "/question-and-answer.png",
    width: 1200,
    height: 482,
    url: "https://question-and-answer.gojiyuuniotorikudasai.com",
  },
  {
    name: "ステメモ",
    description:
      "簡易メモアプリです。ちょっとした用事やお買い物のメモにどうぞ。",
    image: "/sutememo.png",
    width: 1200,
    height: 482,
    url: "https://sutememo.gojiyuuniotorikudasai.com",
  },
];

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
          {items.map((item, i) => (
            <section key={item.name}>
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
                    {item.name}
                  </h2>
                  <p
                    className={clsx(
                      "mb-8 max-w-md text-xl -lg:text-lg -md:text-base -sm:mb-0"
                    )}
                  >
                    {item.description}
                  </p>
                  <Link
                    href={item.url}
                    className={clsx(
                      "rounded-full border-2 border-transparent bg-orange-500 px-12 py-2.5 font-medium text-white transition-colors hover:border-orange-500 hover:bg-white hover:text-orange-500 -sm:hidden"
                    )}
                    target="_blank"
                  >
                    利用する
                  </Link>
                </div>
                <div>
                  <Link href={item.url} target="_blank">
                    <Image
                      src={item.image}
                      width={item.width}
                      height={item.height}
                      className={clsx(
                        "max-w-xl -lg:max-w-md -md:max-w-sm -sm:max-w-sm"
                      )}
                      alt={item.name}
                      priority={i === 0 ? true : false}
                    />
                  </Link>
                  <div className={clsx("hidden pt-8 text-center -sm:block")}>
                    <Link
                      href={item.url}
                      className={clsx(
                        "rounded-full border-2 border-transparent bg-orange-500 px-12 py-2.5 font-medium text-white transition-colors hover:border-orange-500 hover:bg-white hover:text-orange-500"
                      )}
                      target="_blank"
                    >
                      利用する
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </main>
      <footer className={clsx("bg-gray-100 pb-5 -sm:pb-3")}>
        <p className={clsx("text-center text-sm tracking-wide")}>
          <small>© 2024 ご自由にお取りください.com</small>
        </p>
      </footer>
    </>
  );
}
