import clsx from "clsx";
import Link from "next/link";

type Props = {
  url: string;
};

export default function UseButton(props: Props) {
  const { url } = props;

  return (
    <>
      <Link
        href={url}
        className={clsx(
          "rounded-full border-2 border-transparent bg-orange-500 px-12 py-2.5 font-medium text-white transition-colors hover:border-orange-500 hover:bg-white hover:text-orange-500"
        )}
        target="_blank"
      >
        使ってみる
      </Link>
    </>
  );
}
