import {
  defineTheme,
  directory,
  group,
  link,
  social,
} from '@neato/guider/theme';
import { Logo } from './components/Logo';
import { NextSeo } from 'next-seo';
import coverUrl from './public/cover.jpg';
import faviconUrl from './public/image.png';

const starLinks = [
  link('GitHub', 'https://github.com/JelLee11/FNovels-v2', {
    style: 'star',
    newTab: true,
    icon: 'akar-icons:github-fill',
  }),
  link('Discord', '/links/discord', {
    style: 'star',
    newTab: true,
    icon: 'fa6-brands:discord',
  }),
];

export default defineTheme({
  github: 'JelLee11/FNovels-v2',
  navigation: [
    link('Discord', '/links/discord', {
      style: 'star',
      newTab: true,
      icon: 'mdi:discord',
    }),
    link('Donate', 'https://ko-fi.com/skyfreak', {
      style: 'star',
      newTab: true,
      icon: 'mdi:coffee',
    }),
    link('Download now', '/download', {
      style: 'star',
      newTab: true,
    }),
  ],
  contentFooter: {
    text: 'Made with <3 - @JelLee + 1Anime',
    editRepositoryBase: 'https://github.com/1Anime/FNovels-Docs',
    socials: [
      social.github('https://github.com/JelLee11'),
      social.discord('/links/discord'),
    ],
  },
  meta: (pageMeta) => (
    <NextSeo
      {...{
        title: `${pageMeta.title ?? "Download and enjoy free unlimited official/fan translated novels"} | FNovels`,
        description:
          pageMeta.description ??
          'FNovels is a free and open source novel app, no ads, no tracking, no nonsense.',
        openGraph: {
          images: [
            {
              url: coverUrl.src,
            },
          ],
          title: `${pageMeta.title ?? "Download and enjoy free unlimited official/fan translated novels"} | FNovels`,
          description:
            pageMeta.description ??
            'FNovels is a free and open source novel app, no ads, no tracking, no nonsense.',
        },
        twitter: {
          cardType: 'summary_large_image',
        },
        additionalLinkTags: [
          {
            href: faviconUrl.src,
            rel: 'icon',
            type: 'image/x-icon',
          },
        ],
      }}
    />
  ),
  settings: {
    logo: () => <Logo />,
    backgroundPattern: 'flare',
    colors: {
      primary: '#B8860B', // DarkGoldenRod
      primaryLighter: '#CD853F', // Peru
      primaryDarker: '#8B5A2B', // SaddleBrown
      background: '#0A0A0A', // Darker background
      backgroundLighter: '#1C1C1C', // Slightly lighter dark background
      backgroundLightest: '#2E2E2E', // Even lighter dark background
      backgroundDarker: '#000000', // Pure black for maximum darkness
      line: '#FFD700', // Gold for lines
      text: '#E0E0E0', // Light gray for better readability
      textLighter: '#FFFFFF', // White for lighter text
      textHighlight: '#FFD700', // Gold for highlighted text
    },
  },
  directories: [
    directory('main', {
      sidebar: [
        ...starLinks,
        group('Global', [
          link('Download', '/download', { icon: 'mdi:web' }),
          link('Supported Files', '/extension', { icon: 'mdi:extension' }),
          link('Support', '/support', { icon: 'mdi:help' }),
        ]),
        group('Extra', [
          link('API Docs', '/extra/api'),
          link('Selfhost API', '/extra/selfhost'),
        ]),
      ],
    }),
  ],
});
