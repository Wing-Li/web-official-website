import Configs from "./src/configs/configs";

const webUrl = Configs.webUrl;
const version = "1";

export default function ImageLoader({src}) {
  if (src?.toString()?.startsWith("http")) {
    return src;
  }
  if (src?.toString()?.startsWith("//")) {
    return `https:${src}`;
  }
  if (src?.toString()?.startsWith("/")) {
    return `${webUrl}${src}?v=${version}`;
  }
  if (src?.toString()?.startsWith("./")) {
    return `${webUrl}${src.substring(2)}?v=${version}`;
  }
  return `${webUrl}${src}?v=${version}`;
}
