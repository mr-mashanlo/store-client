import { FC } from 'react';

const SinglePostPage: FC = () => {
  return (
    <>
      <div className="pb-14 bg-[#363636]">
        <header className="py-10">
          <div className="container-block">
            <div className="flex items-center justify-between gap-5">
              <p className="text-xl font-medium uppercase text-[#FFCCCC]">Back</p>
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
        <div className="mt-20">
          <div className="container-block">
            <div>
              <p>Javascript</p>
              <h1 className="mt-4 text-3xl font-bold uppercase text-[#FFCCCC]">Optio saepe debitis</h1>
              <p className="mt-4">Published 01 January 2020</p>
            </div>
            <ul className="mt-12 flex items-center gap-12 font-medium">
              <li>Save to bookmark</li>
              <li>Share post</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="py-14">
        <div className="container-block">
          <div className="flex flex-col gap-6">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi minus hic aperiam eaque distinctio asperiores quas. Vitae sint dignissimos soluta quisquam amet dolore iusto deleniti eum, doloremque et dicta mollitia labore commodi ea voluptates odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi minus hic aperiam eaque distinctio asperiores quas. Vitae sint dignissimos soluta quisquam amet dolore iusto deleniti eum, doloremque et dicta mollitia labore commodi ea voluptates odio.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat sequi minus hic aperiam eaque distinctio asperiores quas. Vitae sint dignissimos soluta quisquam amet dolore iusto deleniti eum, doloremque et dicta mollitia labore commodi ea voluptates odio.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePostPage;