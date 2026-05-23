import ServicesClient from "./ServicesClient";

export const metadata = {
  title: "Treatments & Services | Amethyst Skin Clinic",
  description: "Explore our advanced dermatology and aesthetic treatments. Detailed services for hair loss, acne scars, pigmentation, vitiligo, and minor clinical procedures.",
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function ServicesPage(props: { searchParams: SearchParams }) {
  const resolvedParams = await props.searchParams;
  const initialCategory = typeof resolvedParams.category === "string" ? resolvedParams.category : undefined;

  return <ServicesClient initialCategory={initialCategory} />;
}
