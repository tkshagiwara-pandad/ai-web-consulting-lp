import type { Metadata } from "next";

const contactHref = "https://forms.gle/VpCy2KrsdEUdwrj16";

export const metadata: Metadata = {
  title: "地域中小企業のためのAI・Web活用相談室",
  description:
    "古いHP・止まったSNS・伝わらない文章を、AIで今の商売に合う形へ整えます。地域中小企業向け AI・Web活用アドバイザー 萩原 崇。",
};

const concerns = [
  "ホームページの文章が古いままになっている",
  "SNSを始めたものの、何を書けばよいか分からない",
  "商品やサービスの良さがうまく伝わっていない気がする",
  "Googleマップや検索で見つけてもらう準備が弱い",
  "ChatGPTを使ってみたいが、仕事での使いどころが分からない",
  "広告や求人、チラシの文章を整えたい",
];

const services = [
  "AI・Web活用かんたん診断",
  "ホームページ文章改善",
  "SNS投稿案作成",
  "Googleビジネスプロフィール改善",
  "求人文、チラシ、メール文面の改善",
  "ChatGPT活用セミナー",
  "月額伴走相談",
];

const seminarExamples = [
  {
    title: "中小企業のためのChatGPT入門",
    text: "文章作成、アイデア整理、メール文面など、日々の仕事に近い使い方から始めます。",
  },
  {
    title: "伝わるホームページ文章の整え方",
    text: "専門用語を減らし、初めて見る人にもサービスの価値が伝わる構成を学びます。",
  },
  {
    title: "SNS・Googleマップの見直し講座",
    text: "無理に投稿量を増やす前に、地域のお客様に見つけてもらう基本を整えます。",
  },
];

const diagnosisItems = [
  "今のHP・SNS・Googleマップの状態を確認",
  "優先して直すべき文章や導線を整理",
  "AIで短時間に改善できる作業を提案",
];

const flow = [
  "相談フォームから内容を送信",
  "現状のHP・SNS・資料を確認",
  "改善方針と進め方をご提案",
  "セミナー、単発相談、伴走支援を実施",
];

