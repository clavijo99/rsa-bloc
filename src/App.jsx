import React from 'react';
import Header from './components/Header';
import BlogPost from './components/BlogPost';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Header />
      <main className="pt-16 "> {/* Ajusta el padding-top para que el contenido no quede debajo del header fijo */}
        <BlogPost />
      </main>
      <Footer />
    </div>
  );
}