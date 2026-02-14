import { motion } from 'framer-motion';
import { Search, ArrowRight, Clock } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { blogs } from '../data/blogs';

const Blog = () => {
    const { t } = useTranslation();
    const [searchQuery, setSearchQuery] = useState('');
    const [activeCategory, setActiveCategory] = useState('All');

    const categories = ['All', ...new Set(blogs.map(b => b.category))];

    const filteredBlogs = blogs.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCategory = activeCategory === 'All' || blog.category === activeCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="pt-32 pb-40 bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                    <div className="max-w-2xl">
                        <span className="text-blue-600 font-black uppercase tracking-[0.4em] text-[10px] mb-4 block">{t('blog.section_label')}</span>
                        <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-none tracking-tighter mb-8">
                            {t('blog.title_line1')} <span className="text-blue-600">{t('blog.title_line2')}</span>
                        </h1>
                        <p className="text-xl text-slate-500 font-bold leading-relaxed border-l-4 border-slate-200 pl-6">
                            {t('blog.description')}
                        </p>
                    </div>

                    <div className="w-full md:w-96">
                        <div className="relative group">
                            <Search className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5 group-focus-within:text-blue-600 transition-colors" />
                            <input
                                type="text"
                                placeholder={t('blog.search_placeholder')}
                                className="w-full pl-16 pr-6 py-5 bg-white border-2 border-slate-100 rounded-2xl focus:border-blue-600 outline-none font-bold text-slate-900 transition-all shadow-sm focus:shadow-xl"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap gap-4 mb-16">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeCategory === cat
                                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                                : 'bg-white text-slate-400 hover:text-slate-900 border border-slate-100'
                                }`}
                        >
                            {cat === 'All' ? t('blog.category_all') : cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog, i) => {
                        const Icon = blog.icon;
                        return (
                            <motion.div
                                key={blog.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                className="group flex flex-col bg-white rounded-[40px] border border-slate-100 overflow-hidden hover:shadow-2xl transition-all h-full"
                            >
                                <div className="p-10 flex-1 flex flex-col space-y-6">
                                    <div className="flex justify-between items-start">
                                        <div className="w-14 h-14 bg-slate-950 rounded-2xl flex items-center justify-center text-white shadow-xl group-hover:rotate-6 transition-transform">
                                            <Icon className="w-7 h-7" />
                                        </div>
                                        <span className="px-4 py-1.5 bg-slate-50 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest">
                                            {blog.category}
                                        </span>
                                    </div>
                                    <h2 className="text-2xl font-black text-slate-950 group-hover:text-blue-600 transition-colors">
                                        {blog.title}
                                    </h2>
                                    <p className="text-slate-500 font-bold leading-relaxed text-sm flex-1">
                                        {blog.excerpt}
                                    </p>
                                    <div className="pt-6 border-t border-slate-50 flex items-center justify-between">
                                        <div className="flex items-center space-x-3 text-[10px] font-black text-slate-400 uppercase tracking-tighter">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>{blog.readTime}</span>
                                        </div>
                                        <Link
                                            to={`/blog/${blog.id}`}
                                            className="flex items-center text-[10px] font-black text-slate-900 uppercase tracking-widest group-hover:translate-x-1 transition-transform"
                                        >
                                            {t('blog.read_more')} <ArrowRight className="ml-2 w-4 h-4 text-blue-600" />
                                        </Link>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {filteredBlogs.length === 0 && (
                    <div className="text-center py-40">
                        <Search className="w-20 h-20 text-slate-100 mx-auto mb-10" />
                        <p className="text-2xl font-black text-slate-900 uppercase">{t('blog.no_results_title')}</p>
                        <p className="text-slate-400 font-bold mt-4">{t('blog.no_results_desc')}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Blog;
