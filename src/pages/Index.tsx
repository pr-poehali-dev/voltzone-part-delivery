import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    company: '',
    fleet: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-background font-inter">
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="font-inter text-2xl font-bold text-primary">
            VOLTZONE
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#advantages" className="text-foreground hover:text-primary transition-colors font-medium">Преимущества</a>
            <a href="#savings" className="text-foreground hover:text-primary transition-colors font-medium">Экономия</a>
            <a href="#tariffs" className="text-foreground hover:text-primary transition-colors font-medium">Тарифы</a>
            <a href="#process" className="text-foreground hover:text-primary transition-colors font-medium">Процесс</a>
          </div>
          <Button className="hidden md:inline-flex">Связаться</Button>
        </div>
      </nav>

      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full">
                <span className="text-primary font-semibold text-sm">B2B Поставки запчастей</span>
              </div>
              <h1 className="font-inter text-5xl lg:text-6xl font-bold leading-tight text-foreground">
                Снижаем стоимость обслуживания вашего автопарка на <span className="text-primary">20-40%</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Прямые поставки запчастей для электромобилей из Китая без посредников. 
                Работаем с таксопарками, каршерингом и корпоративными автопарками.
              </p>

              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="font-inter">Получить коммерческое предложение</CardTitle>
                  <CardDescription>Рассчитаем индивидуальные условия за 2 часа</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        placeholder="Название компании"
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <div>
                      <select
                        className="flex h-12 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        value={formData.fleet}
                        onChange={(e) => setFormData({...formData, fleet: e.target.value})}
                      >
                        <option value="">Количество электромобилей</option>
                        <option value="5-15">5-15 автомобилей</option>
                        <option value="15-50">15-50 автомобилей</option>
                        <option value="50+">50+ автомобилей</option>
                      </select>
                    </div>
                    <div>
                      <Input
                        type="tel"
                        placeholder="Телефон"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-12"
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full h-12 text-base font-semibold">
                      Получить КП
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      Ответим в течение 2 часов в рабочее время
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://cdn.poehali.dev/projects/3bfc0661-3718-4f86-b1cc-cb32be07d219/files/aaf79d29-ac8e-4bd9-99b5-0c34e1096cc4.jpg" 
                  alt="Парк электромобилей"
                  className="w-full h-[600px] object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="text-3xl font-bold text-primary mb-1">5000+</div>
                <div className="text-sm text-muted-foreground">Обслуженных компаний</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Проблемы бизнеса с электропарками</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Знакомые ситуации? Мы решаем все эти проблемы комплексно
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="TrendingUp" size={32} className="text-destructive" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Растущие расходы</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Цены на запчасти растут, посредники накручивают 40-60%
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center text-secondary">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    <span className="text-sm font-medium">Экономия до 40%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="AlertTriangle" size={32} className="text-destructive" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Непредсказуемость</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Поставщики подводят со сроками, нет нужных деталей
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center text-secondary">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    <span className="text-sm font-medium">Срок 20 дней</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="Calendar" size={32} className="text-destructive" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Сложности планирования</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Невозможно спланировать ремонты и бюджет на обслуживание
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center text-secondary">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    <span className="text-sm font-medium">Фиксированные цены</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-16 h-16 mb-4 rounded-full bg-destructive/10 flex items-center justify-center">
                  <Icon name="Users" size={32} className="text-destructive" />
                </div>
                <h3 className="font-semibold mb-2 text-lg">Много поставщиков</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Работа с 5-10 поставщиками, путаница в заказах
                </p>
                <div className="pt-4 border-t border-border">
                  <div className="flex items-center text-secondary">
                    <Icon name="CheckCircle" size={16} className="mr-2" />
                    <span className="text-sm font-medium">Единое окно</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="savings" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Как мы экономим ваши деньги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Прозрачная структура экономии без скрытых комиссий
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center bg-primary text-white">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold mb-2">25%</div>
                <div className="text-sm opacity-90 mb-4">экономии</div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Handshake" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Прямые контракты</h3>
                <p className="text-sm opacity-90">
                  Работаем напрямую с заводами Tesla, BYD, ZEEKR, NIO
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-secondary text-white">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold mb-2">15%</div>
                <div className="text-sm opacity-90 mb-4">экономии</div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Zap" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Без посредников</h3>
                <p className="text-sm opacity-90">
                  Прямой импорт из Китая, минуя цепочку перекупщиков
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-primary text-white">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold mb-2">10%</div>
                <div className="text-sm opacity-90 mb-4">экономии</div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="TrendingDown" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Оптовые цены</h3>
                <p className="text-sm opacity-90">
                  Скидки от объема заказа - чем больше парк, тем выгоднее
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-secondary text-white">
              <CardContent className="pt-8 pb-8">
                <div className="text-5xl font-bold mb-2">5%</div>
                <div className="text-sm opacity-90 mb-4">экономии</div>
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-white/20 flex items-center justify-center">
                  <Icon name="Truck" size={24} />
                </div>
                <h3 className="font-semibold mb-2">Оптимизация логистики</h3>
                <p className="text-sm opacity-90">
                  Консолидация грузов, собственные таможенные брокеры
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Пример реальной экономии</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                <div>
                  <div className="text-sm text-muted-foreground mb-2">Стандартный поставщик</div>
                  <div className="text-3xl font-bold text-destructive">120 000₽</div>
                  <div className="text-sm text-muted-foreground mt-1">Батарея Tesla Model 3</div>
                </div>
                <div className="flex items-center justify-center">
                  <Icon name="ArrowRight" size={32} className="text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-2">С VoltZone</div>
                  <div className="text-3xl font-bold text-secondary">72 000₽</div>
                  <div className="text-sm text-muted-foreground mt-1">Экономия 40% или 48 000₽</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Условия для бизнеса</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Выберите тариф под размер вашего автопарка
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Car" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-2xl">СТАРТ</CardTitle>
                <CardDescription>Для небольших автопарков</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">5-15</div>
                <div className="text-sm text-muted-foreground">электромобилей</div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Скидка 20% от розничной цены</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Доставка 20 дней</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Подбор по VIN</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Техподдержка в рабочее время</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Отсрочка платежа 14 дней</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">Получить расчет</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow border-2 border-primary relative">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                Популярный
              </div>
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Building2" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-2xl">БИЗНЕС</CardTitle>
                <CardDescription>Для средних автопарков</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">15-50</div>
                <div className="text-sm text-muted-foreground">электромобилей</div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Скидка 30% от розничной цены</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Доставка 15 дней</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Подбор по VIN + консультации</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Техподдержка 24/7</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Отсрочка платежа 30 дней</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Персональный менеджер</span>
                  </div>
                </div>
                <Button className="w-full mt-6">Получить расчет</Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon name="Factory" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-inter text-2xl">ПРЕМИУМ</CardTitle>
                <CardDescription>Для крупных автопарков</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground">электромобилей</div>
                <div className="space-y-3 pt-4">
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Скидка 40% от розничной цены</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Доставка 10 дней</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Полное сопровождение парка</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Выделенная команда 24/7</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Отсрочка платежа 60 дней</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Склад запчастей в РФ</span>
                  </div>
                  <div className="flex items-start">
                    <Icon name="Check" size={16} className="text-secondary mr-2 mt-1" />
                    <span className="text-sm">Индивидуальные условия</span>
                  </div>
                </div>
                <Button className="w-full mt-6" variant="outline">Получить расчет</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="process" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Процесс работы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              От заявки до получения запчастей за 4 простых шага
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Анализ потребностей</h3>
              <p className="text-sm text-muted-foreground">
                Изучаем состав автопарка, частоту ремонтов, текущих поставщиков
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Расчет условий</h3>
              <p className="text-sm text-muted-foreground">
                Рассчитываем экономию, сроки, формируем коммерческое предложение
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-white flex items-center justify-center text-2xl font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Заключение договора</h3>
              <p className="text-sm text-muted-foreground">
                Подписываем договор, настраиваем систему заказов и отчетности
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary text-white flex items-center justify-center text-2xl font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Регулярные поставки</h3>
              <p className="text-sm text-muted-foreground">
                Обеспечиваем бесперебойные поставки, техподдержку, аналитику
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-inter text-3xl font-bold mb-4">Наши B2B-клиенты</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Нам доверяют ведущие компании России
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Icon name="Taxi" size={48} className="text-primary mx-auto mb-2" />
                <div className="font-semibold">Таксопарки</div>
                <div className="text-2xl font-bold text-primary">150+</div>
              </div>
            </Card>
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Icon name="Car" size={48} className="text-secondary mx-auto mb-2" />
                <div className="font-semibold">Каршеринги</div>
                <div className="text-2xl font-bold text-secondary">25+</div>
              </div>
            </Card>
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Icon name="Building2" size={48} className="text-primary mx-auto mb-2" />
                <div className="font-semibold">Корпорации</div>
                <div className="text-2xl font-bold text-primary">80+</div>
              </div>
            </Card>
            <Card className="p-8 flex items-center justify-center hover:shadow-lg transition-shadow">
              <div className="text-center">
                <Icon name="Wrench" size={48} className="text-secondary mx-auto mb-2" />
                <div className="font-semibold">СТО</div>
                <div className="text-2xl font-bold text-secondary">200+</div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-inter text-4xl font-bold mb-4">Готовы оптимизировать расходы на автопарк?</h2>
              <p className="text-lg opacity-90">
                Рассчитаем индивидуальные условия и покажем, сколько вы сможете сэкономить
              </p>
            </div>
            
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Название компании"
                        className="h-12 bg-white"
                      />
                    </div>
                    <div>
                      <select className="flex h-12 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
                        <option value="">Количество электромобилей</option>
                        <option value="5-15">5-15 автомобилей</option>
                        <option value="15-50">15-50 автомобилей</option>
                        <option value="50+">50+ автомобилей</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <Input
                      type="tel"
                      placeholder="Телефон"
                      className="h-12 bg-white"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-base font-semibold bg-secondary hover:bg-secondary/90">
                    Получить коммерческое предложение
                    <Icon name="Send" size={20} className="ml-2" />
                  </Button>
                  <div className="flex items-center justify-center space-x-6 text-sm opacity-90">
                    <div className="flex items-center">
                      <Icon name="Clock" size={16} className="mr-2" />
                      <span>Ответим за 2 часа</span>
                    </div>
                    <div className="flex items-center">
                      <Icon name="Shield" size={16} className="mr-2" />
                      <span>Конфиденциально</span>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
                <div>
                  <div className="text-3xl font-bold mb-2">5000+</div>
                  <div className="text-sm opacity-90">Обслуженных компаний</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">85</div>
                  <div className="text-sm opacity-90">Регионов России</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">4</div>
                  <div className="text-sm opacity-90">года на рынке</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="font-inter text-2xl font-bold text-primary mb-4">
                VOLTZONE
              </div>
              <p className="text-muted-foreground text-sm mb-4">
                Прямые поставки запчастей для электромобилей из Китая
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-muted-foreground">
                  <Icon name="MapPin" size={16} className="mr-2" />
                  <span>Санкт-Петербург</span>
                </div>
                <div className="flex items-center text-muted-foreground">
                  <Icon name="Phone" size={16} className="mr-2" />
                  <span>+7 (812) 123-45-67</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Бренды</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Tesla</a></li>
                <li><a href="#" className="hover:text-primary">BYD</a></li>
                <li><a href="#" className="hover:text-primary">ZEEKR</a></li>
                <li><a href="#" className="hover:text-primary">NIO</a></li>
                <li><a href="#" className="hover:text-primary">Li Auto</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Клиентам</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#tariffs" className="hover:text-primary">Тарифы</a></li>
                <li><a href="#savings" className="hover:text-primary">Экономия</a></li>
                <li><a href="#process" className="hover:text-primary">Как работаем</a></li>
                <li><a href="#" className="hover:text-primary">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Документы</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Договор поставки</a></li>
                <li><a href="#" className="hover:text-primary">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary">Сертификаты</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 VoltZone. Все права защищены. B2B поставки запчастей для электромобилей.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;