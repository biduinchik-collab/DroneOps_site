type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
};

export function SectionHeading({ eyebrow, title, body, align = "left" }: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="micro-label">{eyebrow}</p>
      <h2 className="heading-lg mt-4">{title}</h2>
      {body ? <p className="body-lead mt-6">{body}</p> : null}
    </div>
  );
}
