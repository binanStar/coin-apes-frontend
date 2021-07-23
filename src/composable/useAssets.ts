export default function useAssets() {
  const svgs = import.meta.globEager('/src/assets/*.svg');
  const pngs = import.meta.globEager('/src/assets/*.png');
  const jpegs = import.meta.globEager('/src/assets/*.jpeg');

  return {
    aboutImage: svgs['/src/assets/aboutImage.svg'].default,
    btc: pngs['/src/assets/btc.png'].default,
    btcqr: jpegs['/src/assets/btcqr.jpeg'].default,
    coins: svgs['/src/assets/coins.svg'].default,
    egld: pngs['/src/assets/egld.png'].default,
    egldqr: pngs['/src/assets/egldqr.png'].default,
    eth: pngs['/src/assets/eth.png'].default,
    ethqr: pngs['/src/assets/ethqr.png'].default,
    exchanges: svgs['/src/assets/exchanges.svg'].default,
    github: svgs['/src/assets/github.svg'].default,
    info: svgs['/src/assets/info.svg'].default,
    linkedin: svgs['/src/assets/linkedin.svg'].default,
    logo: svgs['/src/assets/logo.svg'].default,
    mail: svgs['/src/assets/mail.svg'].default,
    misc: svgs['/src/assets/misc.svg'].default,
    paypal: svgs['/src/assets/paypal.svg'].default,
    search: svgs['/src/assets/search.svg'].default,
  };
}
