interface projectsType {
  projectName: string
  description: string
  repoLink: string
  previewLink: string
}

type Projects<T> = T[]

export const projects: Projects<projectsType> = [
  {
    projectName: 'MultiRPC',
    description: 'Solana RPC aggregation system that provides high availability and performance by intelligently routing requests across multiple RPC endpoints.',
    repoLink: 'https://github.com/vivekpal1/multi-rpc',
    previewLink: 'https://github.com/vivekpal1/multi-rpc',
  },
  {
    projectName: 'Tide',
    description: 'A toy lang with self written compiler compatable to compile solana programs in native rust, just wrote to learn things ',
    repoLink: 'https://github.com/vivekpal1/so-lang',
    previewLink: 'https://github.com/vivekpal1/so-lang',
  },
  {
    projectName: 'Tide',
    description: 'Drop-in replacement for Solana geyser plugins to stream data more efficiently.',
    repoLink: 'https://github.com/wind-network/tide',
    previewLink: 'https://windnetwork.ai',
  },
  {
    projectName: 'Wind Network',
    description: 'Distributed network for solana to index and maintain the storage offchain.',
    repoLink: 'https://github.com/wind-network',
    previewLink: 'https://windnetwork.ai',
  },
  {
    projectName: 'wIndexer',
    description: 'Decentralised indexer for Solana.',
    repoLink: 'https://github.com/wind-network/windexer',
    previewLink: 'https://windnetwork.ai/windexer',
  },
  {
    projectName: 'IPDM',
    description: 'Innovating global data management with unprecedented speed and scale.',
    repoLink: 'https://github.com/ipdm-wg/ipdm',
    previewLink: 'https://ipdm.tech',
  },
  {
    projectName: 'Mai: SuperteamVN AI Bot',
    description: 'A Telegram bot powered by local LLM to assist the Superteam Vietnam Web3 community.',
    repoLink: 'https://github.com/vivekpal1/superteam-intern',
    previewLink: 'https://t.me/SuperteamVN_bot',
  },
  {
    projectName: 'Wink',
    description: 'You wanna date? No swaps only bidding!',
    repoLink: 'https://github.com/vivekpal1/wink',
    previewLink: 'https://wink.vercel.app',
  },
  {
    projectName: 'Senshi',
    description: 'In-game tokenomics and crosschain deposits on solana.',
    repoLink: 'https://github.com/vivekpal1/vivek',
    previewLink: 'https://github.com/vivekpal1/vivek',
  },
  {
    projectName: 'MarkItDown',
    description: 'A Markdown Note taking web-app. Easy to use and simple UI.',
    repoLink: 'https://github.com/vivekpal1/markitdown',
    previewLink: 'http://markitdown.vercel.app/',
  },
  {
    projectName: 'chat-p2p',
    description: 'p2p simple chat app built using lip2p, rust and wasm.',
    repoLink: 'https://github.com/vivekpal1/chat-p2p',
    previewLink: 'https://github.com/vivekpal1/chat-p2p',
  },
  {
    projectName: 'shastraos',
    description: 'A linux distro based on distributed package management and secured backups.',
    repoLink: 'https://gitlab.com/shastraos',
    previewLink: 'https://gitlab.com/shastraos',
  },
  {
    projectName: 'FOSS-Community',
    description: ' Open-Source Community that Advocates Open-Source Standards and Culture.',
    repoLink: 'https://github.com/FOSS-Community',
    previewLink: 'https://fosscu.org',
  },
  {
    projectName: 'vivekpal.xyz',
    description: 'The personal website you are browsing at this moment.',
    repoLink: 'https://github.com/vivekpal1/posts',
    previewLink: 'https://vivekpal.xyz',
  }
]
