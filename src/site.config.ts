import type { CardListData, Config, IntegrationUserConfig, ThemeUserConfig } from 'astro-pure/types';
// import type { Label } from 'astro-pure/user';



import type { AuthorConfig, ExtendedConfig } from './types';


export const theme: ThemeUserConfig = {
  // === Basic configuration ===
  /** Title for your website. Will be used in metadata and as browser tab title. */
  title: 'Printf()',
  /** Will be used in index page & copyright declaration */
  author: 'Fajri',
  /** Description metadata for your website. Can be used in page metadata. */
  description: 'Stay hungry, stay foolish',
  /** The default favicon for your site which should be a path to an image in the `public/` directory. */
  favicon: '/favicon/favicon.ico',
  /** Specify the default language for this site. */
  locale: {
    lang: 'en-US',
    attrs: 'en_US',
    // Date locale
    dateLocale: 'en-US',
    dateOptions: {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }
  },
  /** Set a logo image to show in the homepage. */
  logo: {
    src: 'src/assets/avatar.png',
    alt: 'Avatar'
  },

  // === Global configuration ===
  titleDelimiter: '•',
  prerender: true,
  npmCDN: 'https://cdn.jsdelivr.net/npm',

  // Still in test
  head: [
    /* Telegram channel */
    // {
    //   tag: 'meta',
    //   attrs: { name: 'telegram:channel', content: '@cworld0_cn' },
    //   content: ''
    // }
  ],
  customCss: [],

  /** Configure the header of your site. */
  header: {
    menu: [
      { title: 'Blog', link: '/blog' },
      { title: 'Projects', link: '/projects' },
      { title: 'About', link: '/about' }
    ]
  },

  /** Configure the footer of your site. */
  footer: {
    // Year format
    year: `© ${new Date().getFullYear()}`,
    // year: `© 2019 - ${new Date().getFullYear()}`,
    links: [
      // Privacy Policy link
    ],
    /** Enable displaying a “Astro & Pure theme powered” link in your site’s footer. */
    credits: true,
    /** Optional details about the social media accounts for this site. */
    social: { github: 'https://github.com/mfajri11' }
  },

  content: {
    /** External links configuration */
    externalLinks: {
      content: ' ↗',
      /** Properties for the external links element */
      properties: {
        style: 'user-select:none'
      }
    },
    /** Blog page size for pagination (optional) */
    blogPageSize: 8,
    // Currently support weibo, x, bluesky
    share: ['weibo', 'x', 'bluesky']
  }
}

export const integ: IntegrationUserConfig = {
  // Enable page search function
  pagefind: true,
  // Add a random quote to the footer (default on homepage footer)
  // See: https://astro-pure.js.org/docs/integrations/advanced#web-content-render
  quote: {
    // https://developer.hitokoto.cn/sentence/#%E8%AF%B7%E6%B1%82%E5%9C%B0%E5%9D%80
    // server: 'https://v1.hitokoto.cn/?c=i',
    // target: (data) => (data as { hitokoto: string }).hitokoto || 'Error'
    // https://github.com/lukePeavey/quotable
    server: 'https://api.quotable.io/quotes/random?maxLength=60',
    target: `(data) => data[0].content || 'Error'`
  },
  // UnoCSS typography
  // See: https://unocss.dev/presets/typography
  typography: {
    class: 'prose text-base text-muted-foreground',
    // The style of blockquote font, normal or italic (default to italic in typography)
    blockquoteStyle: 'italic',
    // The style of inline code block, code or modern (default to code in typography)
    inlineCodeBlockStyle: 'modern'
  },
  // A lightbox library that can add zoom effect
  // See: https://astro-pure.js.org/docs/integrations/others#medium-zoom
  mediumZoom: {
    enable: false, // disable it will not load the whole library
    selector: '.prose .zoomable',
    options: {
      className: 'zoomable'
    }
  },
  waline: {}
}

export const terms: CardListData = {
  title: 'Terms content',
  list: [
    {
      title: 'Privacy Policy',
      link: '/terms/privacy-policy'
    },
    {
      title: 'Terms and Conditions',
      link: '/terms/terms-and-conditions'
    },
    {
      title: 'Copyright',
      link: '/terms/copyright'
    },
    {
      title: 'Disclaimer',
      link: '/terms/disclaimer'
    }
  ]
}

