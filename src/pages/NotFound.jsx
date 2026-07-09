import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <main className="error-page flex justify-center items-center flex-col w-full h-[100dvh] gap-8 p-4">
      <div className="error-img">
        <img src="/img/404.png" alt="404 image" />
      </div>
      <h2>#PageNotFound</h2>
      <Link to="/" className="btn-solid">
        Back home
      </Link>
    </main>
  );
};
