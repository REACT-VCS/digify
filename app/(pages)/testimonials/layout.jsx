import { GetData } from "@/app/(lib)/fetch";
export const generateMetadata = async () => {
  let metaData = await GetData("SiteMeta/testimonials");
  return {
    title: `Digify - ${metaData[0].title} | Digital Agency`,
    description: metaData[0].description,
    keywords: metaData[0].keywords,
    openGraph: {
      images: metaData[0].image,
    },
  };
};
const Layout = ({ children }) => {
  return children;
};

export default Layout;
