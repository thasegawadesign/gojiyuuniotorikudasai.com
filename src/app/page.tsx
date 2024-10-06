import Image from "next/image";

export default function Home() {
  return (
    <>
      <main>
        <h1>ご自由にお取りください.com</h1>
        <p>🤲</p>
        <section>
          <h2>一問一答メーカー</h2>
          <p>
            オリジナルの一問一答が作成できるアプリです。学習にお役立てください。
          </p>
          <Image
            src={"/question-and-answer.png"}
            width={1200}
            height={482}
            alt="一問一答メーカー"
          />
        </section>
        <section>
          <h2>ステメモ</h2>
          <p>簡易メモアプリです。ちょっとした用事やお買い物のメモにどうぞ。</p>
          <Image
            src={"/sutememo.png"}
            width={1200}
            height={482}
            alt="ステメモ"
          />
        </section>
      </main>
      <footer>
        <p>
          <small>© 2024 ご自由にお取りください.com</small>
        </p>
      </footer>
    </>
  );
}
