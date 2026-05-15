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
const JSON_LD_ID = "veespatial-jsonld";
const SEARCH_TARGET = `${BASE_URL}/?q={search_term_string}`;

const softwareApplicationsByRoute: Record<string, Array<Record<string, unknown>>> = {
  "/replygenie": [
    {
      "@type": "SoftwareApplication",
      name: "ReplyGenie",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome",
      url: `${BASE_URL}/replygenie`,
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
    },
  ],
  "/receiptwallet": [
    {
      "@type": "SoftwareApplication",
      name: "Receipt Wallet",
      applicationCategory: "BrowserApplication",
      operatingSystem: "Chrome",
      url: `${BASE_URL}/receiptwallet`,
    },
  ],
  "/subscriptiontracker": [
    {
      "@type": "SoftwareApplication",
      name: "Subscription Tracker",
      applicationCategory: "MobileApplication",
      operatingSystem: "Android",
      url: `${BASE_URL}/subscriptiontracker`,
    },
  ],
  "/bibleregimen": [
    {
      "@type": "SoftwareApplication",
      name: "Bible Regimen",
      applicationCategory: "MobileApplication",
      operatingSystem: "Android",
      url: `${BASE_URL}/bibleregimen`,
    },
  ],
};

const breadcrumbNamesByPath: Record<string, string> = {
  "/": "Home",
  "/about": "About",
  "/services": "Services",
  "/projects": "Projects",
  "/liveapps": "Live Apps",
  "/courses": "Courses",
  "/store": "Store",
  "/contacts": "Contact",
  "/replygenie": "ReplyGenie",
  "/receiptwallet": "Receipt Wallet",
  "/subscriptiontracker": "Subscription Tracker",
  "/bibleregimen": "Bible Regimen",
  "/chrome-payment-success": "Payment Success",
};

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

function setJsonLd(payload: Record<string, unknown>) {
  let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = JSON_LD_ID;
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(payload);
}

function buildBreadcrumbSchema(pathname: string) {
  const parts = pathname.split("/").filter(Boolean);
  const crumbs: Array<{ "@type": "ListItem"; position: number; name: string; item: string }> = [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: BASE_URL,
    },
  ];

  if (parts.length === 0) {
    return {
      "@type": "BreadcrumbList",
      itemListElement: crumbs,
    };
  }

  parts.forEach((segment, index) => {
    const path = `/${parts.slice(0, index + 1).join("/")}`;
    crumbs.push({
      "@type": "ListItem",
      position: index + 2,
      name: breadcrumbNamesByPath[path] ?? segment.replace(/-/g, " "),
      item: `${BASE_URL}${path}`,
    });
  });

  return {
    "@type": "BreadcrumbList",
    itemListElement: crumbs,
  };
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

    const personSchema = {
      "@type": "Person",
      name: "Victor Essang",
      alternateName: "Veespatial",
      url: BASE_URL,
      image: DEFAULT_IMAGE,
      jobTitle: "Software Engineer & Geospatial Analyst",
      sameAs: [
        "https://linkedin.com/in/victoressang",
        "https://github.com/victorgis",
        "https://x.com/victor_gis",
        "https://www.youtube.com/@victoressang",
      ],
    };

    const professionalServiceSchema = {
      "@type": "ProfessionalService",
      name: "Veespatial Intelligence",
      url: BASE_URL,
      image: DEFAULT_IMAGE,
      description:
        "Spatial intelligence, GIS consulting, remote sensing analysis, and custom software development services.",
      areaServed: ["Nigeria", "Africa", "Remote"],
      founder: {
        "@type": "Person",
        name: "Victor Essang",
      },
      serviceType: [
        "Spatial Intelligence",
        "Site Selection",
        "Remote Sensing",
        "GIS Consulting",
        "Software Development",
      ],
    };

    const appSchemas = softwareApplicationsByRoute[location.pathname] ?? [];
    const organizationSchema = {
      "@type": "Organization",
      name: "Veespatial",
      url: BASE_URL,
      logo: `${BASE_URL}/veespatial.png`,
      image: DEFAULT_IMAGE,
      founder: {
        "@type": "Person",
        name: "Victor Essang",
      },
      sameAs: [
        "https://linkedin.com/in/victoressang",
        "https://github.com/victorgis",
        "https://x.com/victor_gis",
        "https://www.youtube.com/@victoressang",
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "customer support",
          email: "contact@veespatial.com",
          availableLanguage: ["en"],
        },
      ],
    };

    const websiteSchema = {
      "@type": "WebSite",
      name: SITE_NAME,
      url: BASE_URL,
      potentialAction: {
        "@type": "SearchAction",
        target: SEARCH_TARGET,
        "query-input": "required name=search_term_string",
      },
    };

    const breadcrumbSchema = buildBreadcrumbSchema(location.pathname);

    setJsonLd({
      "@context": "https://schema.org",
      "@graph": [
        organizationSchema,
        websiteSchema,
        personSchema,
        professionalServiceSchema,
        breadcrumbSchema,
        ...appSchemas,
      ],
    });
  }, [title, description, keywords, image, noindex, location.pathname]);

  return null;
}
