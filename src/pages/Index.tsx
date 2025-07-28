import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-orbitron text-2xl font-bold text-primary">
            VOLTZONE
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors">Главная</a>
            <a href="#delivery" className="text-foreground hover:text-primary transition-colors">Доставка</a>
            <a href="#guarantee" className="text-foreground hover:text-primary transition-colors">Гарантии</a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors">О компании</a>
            <a href="#contacts" className="text-foreground hover:text-primary transition-colors">Контакты</a>
          </div>
          <Button variant="outline" className="md:hidden">
            <Icon name="Menu" size={20} />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <h1 className="font-orbitron text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-primary">VOLT</span>
                <span className="text-secondary">ZONE</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Оригинальные запчасти для электромобилей прямо из Китая от производителей. 
                Быстрая доставка по СПб и всей России.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="font-semibold">
                  Каталог запчастей
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button variant="outline" size="lg">
                  Получить консультацию
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <Icon name="Zap" size={16} className="text-primary" />
                  <span>Быстрая доставка</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-secondary" />
                  <span>Гарантия качества</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden">
                <img 
                  src="/img/a9c292a0-ac07-44a0-bf8d-28ac2f33e9af.jpg" 
                  alt="Запчасти для электромобилей"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-4">Преимущества VoltZone</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы специализируемся на поставке качественных запчастей для электромобилей
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Truck" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-orbitron">Прямые поставки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Работаем напрямую с производителями из Китая, что гарантирует оригинальность и лучшие цены
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <CardTitle className="font-orbitron">Быстрая доставка</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Доставка по СПб за 1-2 дня, по России за 3-7 дней. Экспресс-доставка для срочных заказов
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Settings" size={32} className="text-primary" />
                </div>
                <CardTitle className="font-orbitron">Широкий ассортимент</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Запчасти для всех популярных марок электромобилей: Tesla, BYD, NIO, Xpeng и многих других
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Delivery Section */}
      <section id="delivery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron text-3xl font-bold mb-6">Доставка по всей России</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="MapPin" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Санкт-Петербург</h3>
                    <p className="text-muted-foreground">Доставка в день заказа или на следующий день</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Truck" size={16} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">По России</h3>
                    <p className="text-muted-foreground">Доставка ТК или Почтой России за 3-7 дней</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <Icon name="Clock" size={16} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Экспресс-доставка</h3>
                    <p className="text-muted-foreground">Срочная доставка в течение 24 часов</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">1-2</div>
                <div className="text-sm text-muted-foreground">дня по СПб</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">3-7</div>
                <div className="text-sm text-muted-foreground">дней по России</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-primary mb-2">24</div>
                <div className="text-sm text-muted-foreground">часа экспресс</div>
              </Card>
              <Card className="p-6 text-center">
                <div className="text-2xl font-bold text-secondary mb-2">0₽</div>
                <div className="text-sm text-muted-foreground">при заказе от 10000₽</div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section id="guarantee" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-4">Гарантии качества</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы гарантируем подлинность всех запчастей и предоставляем полную техническую поддержку
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Shield" size={40} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия 2 года</h3>
              <p className="text-sm text-muted-foreground">На все оригинальные запчасти</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name="RefreshCw" size={40} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Обмен/возврат</h3>
              <p className="text-sm text-muted-foreground">В течение 14 дней</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Phone" size={40} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Техподдержка</h3>
              <p className="text-sm text-muted-foreground">Консультации 24/7</p>
            </div>
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name="CheckCircle" size={40} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Проверка качества</h3>
              <p className="text-sm text-muted-foreground">Каждая деталь тестируется</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-orbitron text-3xl font-bold mb-6">О компании VoltZone</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  VoltZone — ведущий поставщик оригинальных запчастей для электромобилей в России. 
                  Мы работаем с 2020 года и за это время стали надежным партнером для тысяч владельцев электротранспорта.
                </p>
                <p>
                  Наша миссия — сделать обслуживание электромобилей доступным и удобным. 
                  Мы сотрудничаем напрямую с ведущими производителями из Китая, что позволяет 
                  предлагать оригинальные запчасти по лучшим ценам.
                </p>
                <p>
                  В нашем ассортименте более 10,000 наименований запчастей для всех популярных 
                  марок электромобилей. Команда экспертов поможет подобрать нужные детали 
                  и обеспечит быструю доставку в любую точку России.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">Довольных клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10000+</div>
                <div className="text-sm text-muted-foreground">Запчастей в наличии</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Партнеров-производителей</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary mb-2">4</div>
                <div className="text-sm text-muted-foreground">года опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-orbitron text-3xl font-bold mb-4">Контакты</h2>
            <p className="text-muted-foreground">
              Свяжитесь с нами любым удобным способом
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="Phone" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Телефон</h3>
              <p className="text-muted-foreground">+7 (812) 123-45-67</p>
              <p className="text-sm text-muted-foreground mt-1">Ежедневно 9:00-21:00</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                <Icon name="Mail" size={32} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">info@voltzone.ru</p>
              <p className="text-sm text-muted-foreground mt-1">Ответим в течение часа</p>
            </Card>
            <Card className="p-6 text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name="MapPin" size={32} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Адрес</h3>
              <p className="text-muted-foreground">СПб, Невский пр., 123</p>
              <p className="text-sm text-muted-foreground mt-1">Пн-Пт 10:00-19:00</p>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="font-semibold">
              Получить консультацию
              <Icon name="MessageCircle" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-orbitron text-2xl font-bold text-primary mb-4">
                VOLTZONE
              </div>
              <p className="text-muted-foreground text-sm">
                Оригинальные запчасти для электромобилей с доставкой по всей России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Каталог</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Батареи</a></li>
                <li><a href="#" className="hover:text-primary">Двигатели</a></li>
                <li><a href="#" className="hover:text-primary">Зарядные устройства</a></li>
                <li><a href="#" className="hover:text-primary">Электроника</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#about" className="hover:text-primary">О нас</a></li>
                <li><a href="#delivery" className="hover:text-primary">Доставка</a></li>
                <li><a href="#guarantee" className="hover:text-primary">Гарантии</a></li>
                <li><a href="#contacts" className="hover:text-primary">Контакты</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>+7 (812) 123-45-67</li>
                <li>info@voltzone.ru</li>
                <li>Телеграм: @voltzone</li>
                <li>WhatsApp поддержка</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 VoltZone. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;