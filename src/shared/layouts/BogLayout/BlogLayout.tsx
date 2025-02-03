import BlogHeroSwction from "@/pages/Blog/components/BlogHeroSection";
import BlogCardSection from "@/pages/Blog/components/BlogCardSection";
import BlogHighlightSection from "@/pages/Blog/components/BlogHighlightSection";

const BlogLayout = () => {
  return (
    <>
      <div className="p-6 lg:p-12">
        <BlogHeroSwction />
        <BlogCardSection />
        <BlogHighlightSection />
        <BlogCardSection />
      </div>
    </>
  );
};

export default BlogLayout;