export const author: AuthorConfig = {
  author: 'Fajri',
  email: 'mfajri805@gmail.com',
  programmingLanguages: ['Go', 'Python', 'SQL', 'Javascript', 'HTML', 'CSS'],
  techSkills: [
    'Postgres',
    'Redis',
    'GRPC',
    'GRPC Ecosystem (golang)',
    'HTTP REST Api',
    'Docker',
    'RabbitMQ',
    'TDD',
    'Unit Testing',
    'Double Test/Mocking',
    'Postman Script',
    'Swagger',
    'Gnu Make'
  ],
  shareToSocials: ['x'],
  experiences: [
    {
      organization: 'PT Bank Rakya Indonesia Tbk',
      location: 'Indonesia',
      activities: [
        {
          period: 'Aug 2023 - present',
          label: 'IT Project Officer (Contract Based)',
          description: `I initiated and implemented comprehensive unit testing to enhance code reliability during deployment and reduce debugging time in testing environments. Additionally, I developed an automated migration feature that enables seamless user transfer from legacy applications or other BRI platforms to our application with just a login, contributing to approximately 15% of the overall migration process. To improve consistency and traceability across the codebase, I also standardized the logging format and established basic logging guidelines, such as wrapping errors instead of overwriting the original`,
          descriptions: [
            `Initiated and implemented comprehensive unit testing to enhance code confidence during deployment and minimize debugging time in testing environments.`,
            `Developed an automated migration feature that seamlessly transfers users from the legacy application or other BRI's platform to our application, which only required user to login, contributing to approximately 15% of the overall migration process.`,
            `Standardized logging format and defined basic logging guidelines to ensure consistency and improve traceability across the code base, for example, do not overwrite the original error but wrapping instead.`
          ]
        },
        {
          period: 'May - July 2023',
          label: 'IT Internship',
          description: `Worked collaboratively in a team of six on a Bank Rakyat Indonesia (BRI) capstone project, addressing real-world banking industry challenges while gaining a solid foundation in web development through both theoretical learning and hands-on practice`,
          descriptions: [
            `Engaged in a capstone project provided by Bank Rakyat Indonesia (BRI), aligning with real-world banking industry challenges.`,
            `Worked collaboratively in a team of 3 backend and 3 frontend developers`,
            `Gained a solid foundation in web development through a combination of theoretical learning and hands-on practice.`
          ]
        }
      ]
    },
    {
      organization: 'Tokopedia',
      location: 'Indonesia',
      activities: [
        {
          period: 'May - Aug 2022',
          label: 'Software Engineer Intern',
          description: `Contributed to developing a distributed rate limiter that reduced malicious OTP requests, lowering system load and operational costs. Refactored unit tests by replacing monkey patching with interface-based mocking for cross-platform compatibility (Linux and macOS). Designed a Grafana dashboard to monitor logging, requests per second, and key metrics including successful requests and error rates.`,
          descriptions: [
            `Contributed to the development of a distributed rate limiter that significantly reduced malicious OTP requests, helping to lower system load and reduce operational costs.`,
            `Refactored unit tests by replacing monkey patching with interface-based mocking, ensuring compatibility across Linux (server), macOS (local developer).`,
            `Created a Grafana dashboard to monitor logging, requests per second (RPS), and key metrics such as successful requests, system errors, and user errors.`
          ]
        }
      ]
    },
    {
      organization: 'GoTo Impact Foundation',
      location: 'Indonesia',
      activities: [
        {
          period: 'March - April 2022',
          label: 'Backend Engineer participant',
          description: `Participated in a GoTo Impact Foundation web development training focused on backend engineering, selected among the top 10% out of more than a thousand participants, which led to an internship opportunity at a leading Indonesian unicorn company. Gained hands-on experience with Ruby on Rails, Test-Driven Development using RSpec, and professional email etiquette, along with training in basic business English and communication skills through CAKAP.`,
          descriptions: [
            `Participated in a web development training program by the GoTo Impact Foundation, focusing on backend engineering. Selected among the top 10% of participants, earning an internship opportunity at one of Indonesia's unicorn companies.`,
            `Learned web development using Ruby and Ruby on Rails, practiced Test-Driven Development (TDD) with RSpec, and gained practical knowledge of professional email etiquette. Also completed training in basic business English and communication skills by CAKAP`
          ]
        }
      ]
    }
  ]
}


const configWithInteg = { ...theme,  integ } as Config
const config = { ...configWithInteg, ...author } as ExtendedConfig<Config, AuthorConfig>
export default config