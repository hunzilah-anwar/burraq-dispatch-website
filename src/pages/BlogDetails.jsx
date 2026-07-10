import { useParams, Navigate } from "react-router-dom";
import { blogsData } from "../data/blogsData";

const BlogDetails = () => {
  const { slug } = useParams();

  const blog = blogsData.find(
    (item) => item.slug === slug
  );

  if (!blog) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <main>
      <section className="relative h-[60vh]">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/60" />

        <div className="absolute inset-0 flex items-center justify-center px-5">
          <div className="text-center">
            <p className="text-primary mb-4">{blog.date}</p>

            <h1 className="text-4xl lg:text-6xl font-black text-white">
              {blog.title}
            </h1>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p>{blog.content}</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default BlogDetails;