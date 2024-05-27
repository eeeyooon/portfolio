import Image from "next/image";

type Props = { stack: string };
export default function StackIcons({ stack }: Props) {
  return (
    <Image
      key={stack}
      className="rounded-sm mx-1"
      src={`/images/icons/${stack}.svg`}
      alt={stack}
      priority
      quality={100}
      width={20}
      height={20}
      style={{ width: 20, height: 20 }}
    />
  );
}
