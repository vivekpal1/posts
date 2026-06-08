interface projectsType {
  projectName: string
  description: string
  repoLink: string
  previewLink: string
}

type Projects<T> = T[]

export const projects: Projects<projectsType> = [
  {
    projectName: 'kdo',
    description: 'Workspace runtime for AI coding agents. Compiles monorepos into agent-readable representations served over MCP. Detects loops, enforces token budgets, works with Claude Code, OpenClaw, and any MCP-compatible agent.',
    repoLink: 'https://github.com/vivekpal1/kdo',
    previewLink: 'https://github.com/vivekpal1/kdo',
  },
  {
    projectName: 'kdow',
    description: 'Sibling to kdo. Agentic workflows for non-technical professionals: accountants, lawyers, insurance brokers, bankers, teachers. Bringing agent automation to people who do not code.',
    repoLink: 'https://github.com/vivekpal1/kdow',
    previewLink: 'https://github.com/vivekpal1/kdow',
  },
  {
    projectName: 'Kanad',
    description: 'Browser-based, GUI-driven quantum chemistry platform. Simulate molecules on real quantum hardware (IBM, IonQ, Rigetti) without writing quantum code. Side collaboration with Mukul at Deeprealm Labs.',
    repoLink: 'https://github.com/deeprealm-labs/kanad',
    previewLink: 'https://deeprealm.tech',
  },
  {
    projectName: 'Foundation Protocol',
    description: 'ERC-4626 vault on Arbitrum with NAV oracle and liquidity buffer. Pivoted to Solana for Compute Yield token-2022 vault programs.',
    repoLink: 'https://github.com/fdnusd',
    previewLink: 'https://fdnusd.com',
  },
  {
    projectName: 'Wind Network',
    description: 'Solana data streaming and archiving consensus network built on libp2p gossipsub. 2nd place at Jito GRID global hackathon. Supported by Superteam and Solana Foundation.',
    repoLink: 'https://github.com/wind-network',
    previewLink: 'https://windnetwork.ai',
  },
  {
    projectName: 'Tide',
    description: 'Drop-in replacement for Solana geyser plugins to stream data more efficiently.',
    repoLink: 'https://github.com/wind-network/tide',
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
    description: 'Interplanetary Data Machine. Global data management protocol on libp2p gossipsub with unprecedented speed and scale.',
    repoLink: 'https://github.com/ipdm-wg/ipdm',
    previewLink: 'https://ipdm.tech',
  },
  {
    projectName: 'MultiRPC',
    description: 'Solana RPC aggregation system that provides high availability and performance by intelligently routing requests across multiple RPC endpoints.',
    repoLink: 'https://github.com/vivekpal1/multi-rpc',
    previewLink: 'https://github.com/vivekpal1/multi-rpc',
  },
  {
    projectName: 'Shadow',
    description: 'Arcium powered sealed-bid privacy auctions on Solana.',
    repoLink: 'https://github.com/shadowlabs-sol/shadow',
    previewLink: 'https://shadowprotocol.fun/',
  },
  {
    projectName: 'Senshi',
    description: 'In-game tokenomics and cross-chain deposits on Solana via Wormhole.',
    repoLink: 'https://github.com/vivekpal1/vivek',
    previewLink: 'https://github.com/vivekpal1/vivek',
  },
  {
    projectName: 'Solang',
    description: 'A toy language with a self-written compiler that compiles Solana programs in native Rust. Wrote it to learn compiler internals.',
    repoLink: 'https://github.com/vivekpal1/so-lang',
    previewLink: 'https://github.com/vivekpal1/so-lang',
  },
  {
    projectName: 'chat-p2p',
    description: 'P2P chat app built using libp2p, Rust, and WASM.',
    repoLink: 'https://github.com/vivekpal1/chat-p2p',
    previewLink: 'https://github.com/vivekpal1/chat-p2p',
  },
  {
    projectName: 'ShastraOS',
    description: 'Arch-based Linux distribution with distributed package management via Filecoin and IPFS, plus content-addressed time-shift backups.',
    repoLink: 'https://gitlab.com/shastraos',
    previewLink: 'https://gitlab.com/shastraos',
  },
  {
    projectName: 'FOSS-Community',
    description: 'Open-Source Community advocating for open-source standards and culture. 300+ members.',
    repoLink: 'https://github.com/FOSS-Community',
    previewLink: 'https://fosscu.org',
  },
  {
    projectName: 'vi01.xyz',
    description: 'The personal site you are browsing right now.',
    repoLink: 'https://github.com/vivekpal1/posts',
    previewLink: 'https://vi01.xyz',
  }
]
