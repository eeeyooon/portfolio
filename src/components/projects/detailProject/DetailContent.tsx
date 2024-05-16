import dynamic from "next/dynamic";

type ContentListItem = {
  title: string;
  detail?: string[];
};

type DetailContentProps = {
  contentList: ContentListItem[];
};

const MarkdownBox = dynamic(() => import("@/components/markdown/MarkdownBox"));

export default function DetailContent({ contentList }: DetailContentProps) {
  return (
    <ul className="text-base md:text-lg">
      {contentList.map((item, idx) => (
        <li key={`${item.title}-${idx}`}>
          <dl>
            <dt className="bg-stone-200 p-2 pl-4 mb-2 font-semibold selection:bg-stone-400 shadow-none">
              {item.title}
            </dt>
            {item.detail?.map((detailItem, idx) => (
              <dd
                key={`${detailItem}-${idx}`}
                className="list-item list-disc ml-6 marker:text-blue_color my-[6px] last:mb-8"
              >
                <MarkdownBox>{detailItem}</MarkdownBox>
              </dd>
            ))}
          </dl>
        </li>
      ))}
    </ul>
  );
}
