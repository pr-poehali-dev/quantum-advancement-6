import type { ReactNode } from "react"

export interface TableData {
  headers: string[]
  rows: string[][]
}

export interface Section {
  id: string
  title: string
  subtitle?: ReactNode
  content?: string
  items?: string[]
  groups?: { label: string; items: string[] }[]
  table?: TableData
  schema?: string
  image?: string
  tag?: string
  showButton?: boolean
  buttonText?: string
}

export interface SectionProps extends Section {
  isActive: boolean
}