export default function Home() {
  return (
    <main className="min-h-screen">
      <section className="px-5 pb-16 pt-8 sm:px-8 lg:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 lg:min-h-[680px] lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-[0.16em] text-teal-700">
              地域中小企業のためのAI・Web活用相談室
            </p>
            <h1 className="mt-6 text-4xl font-semibold leading-[1.25] tracking-normal text-slate-950 sm:text-5xl lg:text-6xl">
              古いHP・止まったSNS・伝わらない文章を、
              <span className="block text-teal-800">AIで“今の商売に合う形”へ整えます。</span>
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-700 sm:text-lg">
              地域中小企業、個人事業主の方へ。
              難しい言葉を増やすのではなく、今ある商売の魅力がきちんと伝わるように、AIとWebの使い方を一緒に整理します。
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md bg-teal-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-teal-800"
              >
                相談してみる
              </a>
              <a
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 items-center justify-center rounded-md border border-teal-200 bg-white px-6 py-3 text-sm font-semibold text-teal-800 transition hover:border-teal-400 hover:bg-teal-50"
              >
                セミナーについて相談する
              </a>
            </div>
            <p className="mt-7 text-sm leading-7 text-slate-600">
              地域中小企業向け AI・Web活用アドバイザー
              <span className="ml-2 font-semibold text-slate-900">萩原 崇</span>
            </p>
          </div>

          <div className="w-full max-w-md self-center rounded-lg border border-teal-100 bg-white p-5 shadow-[0_18px_60px_rgba(15,71,78,0.12)]">
            <div className="rounded-md bg-teal-50 p-5">
              <p className="text-xs font-semibold tracking-[0.14em] text-teal-700">FIRST CHECK</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">まずは、今ある発信を棚卸し</h2>
              <div className="mt-5 space-y-3">
                {diagnosisItems.map((item) => (
                  <div key={item} className="flex gap-3 rounded-md bg-white p-3 text-sm leading-6 text-slate-700">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-teal-600" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              {["HP", "SNS", "AI"].map((label) => (
                <div key={label} className="rounded-md border border-slate-100 bg-slate-50 px-3 py-4">
                  <p className="text-lg font-semibold text-teal-800">{label}</p>
                  <p className="mt-1 text-xs text-slate-500">見直し</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Section id="concerns" label="ISSUES" title="こんなお悩みありませんか">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {concerns.map((item) => (
            <div key={item} className="rounded-lg border border-slate-100 bg-white p-5 text-sm leading-7 text-slate-700 shadow-sm">
              {item}
            </div>
          ))}
        </div>
      </Section>

      <Section id="services" label="SUPPORT" title="提供できること">
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div key={service} className="rounded-lg border border-teal-100 bg-white p-5">
              <p className="text-sm font-semibold leading-7 text-slate-900">{service}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="seminar" label="SEMINAR" title="セミナー例">
        <div className="grid gap-4 lg:grid-cols-3">
          {seminarExamples.map((seminar) => (
            <article key={seminar.title} className="rounded-lg border border-slate-100 bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-slate-950">{seminar.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{seminar.text}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section id="diagnosis" label="DIAGNOSIS" title="AI・Web活用かんたん診断">
        <div className="rounded-lg border border-teal-100 bg-teal-50 p-6 sm:p-8">
          <p className="max-w-3xl text-base leading-8 text-slate-700">
            まずは、ホームページ、SNS、Googleビジネスプロフィール、チラシや求人文などを確認し、
            「どこを直すと伝わりやすくなるか」「AIで何を効率化できるか」をやさしく整理します。
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {diagnosisItems.map((item) => (
              <div key={item} className="rounded-md bg-white p-4 text-sm leading-7 text-slate-700">
                {item}
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section id="profile" label="PROFILE" title="講師プロフィール">
        <div className="grid gap-8 rounded-lg border border-slate-100 bg-white p-6 shadow-sm lg:grid-cols-[1fr_2fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold text-teal-700">地域中小企業向け AI・Web活用アドバイザー</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">萩原 崇</h2>
            <div className="mt-5 space-y-2 text-sm text-slate-600">
              <p>Google Cloud Certified Generative AI Leader</p>
              <p>Google Data Analytics 修了</p>
            </div>
          </div>
          <div className="space-y-4 text-sm leading-8 text-slate-700 sm:text-base">
            <p>
              広告・マーケティング領域で、商品・サービスの訴求設計、Web集客、広告運用、改善提案などに携わる。
            </p>
            <p>
              月間広告費約1,000万円規模の運用経験や、D2C商品の売上改善支援など、
              事業者の「伝わる言葉」と「売れる導線」を整える実務を経験。
            </p>
            <p>
              現在は、生成AI、データ分析、BI領域にも専門を広げ、ChatGPTなどのAIを活用した情報発信、
              商品設計、業務改善の支援を行っている。
            </p>
          </div>
        </div>
      </Section>

      <Section id="flow" label="FLOW" title="ご相談の流れ">
        <div className="grid gap-4 md:grid-cols-4">
          {flow.map((item, index) => (
            <div key={item} className="rounded-lg border border-slate-100 bg-white p-5 shadow-sm">
              <p className="text-sm font-semibold text-teal-700">STEP {index + 1}</p>
              <p className="mt-3 text-sm leading-7 text-slate-700">{item}</p>
            </div>
          ))}
        </div>
      </Section>

      <section id="contact" className="px-5 py-16 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-lg bg-slate-950 p-7 text-white sm:p-10">
          <p className="text-sm font-semibold tracking-[0.14em] text-teal-200">CONTACT</p>
          <h2 className="mt-4 text-3xl font-semibold leading-tight sm:text-4xl">
            ご相談は、こちらのフォームから送れます。
          </h2>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-200 sm:text-base">
            セミナー企画、個別相談、ホームページやSNS文章の見直しなど、現在の状況をフォームに入力してください。
            内容を確認したうえで、進め方をご連絡します。
          </p>
          <div className="mt-6 rounded-md border border-teal-200/25 bg-white/8 p-4">
            <p className="text-sm font-semibold text-teal-100">ここから相談できます</p>
            <p className="mt-2 text-sm leading-7 text-slate-200">
              相談内容がまだまとまっていなくても大丈夫です。分かる範囲で入力してください。
            </p>
          </div>
          <div className="mt-7">
            <a
              href={contactHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-full min-h-16 items-center justify-center rounded-md bg-teal-400 px-6 py-4 text-center text-base font-semibold text-slate-950 shadow-[0_16px_36px_rgba(45,212,191,0.26)] transition hover:bg-teal-300 sm:w-auto sm:min-w-[420px]"
            >
              <span>
                相談フォームを開く
                <span className="block pt-1 text-xs font-medium text-slate-800">
                  個別相談・セミナー相談はこちら
                </span>
              </span>
            </a>
          </div>
          <p className="mt-5 text-sm text-slate-300">
            フォームが開きます: forms.gle/VpCy2KrsdEUdwrj16
          </p>
        </div>
      </section>
    </main>
  );
}

function Section({
  id,
  label,
  title,
  children,
}: Readonly<{
  id: string;
  label: string;
  title: string;
  children: React.ReactNode;
}>) {
  return (
    <section id={id} className="px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-7">
          <p className="text-sm font-semibold tracking-[0.14em] text-teal-700">{label}</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-950 sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}
