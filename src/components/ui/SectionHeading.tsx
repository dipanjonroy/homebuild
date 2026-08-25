type SectionHeadingType = {
  label?: string;
  heading: string;
  align?: "left" | "right" | "center";
  variant?: "black" | "white";
};

export default function SectionHeading({
  label,
  heading,
  align,
  variant
}: SectionHeadingType) {
  const alignClass = align === "left" ? "text-left items-start" : align === "right" ? "text-right items-end" : "text-center items-center";
  const colorClass = variant === "white" ? "white-text" : "black-text";
  
  return (
    <div className={`flex flex-col ${alignClass} ${colorClass} gap-6`}>
      {label && <span className="text-sm lg:text-base">{`[ ${label} ]`}</span>}
      <h2 className="heading-two">{heading}</h2>
    </div>
  );
}
