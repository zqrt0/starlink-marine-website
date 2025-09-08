export interface ContactFormData {
  name: string
  phone: string
  email: string
  message: string
  vesselType: string
}

export interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  image: string
  tags: string[]
}

export interface PricingPlan {
  name: string
  price: string
  period: string
  description: string
  features: string[]
  popular: boolean
}

export interface Service {
  title: string
  description: string
  features: string[]
  image: string
}

export interface NavigationItem {
  name: string
  href: string
}
