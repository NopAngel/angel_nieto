import Link from "next/link";

export default function Button({ links, children, ...props }: any) {
  return (
    <Link href={links}>
      <button
        {...props}
        className="bg-neutral-900 border-[1px] border-neutral-800 text-white rounded-md hover:bg-neutral-950 flex items-center gap-2"
      >
        {children}
      </button>
    </Link>
  );
}
