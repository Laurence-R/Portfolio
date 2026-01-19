'use client'

import { Mail, MapPin, Phone } from 'lucide-react'

export default function Contact() {
    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
                        聯絡我
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        有任何專案想法或合作機會？歡迎與我聯繫
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="font-heading text-2xl font-semibold text-foreground mb-6">
                                聯絡資訊
                            </h3>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground mb-1">Email</div>
                                        <a
                                            href="mailto:contact@example.com"
                                            className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
                                        >
                                            contact@example.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground mb-1">電話</div>
                                        <a
                                            href="tel:+886912345678"
                                            className="text-muted-foreground hover:text-accent transition-colors duration-200 cursor-pointer"
                                        >
                                            +886 912 345 678
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <div className="font-medium text-foreground mb-1">位置</div>
                                        <p className="text-muted-foreground">台灣，台北</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-card border border-border rounded-xl p-8">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                    姓名
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                                    placeholder="您的姓名"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200"
                                    placeholder="your@email.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                    訊息
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={5}
                                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-200 resize-none"
                                    placeholder="您的訊息..."
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 cursor-pointer"
                            >
                                發送訊息
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
