interface SeoOptions {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export const useSeo = (options: SeoOptions) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const defaultTitle = 'ihsanbakidogan.com';
  const defaultDescription = 'Kişisel blog ve portföy sitesi';
  const defaultImage = '/logo.png';
  const baseUrl = 'https://ihsanbakidogan.com';

  const title = computed(() => options.title || defaultTitle);
  const description = computed(() => options.description || defaultDescription);
  const image = computed(() => options.image || defaultImage);
  const url = computed(() => options.url || `${baseUrl}${route.path}`);

  useHead({
    title: title,
    meta: [
      {
        name: 'description',
        content: description,
      },
      // Open Graph
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:image',
        content: image,
      },
      {
        property: 'og:url',
        content: url,
      },
      // Twitter
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: image,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: url,
      },
    ],
  });
};
