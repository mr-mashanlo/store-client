import { FC } from 'react';

const PostPage: FC = () => {
  return (
    <>
      <header className="py-10">
        <div className="container-block container-block--small">
          <div className="flex items-center justify-between gap-5">
            <p className="text-xl font-medium uppercase text-[#FFCCCC]">Lee Mashanlo</p>
            <nav>
              <ul className="flex items-center justify-between gap-10">
                <li>Search</li>
                <li>Bookmark</li>
                <li>Account</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-10">
        <div className="container-block container-block--small">
          <ul className="mt-10 flex items-center gap-12 font-medium">
            <li>Recent</li>
            <li>Javascript</li>
            <li>Typescript</li>
            <li>React</li>
            <li>Node</li>
          </ul>
          <div className="mt-20 grid gap-16">
            <article>
              <h2 className="text-3xl font-bold uppercase text-[#FFCCCC]">Optio saepe debitis</h2>
              <p className="mt-4">Published 01 January 2020</p>
              <p className="mt-4 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi minus hic aperiam eaque distinctio asperiores quas. Vitae sint dignissimos soluta quisquam amet dolore iusto deleniti eum, doloremque et dicta mollitia labore commodi ea voluptates odio.</p>
            </article>
            <article>
              <h2 className="text-3xl font-bold uppercase text-[#FFCCCC]">Optio saepe debitis</h2>
              <p className="mt-4">Published 01 January 2020</p>
              <p className="mt-4 line-clamp-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi minus hic aperiam eaque distinctio asperiores quas. Vitae sint dignissimos soluta quisquam amet dolore iusto deleniti eum, doloremque et dicta mollitia labore commodi ea voluptates odio.</p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostPage;