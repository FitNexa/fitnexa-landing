import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, User, Star, Quote } from 'lucide-react';
import { useBlogs } from '../data/blogs';

const BlogPost = () => {
    const { id } = useParams();
    const blogs = useBlogs();
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return (
            <div className="pt-48 pb-32 text-center h-screen bg-slate-50">
                <h1 className="text-4xl font-black text-slate-900">ARTICLE NOT FOUND</h1>
                <Link to="/blog" className="mt-8 inline-block text-blue-600 font-bold hover:underline">Return to archives</Link>
            </div>
        );
    }

    const Icon = blog.icon;

    return (
        <div className="bg-white min-h-screen">
            <div className="pt-32 pb-20 border-b border-slate-50 bg-slate-50/50">
                <div className="max-w-4xl mx-auto px-6">
                    <Link to="/blog" className="inline-flex items-center text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] hover:text-slate-950 transition-colors mb-12">
                        <ArrowLeft className="mr-3 w-4 h-4" /> Back to Archives
                    </Link>

                    {blog.imageUrl && (
                        <div className="mb-16 rounded-[48px] overflow-hidden aspect-[21/9] shadow-2xl border-4 border-white">
                            <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div className="space-y-10">
                        <div className="flex items-center space-x-6">
                            <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-2xl">
                                <Icon className="w-8 h-8" />
                            </div>
                            <span className="px-6 py-2 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl shadow-blue-100">
                                {blog.category}
                            </span>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-black text-slate-950 leading-[0.95] tracking-tighter">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-10 pt-6">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center text-slate-400">
                                    <User className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm font-black text-slate-900 leading-none">{blog.author.name}</p>
                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1">{blog.author.role}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <Clock className="w-4 h-4" />
                                <span>{blog.readTime}</span>
                            </div>
                            <div className="flex items-center space-x-3 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span>Industry Standard</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-24">
                <article className="prose prose-slate prose-xl max-w-none font-bold text-slate-700 leading-relaxed space-y-10">
                    <div className="bg-slate-50 p-12 rounded-[40px] border border-slate-100 mb-20 italic font-medium text-slate-500 relative">
                        <Quote className="absolute top-8 left-8 w-12 h-12 text-blue-100 -scale-x-100" />
                        <p className="relative z-10 pl-12">{blog.excerpt}</p>
                    </div>

                    <div className="space-y-8 blog-content-wrapper">
                        {blog.content}
                    </div>
                </article>

                <div className="mt-32 pt-20 border-t border-slate-100">
                    <div className="bg-slate-950 rounded-[48px] p-16 text-center text-white relative overflow-hidden">
                        <div className="relative z-10 space-y-8">
                            <h2 className="text-4xl font-black tracking-tighter">Ready to Build Your Digital Empire?</h2>
                            <p className="text-slate-400 max-w-xl mx-auto font-bold">Stop letting your gym operate on legacy systems. Professionalize with FitNexa today.</p>
                            <button className="px-12 py-5 bg-blue-600 rounded text-xs font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-2xl shadow-blue-900">
                                Contact Enterprise Sales
                            </button>
                        </div>
                        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPost;
