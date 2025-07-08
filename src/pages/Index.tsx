import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const priceData = [
  { name: "Янв", price: 42000, volume: 1200 },
  { name: "Фев", price: 48000, volume: 1800 },
  { name: "Мар", price: 52000, volume: 2200 },
  { name: "Апр", price: 58000, volume: 1900 },
  { name: "Май", price: 65000, volume: 2800 },
  { name: "Июн", price: 72000, volume: 3200 },
];

const volumeData = [
  { name: "01", value: 245000 },
  { name: "02", value: 182000 },
  { name: "03", value: 298000 },
  { name: "04", value: 167000 },
  { name: "05", value: 321000 },
  { name: "06", value: 278000 },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Zap" size={32} className="text-blue-400" />
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                CryptoVault
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#product"
                className="hover:text-blue-400 transition-colors"
              >
                Продукт
              </a>
              <a
                href="#partners"
                className="hover:text-blue-400 transition-colors"
              >
                Партнеры
              </a>
              <a
                href="#community"
                className="hover:text-blue-400 transition-colors"
              >
                Сообщество
              </a>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Wallet" size={16} className="mr-2" />
                Подключить кошелек
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-400/30">
                🚀 Следующее поколение DeFi
              </Badge>
              <h1 className="text-5xl font-bold mb-6 leading-tight">
                Революция в мире
                <span className="block bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                  децентрализованных финансов
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Первая платформа для институциональных инвесторов с продвинутой
                аналитикой, автоматизированными стратегиями и максимальной
                доходностью до 25% годовых.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700"
                >
                  <Icon name="TrendingUp" size={20} className="mr-2" />
                  Начать инвестировать
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 hover:bg-slate-800"
                >
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            <div className="space-y-6">
              <Card className="bg-slate-800/50 border-slate-700">
                <CardHeader>
                  <CardTitle className="text-slate-200 flex items-center">
                    <Icon
                      name="Activity"
                      size={20}
                      className="mr-2 text-emerald-400"
                    />
                    Динамика цены токена
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={200}>
                    <AreaChart data={priceData}>
                      <defs>
                        <linearGradient
                          id="priceGradient"
                          x1="0"
                          y1="0"
                          x2="0"
                          y2="1"
                        >
                          <stop
                            offset="5%"
                            stopColor="#3B82F6"
                            stopOpacity={0.3}
                          />
                          <stop
                            offset="95%"
                            stopColor="#3B82F6"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="name" stroke="#9CA3AF" />
                      <YAxis stroke="#9CA3AF" />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "#1F2937",
                          border: "1px solid #374151",
                          borderRadius: "8px",
                        }}
                        labelStyle={{ color: "#F3F4F6" }}
                      />
                      <Area
                        type="monotone"
                        dataKey="price"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        fill="url(#priceGradient)"
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-400 mb-2">
                $2.4B
              </div>
              <div className="text-slate-400">Общий объем активов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">150K+</div>
              <div className="text-slate-400">Активных инвесторов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">25%</div>
              <div className="text-slate-400">Средняя доходность</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">
                98.7%
              </div>
              <div className="text-slate-400">Время безотказной работы</div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Section */}
      <section id="product" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-emerald-600/20 text-emerald-400 border-emerald-400/30">
              📊 Продукт
            </Badge>
            <h2 className="text-4xl font-bold mb-4">Умные инвестиции с ИИ</h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Наша платформа использует машинное обучение для анализа рынка и
              автоматического управления портфелем с минимальными рисками.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-600/20 rounded-lg">
                  <Icon name="Brain" size={24} className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">ИИ-алгоритмы</h3>
                  <p className="text-slate-400">
                    Анализ 500+ индикаторов в режиме реального времени
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-emerald-600/20 rounded-lg">
                  <Icon name="Shield" size={24} className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Управление рисками
                  </h3>
                  <p className="text-slate-400">
                    Автоматическое хеджирование и диверсификация
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-600/20 rounded-lg">
                  <Icon name="Zap" size={24} className="text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Мгновенное исполнение
                  </h3>
                  <p className="text-slate-400">
                    Сделки за миллисекунды через децентрализованные биржи
                  </p>
                </div>
              </div>
            </div>

            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader>
                <CardTitle className="text-slate-200 flex items-center">
                  <Icon
                    name="BarChart"
                    size={20}
                    className="mr-2 text-purple-400"
                  />
                  Объемы торгов
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart data={volumeData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        border: "1px solid #374151",
                        borderRadius: "8px",
                      }}
                      labelStyle={{ color: "#F3F4F6" }}
                    />
                    <Bar dataKey="value" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600/20 text-blue-400 border-blue-400/30">
              🤝 Партнеры
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Доверие лидеров индустрии
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Мы сотрудничаем с ведущими биржами, банками и инвестиционными
              фондами для обеспечения максимальной ликвидности и безопасности.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {["Binance", "Coinbase", "BlackRock", "Goldman Sachs"].map(
              (partner, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/50 border-slate-700 hover:border-blue-400/50 transition-all duration-300 cursor-pointer"
                >
                  <CardContent className="p-8 text-center">
                    <div className="text-2xl font-bold text-slate-400 mb-2">
                      {partner}
                    </div>
                    <div className="text-sm text-slate-500">
                      Стратегический партнер
                    </div>
                  </CardContent>
                </Card>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-amber-600/20 text-amber-400 border-amber-400/30">
              👥 Сообщество
            </Badge>
            <h2 className="text-4xl font-bold mb-4">
              Присоединяйтесь к революции
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Станьте частью глобального сообщества инвесторов, которые уже
              зарабатывают с помощью наших инновационных решений.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <Icon
                  name="Users"
                  size={48}
                  className="mx-auto mb-4 text-blue-400"
                />
                <h3 className="text-xl font-semibold mb-2">Telegram</h3>
                <p className="text-slate-400 mb-4">50,000+ участников</p>
                <Button
                  variant="outline"
                  className="border-blue-400/50 text-blue-400 hover:bg-blue-400/10"
                >
                  Присоединиться
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <Icon
                  name="MessageSquare"
                  size={48}
                  className="mx-auto mb-4 text-emerald-400"
                />
                <h3 className="text-xl font-semibold mb-2">Discord</h3>
                <p className="text-slate-400 mb-4">25,000+ участников</p>
                <Button
                  variant="outline"
                  className="border-emerald-400/50 text-emerald-400 hover:bg-emerald-400/10"
                >
                  Войти в чат
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 text-center">
              <CardContent className="p-8">
                <Icon
                  name="Twitter"
                  size={48}
                  className="mx-auto mb-4 text-purple-400"
                />
                <h3 className="text-xl font-semibold mb-2">Twitter</h3>
                <p className="text-slate-400 mb-4">100,000+ подписчиков</p>
                <Button
                  variant="outline"
                  className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                >
                  Подписаться
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-900/50">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Zap" size={24} className="text-blue-400" />
                <span className="text-xl font-bold">CryptoVault</span>
              </div>
              <p className="text-slate-400">
                Будущее децентрализованных финансов уже здесь.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Платформа
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    API
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Документация
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Команда
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Карьера
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-slate-400">
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-blue-400 transition-colors">
                    Статус
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
            <p>&copy; 2024 CryptoVault. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
