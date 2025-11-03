import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/10">
      <nav className="fixed top-0 w-full z-50 backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="GraduationCap" className="text-primary" size={32} />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              EduSpace
            </span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#courses" className="text-foreground/80 hover:text-primary transition-colors">
              Курсы
            </a>
            <a href="#advantages" className="text-foreground/80 hover:text-primary transition-colors">
              Преимущества
            </a>
            <a href="#reviews" className="text-foreground/80 hover:text-primary transition-colors">
              Отзывы
            </a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Начать обучение
            </Button>
          </div>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Образование нового{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  поколения
                </span>
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Онлайн-курсы от ведущих экспертов. Учитесь в удобное время, развивайте навыки и достигайте новых высот в карьере.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть видео
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Выбрать курс
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-foreground/60">Студентов</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-secondary">500+</div>
                  <div className="text-sm text-foreground/60">Курсов</div>
                </div>
                <div className="h-12 w-px bg-border" />
                <div>
                  <div className="text-3xl font-bold text-accent">95%</div>
                  <div className="text-sm text-foreground/60">Успех</div>
                </div>
              </div>
            </div>
            
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-3xl" />
              <div className="relative aspect-video rounded-2xl overflow-hidden border border-border shadow-2xl">
                <iframe
                  src="https://ya.ru/video/preview/2298534673416091678"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="advantages" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-foreground/70">
              Образование, которое меняет жизнь
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "Rocket",
                title: "Быстрый старт",
                description: "Начните учиться уже сегодня. Все материалы доступны сразу после регистрации."
              },
              {
                icon: "Users",
                title: "Поддержка сообщества",
                description: "Общайтесь с единомышленниками, делитесь опытом и получайте помощь."
              },
              {
                icon: "Award",
                title: "Сертификаты",
                description: "Получайте официальные сертификаты после завершения каждого курса."
              },
              {
                icon: "Clock",
                title: "Гибкий график",
                description: "Учитесь в удобное время. Доступ к материалам 24/7 с любого устройства."
              },
              {
                icon: "TrendingUp",
                title: "Актуальность",
                description: "Только современные знания и практические навыки от действующих экспертов."
              },
              {
                icon: "Headphones",
                title: "Менторство",
                description: "Персональные консультации с преподавателями и обратная связь по заданиям."
              }
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-border hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold">{item.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="courses" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Популярные курсы
            </h2>
            <p className="text-xl text-foreground/70">
              Выберите направление для развития
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                image: "https://cdn.poehali.dev/projects/d763e1b9-2769-4869-aac5-c2425211b04c/files/2521b03a-43b1-4e4c-82bf-b0e915c9e71e.jpg",
                category: "Программирование",
                title: "Веб-разработка с нуля",
                description: "Полный курс по HTML, CSS, JavaScript и React",
                duration: "12 недель",
                level: "Начальный",
                price: "29 990 ₽"
              },
              {
                image: "https://cdn.poehali.dev/projects/d763e1b9-2769-4869-aac5-c2425211b04c/files/0bf26896-5ea6-48a1-b10b-f74323eaaf88.jpg",
                category: "Дизайн",
                title: "UI/UX дизайн",
                description: "Создавайте красивые и удобные интерфейсы",
                duration: "8 недель",
                level: "Средний",
                price: "24 990 ₽"
              },
              {
                image: "https://cdn.poehali.dev/projects/d763e1b9-2769-4869-aac5-c2425211b04c/files/020f47de-dbad-49a3-9430-7bfa29ef7610.jpg",
                category: "Маркетинг",
                title: "Digital-маркетинг",
                description: "Освойте все каналы онлайн-продвижения",
                duration: "10 недель",
                level: "Начальный",
                price: "19 990 ₽"
              }
            ].map((course, index) => (
              <Card
                key={index}
                className="group overflow-hidden hover:scale-105 transition-all duration-300 bg-card/50 backdrop-blur border-border hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary/90 backdrop-blur">
                      {course.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">{course.title}</h3>
                  <p className="text-foreground/70">{course.description}</p>
                  <div className="flex items-center gap-4 text-sm text-foreground/60">
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="BarChart" size={16} />
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <span className="text-2xl font-bold text-primary">{course.price}</span>
                    <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                      Записаться
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="py-20 px-4 bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Отзывы студентов
            </h2>
            <p className="text-xl text-foreground/70">
              Истории успеха наших выпускников
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна Петрова",
                role: "Frontend Developer",
                avatar: "AP",
                text: "Прошла курс по веб-разработке и уже через 3 месяца получила оффер в крупную IT-компанию. Материал подан понятно, много практики!",
                rating: 5
              },
              {
                name: "Дмитрий Иванов",
                role: "UX Designer",
                avatar: "ДИ",
                text: "Курс по UI/UX помог систематизировать знания и освоить современные инструменты. Теперь работаю в стартапе дизайнером.",
                rating: 5
              },
              {
                name: "Мария Сидорова",
                role: "Marketing Manager",
                avatar: "МС",
                text: "Отличный курс по маркетингу! Получила актуальные знания и практические навыки. Рекомендую всем, кто хочет развиваться в этой сфере.",
                rating: 5
              }
            ].map((review, index) => (
              <Card
                key={index}
                className="bg-card/50 backdrop-blur border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-foreground/80 leading-relaxed italic">"{review.text}"</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <div className="font-semibold">{review.name}</div>
                      <div className="text-sm text-foreground/60">{review.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <Card className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 border-0">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-secondary/10 animate-pulse" />
            <CardContent className="relative p-12 text-center space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">
                Начните обучение сегодня
              </h2>
              <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
                Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь с нашими курсами
              </p>
              <div className="flex flex-wrap gap-4 justify-center pt-4">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Получить доступ
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                  Узнать больше
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border bg-card/30 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="GraduationCap" className="text-primary" size={28} />
                <span className="text-xl font-bold">EduSpace</span>
              </div>
              <p className="text-foreground/70 text-sm">
                Образовательная платформа нового поколения для вашего успеха
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Курсы</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Маркетинг</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Все курсы</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">О платформе</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Отзывы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-3">
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                  <Icon name="MessageCircle" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button size="icon" variant="outline" className="hover:bg-primary/10 hover:border-primary/50">
                  <Icon name="Instagram" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border text-center text-sm text-foreground/60">
            © 2024 EduSpace. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
