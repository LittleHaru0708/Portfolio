export interface Profile {
  name: string
  nameEn: string
  role: string
  school: string
  department: string
  graduationYear: string
  bio: string
  motto: string | null       // null = 非表示
  avatar: string | null      // null = プレースホルダー表示
  links: {
    github: string
    twitter: string
    email: string
  }
}

export interface Skill {
  name: string
  version: string
  level: number              // 0〜100
  category: string
  capabilities: string[]
  note: string | null
}

export interface Venue {
  name: string
  date: string
}

export interface Work {
  id: number
  title: string
  genre: string
  category: string
  thumbnail: string | null
  screenshots: string[]
  description: string
  tags: string[]
  platform: string[]
  period: string
  team: string
  role: string
  github: string | null
  link: string | null
  venues: Venue[]
  techPoints: string | null
  designNotes: string | null
  implementationTheme: string | null
  troubleshooting: string | null
  performance: string | null
}

export interface GameJam {
  name: string
  date: string
  theme: string
  description: string
  platform: string[]
  role: string
  team: string
  result: string | null
  url: string | null
  reflection: string
}

// union型で入力できる値を制限する
export type CertStatus = '取得済み' | '受験予定' | '取得予定' | '学習中'

export interface Certification {
  name: string
  date: string
  category: string
  score: string | null
  status: CertStatus
}

export interface TimelineItem {
  year: string
  event: string
}

export const profile: Profile = {
  name: "寺田 晴輝",
  nameEn: "Haruto Terada",
  role: "Game Programmer",
  school: "京都コンピュータ学院",
  department: "ゲーム開発学科",
  graduationYear: "2027",
  bio: "ゲームプログラマーを目指して学習中",
  motto: null,
  avatar: null,
  links: {
    github: "https://github.com/LittleHaru0708",
    twitter: "",
    email: "",
  },
};