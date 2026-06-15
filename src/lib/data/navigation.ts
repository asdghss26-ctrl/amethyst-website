export interface NavItem {
  label: string
  href: string
}

export const WHATSAPP_URL = "https://wa.me/918870445185?text=Hi%20Amethyst%20Skin%20Clinic%2C%20I%20would%20like%20to%20book%20an%20appointment."

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "#contact" },
]

export const quickLinks: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Service Static", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Contact", href: "#contact" },
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
  { icon: "📍", text: "123 Medical Plaza, Suite 200, New York, NY 10001", href: "#" },
  { icon: "📞", text: "+91 8870445185", href: "tel:+918870445185" },
  { icon: "✉️", text: "example@domain.com", href: "mailto:example@domain.com" },
]