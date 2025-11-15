import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Large, Muted } from "@/components/ui/typography";
import { CONTACT } from "@/lib/constants";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground rounded-md font-bold text-lg">
            А
          </div>
          <div className="flex flex-col">
            <Large className="leading-tight">СК Архитектор</Large>
            <Muted className="text-xs">Строительная компания</Muted>
          </div>
        </Link>

        {/* Навигация */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Главная
          </Link>
          <Link href="/services" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Услуги
          </Link>
          <Link href="/projects" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Проекты
          </Link>
          <Link href="/about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            О нас
          </Link>
          <Link href="/contact" className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Контакты
          </Link>
        </nav>

        {/* Контактная информация и кнопка */}
        <div className="flex items-center space-x-4">
          <div className="hidden lg:flex flex-col items-end">
            <a href={`tel:${CONTACT.phone.link}`} className="text-sm font-semibold hover:text-primary transition-colors">
              {CONTACT.phone.display}
            </a>
            <Muted className="text-xs">{CONTACT.workingHours}</Muted>
          </div>
          <Button>
            Заказать звонок
          </Button>
        </div>
      </div>
    </header>
  );
}

