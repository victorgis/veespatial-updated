import { useEffect } from "react";
import { useLocation } from "react-router-dom";

type SeoProps = {
  title: string;
  description: string;
  keywords: string;
  image?: string;
  noindex?: boolean;
};

const SITE_NAME = "Veespatial";
const BASE_URL = "https://veespatial.com";
const DEFAULT_IMAGE = `${BASE_URL}/assets/victoressang-B2d1aD--.jpg`;

function setMetaByName(name: string, content: string) {
  let tag = document.querySelector(`meta[name=\"${name}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("name", name);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setMetaByProperty(property: string, content: string) {
  let tag = document.querySelector(`meta[property=\"${property}\"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute("property", property);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setCanonical(url: string) {
  let tag = document.querySelector("link[rel='canonical']") as HTMLLinkElement | null;
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", "canonical");
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", url);
}

export default function Seo({
  title,
  description,
  keywords,
  image = DEFAULT_IMAGE,
  noindex = false,
}: SeoProps) {
  const location = useLocation();

  useEffect(() => {
    const canonicalUrl = `${BASE_URL}${location.pathname}`;
    const fullTitle = `${title} | ${SITE_NAME}`;

    document.title = fullTitle;
    setCanonical(canonicalUrl);

    setMetaByName("description", description);
    setMetaByName("keywords", keywords);
    setMetaByName("robots", noindex ? "noindex, nofollow" : "index, follow");

    setMetaByProperty("og:title", fullTitle);
    setMetaByProperty("og:description", description);
    setMetaByProperty("og:type", "website");
    setMetaByProperty("og:url", canonicalUrl);
    setMetaByProperty("og:image", image);
    setMetaByProperty("og:site_name", SITE_NAME);

    setMetaByName("twitter:card", "summary_large_image");
    setMetaByName("twitter:title", fullTitle);
    setMetaByName("twitter:description", description);
    setMetaByName("twitter:image", image);
  }, [title, description, keywords, image, noindex, location.pathname]);

  return null;
}
