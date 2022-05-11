const { lazy, Suspense } = React;

const Lazy = lazy(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({ default: () => <Resource /> });
      }, 5000);
    })
);

const Resource = () => (
  <div className='box'>
    <h1>React Lazy</h1>
    <p>This component loaded after 4 seconds, using React Lazy and Suspense</p>
  </div>
);

export default Lazy;
