
import { cn } from "@/lib/utils";

interface CardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const Card = ({ title, description, icon, className }: CardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300",
      className
    )}>
      {icon && <div className="mb-4 text-blue-500">{icon}</div>}
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
