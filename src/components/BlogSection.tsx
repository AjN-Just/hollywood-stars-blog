import React from 'react';
import posts from '../data/posts.json';

const BlogSection: React.FC = () => {
  return (
    <section className="p-4">
      <h2 className="text-2xl font-montserrat font-bold text-rose-neon mb-4">Actualités</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-gris-fonce p-4 rounded">
            <h3 className="font-montserrat font-bold text-rose-neon">{post.title}</h3>
            <p className="text-blanc-casse font-roboto">{post.content}</p>
            {post.type === 'youtube' ? (
              <iframe
                className="w-full h-48 mt-2"
                src={`https://www.youtube.com/embed/${post.link.split('v=')[1]}`}
                title={post.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            ) : (
              <a
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-bleu-neon hover:text-dore"
              >
                Écouter sur Spotify
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;