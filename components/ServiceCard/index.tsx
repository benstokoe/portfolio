import { useTheme } from "next-themes";

type ServiceCardProps = {
  title: string;
  description: string;
};

export const ServiceCard = ({ title, description }: ServiceCardProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={`w-full rounded-lg transition-all ease-out duration-300 ${
        theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{title}</h1>
      <p className="mt-5 opacity-40 text-xl">{description}</p>
    </div>
  );
};
