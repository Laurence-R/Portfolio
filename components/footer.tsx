import { Github, Linkedin, Mail } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-xl font-bold text-foreground mb-2">
              張勝麟
            </h3>
            <p className="text-muted-foreground text-sm">
              全端開發者，致力於創造優質的網頁體驗
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">快速連結</h4>
            <ul className="space-y-2">
              {['首頁', '關於', '作品', '經歷', '聯絡'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-accent transition-colors duration-200 text-sm cursor-pointer"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-medium text-foreground mb-4">追蹤我</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="p-2 bg-muted rounded-lg text-muted-foreground hover:text-accent hover:bg-accent/10 transition-all duration-200 cursor-pointer"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
          <p>&copy; {currentYear} 張勝麟. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
