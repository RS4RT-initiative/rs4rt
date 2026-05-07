import { LucideIcon, ArrowRight, Send } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  items: Array<{
    name: string;
    url?: string;
    description?: string;
  }>;
  detailsPath?: string;
  detailItems?: Array<{ name: string; description?: string }>;
  cta?: {
    label: string;
    url: string;
  };
}

const CategoryCard = ({ title, description, icon: Icon, items, detailsPath, cta }: CategoryCardProps) => {
  const content = (
    <Card className="group h-full transition-all duration-300 hover:shadow-[var(--shadow-hover)] bg-gradient-to-br from-card to-secondary/30">
      <CardHeader>
        <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
          <Icon className="h-7 w-7 text-primary-foreground" />
        </div>
        <CardTitle className="text-xl font-bold text-foreground">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-3">
          {items.map((item, index) => (
            <li key={index} className="group/item">
              {item.url && !detailsPath ? (
                item.url.startsWith("/") ? (
                  <Link
                    to={item.url}
                    className="flex items-start gap-2 text-sm transition-colors hover:text-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60 group-hover/item:bg-primary" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      )}
                    </div>
                  </Link>
                ) : (
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2 text-sm transition-colors hover:text-primary"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60 group-hover/item:bg-primary" />
                    <div>
                      <div className="font-medium">{item.name}</div>
                      {item.description && (
                        <div className="text-xs text-muted-foreground">{item.description}</div>
                      )}
                    </div>
                  </a>
                )
              ) : (
                <div className="flex items-start gap-2 text-sm">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary/60" />
                  <div>
                    <div className="font-medium text-foreground">{item.name}</div>
                    {item.description && (
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    )}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>

        {cta && (
          <Button
            asChild
            className="mt-5 w-full gap-2 bg-primary text-primary-foreground hover:opacity-90 shadow-[var(--shadow-card)]"
            onClick={(e) => e.stopPropagation()}
          >
            <a href={cta.url} target="_blank" rel="noopener noreferrer">
              <Send className="h-4 w-4" />
              {cta.label}
            </a>
          </Button>
        )}

        {detailsPath && (
          <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
            View all resources
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  if (detailsPath) {
    return <Link to={detailsPath}>{content}</Link>;
  }

  return content;
};

export default CategoryCard;
