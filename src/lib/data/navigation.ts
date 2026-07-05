export interface NavItem {
  label: string
  href: string
}

export const WHATSAPP_URL = "https://u.tatvacare.in/r/mDN7hS"

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]

export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Static", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "/contact" },
  { label: "Appointment", href: WHATSAPP_URL },
]

export const utilityLinks: NavItem[] = [
  { label: "Style Guide", href: "#" },
  { label: "Instructions", href: "#" },
  { label: "Changelog", href: "#" },
  { label: "Licenses", href: "#" },
  { label: "Privacy Policy", href: "#" },
]

export interface ContactInfo {
  icon: string
  text: string
  href: string
}

export const contactInfo: ContactInfo[] = [
  { icon: "📞", text: "+91 8870445185", href: "tel:+918870445185" },
  { icon: "✉️", text: "hello@amethystskinclinic.com", href: "mailto:hello@amethystskinclinic.com" },
]