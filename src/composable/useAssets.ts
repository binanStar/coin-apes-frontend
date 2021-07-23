export default function useAssets() {
  const env = import.meta.env.MODE;

  const svgs =
    env === 'development'
      ? import.meta.globEager('/src/assets/*.svg')
      : import.meta.globEager('/dist/assets/*.svg');

  const pngs =
    env === 'development'
      ? import.meta.globEager('/src/assets/*.png')
      : import.meta.globEager('/*.png');

  // for netli
  var ce = import.meta.globEager('/dist/assets/*.svg');
  console.log(ce);
  var ce2 = import.meta.globEager('/assets/*.svg');
  console.log(ce2);
  var ce3 = import.meta.globEager('.*.svg');
  console.log(ce3);

  const about =
    svgs[env === 'development' ? '/src/assets/aboutImage.svg' : 'aboutImage.svg'].default;

  return {
    about,
  };
}
