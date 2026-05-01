type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeading({ eyebrow, title, body, align = "left", tone = "light" }: SectionHeadingProps) {
  return (
    <div
      data-reveal="section-heading"
      className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}
    >
      <p className="micro-label">{eyebrow}</p>
      <h2 className={["heading-lg mt-4", tone === "dark" ? "text-white" : ""].join(" ")}>{title}</h2>
      {body ? (
        <p className={["body-lead mt-6", tone === "dark" ? "text-[#D9E4EF]" : ""].join(" ")}>{body}</p>
      ) : null}
    </div>
  );
}
