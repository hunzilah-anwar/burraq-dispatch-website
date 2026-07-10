import { Link } from "react-router-dom";
import { blogsData } from "../data/blogsData";

const Blog = () => {
  return (
    <>
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494412651409-8963ce7935a7?auto=format&fit=crop&w=2000&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />

        <div className="relative z-10 text-center px-5">
          <h1 className="text-5xl lg:text-7xl font-black text-white mb-4">
            Our Blog
          </h1>

          <p className="text-slate-200 max-w-2xl mx-auto">
            Industry insights, trucking tips, dispatching strategies, and
            logistics updates.
          </p>
        </div>
      </section>

      {/* Blogs */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-5">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogsData.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="group relative overflow-hidden border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-[0_25px_60px_rgba(0,0,0,0.12)]"
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category */}
                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md">
                      {blog.category}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="absolute bottom-5 left-5">
                    <span className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900">
                      {blog.date}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7">
                  <h2 className="mb-4 text-2xl font-extrabold leading-tight text-slate-900 transition-colors duration-300 group-hover:text-primary">
                    {blog.title}
                  </h2>

                  <p className="mb-6 line-clamp-3 text-slate-600 leading-relaxed">
                    {blog.excerpt}
                  </p>

                  <span className="text-sm group-hover:text-main font-semibold text-slate-500">
                    Read Article →
                  </span>
                </div>

                {/* Glow Effect */}
                <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl transition-opacity duration-500 group-hover:opacity-100 opacity-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
