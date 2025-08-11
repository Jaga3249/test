import { NextSeo } from "next-seo";

const About = () => {
  return (
    <div>
      <NextSeo
        title="Full Stack Data Engineering | Neural Techanalytics"
        description="Master Python, SQL, Databricks, and Power BI in this 4-month program."
        openGraph={{
          title: "Full Stack Data Engineering | Neural Techanalytics",
          description:
            "Master Python, SQL, Databricks, and Power BI in this 4-month program.",
          images: [
            {
              url: "https://firebasestorage.googleapis.com/v0/b/nta-courses.firebasestorage.app/o/nta-courses-thumbnails%2F6_Data%20Analytics%20Bootcamp%20-%20Excel%20SQL%20Python%20for%20Beginners.jpg?alt=media&token=b1e7fd55-6c76-4298-84c3-2b04901657b0",
              width: 1200,
              height: 630,
              alt: "Full Stack Data Engineering | Neural Techanalytics",
            },
          ],
        }}
      />
    </div>
  );
};
export default About;
