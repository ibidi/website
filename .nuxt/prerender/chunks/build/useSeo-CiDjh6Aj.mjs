import { computed } from 'file:///Users/ibidi/Desktop/website/node_modules/vue/index.mjs';
import { d as useRoute, u as useHead } from './server.mjs';

const useSeo = (options) => {
  const route = useRoute();
  const defaultTitle = "ibidi.tr";
  const defaultDescription = "Ki\u015Fisel blog ve portf\xF6y sitesi";
  const defaultImage = "/logo.png";
  const baseUrl = "https://ibidi.tr";
  const title = computed(() => options.title || defaultTitle);
  const description = computed(() => options.description || defaultDescription);
  const image = computed(() => options.image || defaultImage);
  const url = computed(() => options.url || `${baseUrl}${route.path}`);
  useHead({
    title,
    meta: [
      {
        name: "description",
        content: description
      },
      // Open Graph
      {
        property: "og:title",
        content: title
      },
      {
        property: "og:description",
        content: description
      },
      {
        property: "og:image",
        content: image
      },
      {
        property: "og:url",
        content: url
      },
      // Twitter
      {
        name: "twitter:title",
        content: title
      },
      {
        name: "twitter:description",
        content: description
      },
      {
        name: "twitter:image",
        content: image
      }
    ],
    link: [
      {
        rel: "canonical",
        href: url
      }
    ]
  });
};

export { useSeo as u };
//# sourceMappingURL=useSeo-CiDjh6Aj.mjs.map
