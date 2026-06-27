"use client";
import { blogPosts } from "@/lib/data/blog";
import { Reveal } from "../ui/RevealAnimation";
import Link from "next/link";
import Image from "next/image";

const featured = blogPosts[0];
const others = blogPosts.slice(1, 2);

export default function Blog() {
  return (
    <section className="py-9 md:py-10 bg-[#F7F3EF]">
      <div className="max-w-[480px] md:max-w-5xl lg:max-w-6xl mx-auto px-6">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 border border-[#E4DFE8] rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#8E5C8F]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#8E5C8F]">Skin Insights</span>
          </div>
          <h2
            className="text-3xl lg:text-4xl text-[#2E2E2E]"
            style={{ fontFamily: "var(--font-dm-serif), serif" }}
          >
            Helpful tips and expert advice
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          {/* Featured Article Card */}
          <Reveal delay={0.1}>
            <Link
              href={`/blog/${featured.id}`}
              className="card-hover bg-white border border-[#E4DFE8] rounded-[40px] overflow-hidden hover:shadow-lg transition-all duration-300 group block"
            >
              <div className="relative w-full h-52 overflow-hidden">
                <Image src={featured.image} alt="" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-300 group-hover:scale-105" />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E5C8F] border border-[#E4DFE8] rounded-full px-3 py-1">
                    {featured.category}
                  </span>
                  <span className="text-xs text-[#6B6570]">{featured.date}</span>
                </div>
                <h3
                  className="text-2xl text-[#2E2E2E] leading-snug mb-6 group-hover:text-[#5A2A5D] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-dm-serif), serif" }}
                >
                  {featured.title}
                </h3>
                <span className="inline-flex items-center gap-2 text-sm font-medium text-[#2E2E2E] border border-[#E4DFE8] rounded-full px-5 py-2 hover:bg-[#5A2A5D] hover:text-white hover:border-[#5A2A5D] transition-all duration-300 cursor-pointer">
                  Read article →
                </span>
              </div>
            </Link>
          </Reveal>

          {/* Sidebar Articles Column */}
          <div className="flex flex-col gap-4">
            {others.map((post, i) => (
              <Reveal key={i} delay={0.15 + i * 0.1}>
                <Link
                  href={`/blog/${post.id}`}
                  className="card-hover group bg-white border border-[#E4DFE8] rounded-[32px] p-6 hover:border-[#8E5C8F] hover:shadow-md transition-all duration-300 flex items-center gap-4"
                >
                  <div className="relative w-16 h-16 rounded-2xl flex-shrink-0 overflow-hidden">
                    <Image src={post.image} alt="" fill sizes="64px" className="object-cover transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] font-medium uppercase tracking-wider text-[#8E5C8F] border border-[#E4DFE8] rounded-full px-2.5 py-0.5">
                        {post.category}
                      </span>
                      <span className="text-[10px] text-[#6B6570]">{post.date}</span>
                    </div>
                    <h3
                      className="text-sm text-[#2E2E2E] group-hover:text-[#5A2A5D] transition-colors duration-300 leading-snug"
                      style={{ fontFamily: "var(--font-dm-serif), serif" }}
                    >
                      {post.title}
                    </h3>
                    </div>
                  </Link>
              </Reveal>
            ))}
            </div>
        </div>

        <Reveal delay={0.5}>
          <div className="flex justify-center mt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 bg-[#5B1F6A] text-white text-xs font-medium uppercase tracking-[0.1em] px-6 py-3 rounded-full hover:bg-[#4A1F4D] transition-all duration-300"
            >
              Read All Articles →
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
