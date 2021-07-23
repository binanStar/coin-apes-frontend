export default function useAssets() {
  const env = import.meta.env.MODE;

  const svgs =
    env === 'development'
      ? import.meta.globEager('/src/assets/*.svg')
      : import.meta.globEager('/assets/*.svg');

  console.log(svgs);
  const about =
    svgs[env === 'development' ? '/src/assets/aboutImage.svg' : '/assets/aboutImage.svg'].default;
  console.log(about);

  return {
    about,
  };
}
