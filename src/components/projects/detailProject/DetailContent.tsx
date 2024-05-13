import MarkdownBox from "@/components/markdown/MarkdownBox";

type ContentListItem = {
  title: string;
  detail?: string[];
};

type DetailContentProps = {
  contentList: ContentListItem[];
};

export default function DetailContent({ contentList }: DetailContentProps) {
  return (
    <ul className="text-base md:text-lg">
      {contentList.map((item, idx) => (
        <li key={`${item.title}-${idx}`}>
          <dl>
            <dt className="bg-stone-200 p-2 pl-4 mb-2 font-semibold selection:bg-stone-400">
              {item.title}
            </dt>
            {item.detail?.map((detailItem, idx) => (
              <dd
                key={`${detailItem}-${idx}`}
                className="list-item list-disc ml-6 marker:text-blue_color my-1 last:mb-4"
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
