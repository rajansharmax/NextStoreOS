import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  title: string;
  href: string;
}

export const useBreadcrumbItems = (): BreadcrumbItem[] => {
  const pathname = usePathname();

  // Split the pathname into an array of segments
  const pathSegments = pathname.split("/").filter(Boolean);

  // Generate breadcrumb items based on the path segments
  const breadcrumbItems: BreadcrumbItem[] = pathSegments.map(
    (segment, index) => {
      // Create the href for each breadcrumb item
      const href = "/" + pathSegments.slice(0, index + 1).join("/");

      return {
        title: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the segment
        href: href,
      };
    }
  );

  return breadcrumbItems;
};
