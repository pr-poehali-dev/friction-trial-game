import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type Character = 'judge' | 'prosecutor' | 'defense' | null;
type Tab = 'main' | 'game' | 'theory';

const Index = () => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(null);
  const [currentTab, setCurrentTab] = useState<Tab>('main');

  const characters = [
    {
      id: 'judge' as Character,
      name: 'Судья Ньютон',
      role: 'Судья',
      icon: 'Scale',
      color: 'text-primary',
      description: 'Беспристрастный арбитр, взвешивающий все аргументы',
      position: 'Моя задача — установить объективную истину о природе силы трения'
    },
    {
      id: 'prosecutor' as Character,
      name: 'Прокурор Кинетик',
      role: 'Обвинение',
      icon: 'AlertTriangle',
      color: 'text-accent',
      description: 'Обличает негативные стороны силы трения',
      position: 'Сила трения — это препятствие прогрессу! Она разрушает механизмы, тратит энергию и замедляет движение.'
    },
    {
      id: 'defense' as Character,
      name: 'Адвокат Статик',
      role: 'Защита',
      icon: 'Shield',
      color: 'text-secondary',
      description: 'Защищает силу трения и её пользу',
      position: 'Без силы трения жизнь невозможна! Она позволяет нам ходить, тормозить автомобили и удерживать предметы.'
    }
  ];

  const prosecutorArguments = [
    {
      title: 'Износ механизмов',
      description: 'Сила трения вызывает износ деталей машин, требуя постоянного ремонта и замены',
      example: 'Автомобильные тормоза изнашиваются и требуют замены каждые 30-50 тысяч км'
    },
    {
      title: 'Потеря энергии',
      description: 'До 20% энергии двигателя расходуется на преодоление силы трения',
      example: 'В двигателе внутреннего сгорания значительная часть топлива тратится впустую'
    },
    {
      title: 'Замедление движения',
      description: 'Трение препятствует свободному движению тел',
      example: 'Космические аппараты требуют топливо для преодоления сопротивления атмосферы'
    }
  ];

  const defenseArguments = [
    {
      title: 'Возможность ходьбы',
      description: 'Без трения мы не могли бы передвигаться — наши ноги скользили бы',
      example: 'На льду трение минимально — ходить практически невозможно'
    },
    {
      title: 'Торможение транспорта',
      description: 'Тормозные системы работают благодаря силе трения',
      example: 'Без трения между колесами и дорогой машина не смогла бы остановиться'
    },
    {
      title: 'Удержание предметов',
      description: 'Трение позволяет удерживать предметы в руках',
      example: 'Попробуйте взять мокрое мыло — без трения это невозможно'
    },
    {
      title: 'Передача энергии',
      description: 'Ремённые передачи, муфты работают за счёт трения',
      example: 'Генераторы электростанций используют силу трения для передачи вращения'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Суд над Силой Трения
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Интерактивная образовательная игра о самой противоречивой силе в физике
          </p>
        </div>

        <div className="flex justify-center gap-2 mb-8">
          <Button
            variant={currentTab === 'main' ? 'default' : 'outline'}
            onClick={() => setCurrentTab('main')}
          >
            Главная
          </Button>
          <Button
            variant={currentTab === 'game' ? 'default' : 'outline'}
            onClick={() => setCurrentTab('game')}
          >
            Игра
          </Button>
          <Button
            variant={currentTab === 'theory' ? 'default' : 'outline'}
            onClick={() => setCurrentTab('theory')}
          >
            Теория
          </Button>
        </div>

        {currentTab === 'main' && (
          <div className="space-y-8 animate-fade-in">
            <Card className="border-primary/20">
              <CardHeader>
                <CardTitle className="text-3xl">О проекте</CardTitle>
                <CardDescription className="text-base">
                  Познакомьтесь с необычным форматом изучения физики
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg">
                  Сила трения — одна из фундаментальных сил природы, которая имеет как положительные, 
                  так и отрицательные стороны. В этой игре мы рассмотрим её роль в судебном формате.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="p-4 bg-muted rounded-lg">
                    <Icon name="Users" className="text-primary mb-2" size={32} />
                    <h3 className="font-semibold mb-2">3 персонажа</h3>
                    <p className="text-sm text-muted-foreground">Судья, прокурор и адвокат защиты</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <Icon name="BookOpen" className="text-secondary mb-2" size={32} />
                    <h3 className="font-semibold mb-2">Научные факты</h3>
                    <p className="text-sm text-muted-foreground">Формулы, диаграммы и примеры</p>
                  </div>
                  <div className="p-4 bg-muted rounded-lg">
                    <Icon name="Brain" className="text-accent mb-2" size={32} />
                    <h3 className="font-semibold mb-2">Обучение</h3>
                    <p className="text-sm text-muted-foreground">Интерактивное изучение физики</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={() => setCurrentTab('game')}
                className="text-lg px-8 py-6"
              >
                <Icon name="Play" className="mr-2" />
                Начать судебное заседание
              </Button>
            </div>
          </div>
        )}

        {currentTab === 'game' && (
          <div className="space-y-8 animate-fade-in">
            <div className="grid md:grid-cols-3 gap-6">
              {characters.map((char) => (
                <Card
                  key={char.id}
                  className={`cursor-pointer transition-all duration-300 hover:scale-105 ${
                    activeCharacter === char.id ? 'ring-2 ring-primary shadow-xl' : ''
                  }`}
                  onClick={() => setActiveCharacter(char.id)}
                >
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Icon name={char.icon} className={char.color} size={40} />
                      <Badge variant="outline">{char.role}</Badge>
                    </div>
                    <CardTitle className="text-2xl">{char.name}</CardTitle>
                    <CardDescription className="text-base">{char.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm italic border-l-4 border-primary pl-4">
                      "{char.position}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {activeCharacter === 'prosecutor' && (
              <Card className="border-accent/50 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="AlertTriangle" className="text-accent" />
                    Аргументы обвинения
                  </CardTitle>
                  <CardDescription>
                    Прокурор Кинетик представляет доказательства вреда силы трения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {prosecutorArguments.map((arg, index) => (
                      <div key={index} className="p-4 bg-accent/10 rounded-lg border border-accent/20">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <span className="bg-accent text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          {arg.title}
                        </h3>
                        <p className="mb-2">{arg.description}</p>
                        <p className="text-sm text-muted-foreground italic">
                          <Icon name="Lightbulb" className="inline mr-1" size={16} />
                          Пример: {arg.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeCharacter === 'defense' && (
              <Card className="border-secondary/50 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Shield" className="text-secondary" />
                    Аргументы защиты
                  </CardTitle>
                  <CardDescription>
                    Адвокат Статик представляет доказательства пользы силы трения
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {defenseArguments.map((arg, index) => (
                      <div key={index} className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                        <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                          <span className="bg-secondary text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">
                            {index + 1}
                          </span>
                          {arg.title}
                        </h3>
                        <p className="mb-2">{arg.description}</p>
                        <p className="text-sm text-muted-foreground italic">
                          <Icon name="Lightbulb" className="inline mr-1" size={16} />
                          Пример: {arg.example}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {activeCharacter === 'judge' && (
              <Card className="border-primary/50 animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <Icon name="Scale" className="text-primary" />
                    Вердикт судьи
                  </CardTitle>
                  <CardDescription>
                    Судья Ньютон подводит итоги заседания
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-6 bg-primary/10 rounded-lg border-2 border-primary/30">
                    <p className="text-lg leading-relaxed">
                      Выслушав обе стороны, суд приходит к выводу: <strong>сила трения — это не добро и не зло</strong>. 
                      Это фундаментальное физическое явление, которое необходимо понимать и использовать.
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="ThumbsDown" className="text-accent" size={20} />
                        Негативные аспекты
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Износ механизмов</li>
                        <li>Потери энергии</li>
                        <li>Нагрев поверхностей</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <h4 className="font-bold mb-2 flex items-center gap-2">
                        <Icon name="ThumbsUp" className="text-secondary" size={20} />
                        Позитивные аспекты
                      </h4>
                      <ul className="text-sm space-y-1 list-disc list-inside">
                        <li>Возможность движения</li>
                        <li>Торможение</li>
                        <li>Удержание предметов</li>
                      </ul>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/10 rounded-lg">
                    <p className="text-center italic">
                      "Задача инженеров и учёных — не бороться с силой трения, а научиться управлять ею!"
                    </p>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {currentTab === 'theory' && (
          <div className="space-y-8 animate-fade-in">
            <Card>
              <CardHeader>
                <CardTitle className="text-3xl">Теория силы трения</CardTitle>
                <CardDescription className="text-base">
                  Научные основы и математическое описание
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-primary/10 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Основная формула</h3>
                  <div className="bg-background p-6 rounded-lg text-center">
                    <p className="text-4xl font-mono mb-2">F<sub>тр</sub> = μ × N</p>
                    <div className="text-sm text-muted-foreground space-y-1 mt-4">
                      <p><strong>F<sub>тр</sub></strong> — сила трения (Н)</p>
                      <p><strong>μ</strong> — коэффициент трения (безразмерный)</p>
                      <p><strong>N</strong> — сила нормальной реакции опоры (Н)</p>
                    </div>
                  </div>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="types">
                    <AccordionTrigger className="text-xl">
                      <div className="flex items-center">
                        <Icon name="List" className="mr-2" />
                        Виды трения
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="grid md:grid-cols-3 gap-4">
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-bold mb-2">Трение покоя</h4>
                          <p className="text-sm">Возникает при попытке сдвинуть тело с места</p>
                          <Badge className="mt-2">μ ≈ 0.6-1.5</Badge>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-bold mb-2">Трение скольжения</h4>
                          <p className="text-sm">Действует при движении одной поверхности по другой</p>
                          <Badge className="mt-2">μ ≈ 0.1-0.5</Badge>
                        </div>
                        <div className="p-4 bg-muted rounded-lg">
                          <h4 className="font-bold mb-2">Трение качения</h4>
                          <p className="text-sm">Возникает при качении колеса или шара</p>
                          <Badge className="mt-2">μ ≈ 0.001-0.1</Badge>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="factors">
                    <AccordionTrigger className="text-xl">
                      <div className="flex items-center">
                        <Icon name="Settings" className="mr-2" />
                        Факторы, влияющие на трение
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="space-y-3">
                        <div className="flex items-start gap-3 p-3 bg-muted rounded">
                          <Icon name="CheckCircle2" className="text-primary mt-1" />
                          <div>
                            <strong>Материал поверхностей:</strong> резина по асфальту имеет высокий коэффициент трения, лёд по льду — низкий
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-muted rounded">
                          <Icon name="CheckCircle2" className="text-primary mt-1" />
                          <div>
                            <strong>Шероховатость:</strong> чем грубее поверхность, тем больше трение
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-muted rounded">
                          <Icon name="CheckCircle2" className="text-primary mt-1" />
                          <div>
                            <strong>Сила прижатия:</strong> чем больше сила N, тем больше сила трения
                          </div>
                        </div>
                        <div className="flex items-start gap-3 p-3 bg-muted rounded">
                          <Icon name="XCircle" className="text-destructive mt-1" />
                          <div>
                            <strong>НЕ зависит от площади контакта:</strong> трение определяется только силой прижатия и материалом
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="examples">
                    <AccordionTrigger className="text-xl">
                      <div className="flex items-center">
                        <Icon name="Calculator" className="mr-2" />
                        Примеры расчётов
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4 pt-4">
                      <div className="p-4 bg-secondary/10 rounded-lg">
                        <h4 className="font-bold mb-3">Пример 1: Торможение автомобиля</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Дано:</strong> масса автомобиля m = 1000 кг, коэффициент трения μ = 0.7</p>
                          <p><strong>Найти:</strong> силу трения при торможении</p>
                          <div className="bg-background p-3 rounded mt-2">
                            <p>N = m × g = 1000 × 10 = 10 000 Н</p>
                            <p className="text-primary font-bold">F<sub>тр</sub> = 0.7 × 10 000 = 7 000 Н</p>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 bg-accent/10 rounded-lg">
                        <h4 className="font-bold mb-3">Пример 2: Санки на горке</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Дано:</strong> масса санок m = 20 кг, угол наклона α = 30°, μ = 0.1</p>
                          <p><strong>Найти:</strong> силу трения на склоне</p>
                          <div className="bg-background p-3 rounded mt-2">
                            <p>N = m × g × cos(30°) = 20 × 10 × 0.866 = 173 Н</p>
                            <p className="text-primary font-bold">F<sub>тр</sub> = 0.1 × 173 = 17.3 Н</p>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <div className="mt-8 p-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <Icon name="Sparkles" className="text-primary" />
                    Интересный факт
                  </h3>
                  <p className="leading-relaxed">
                    Без силы трения Земля была бы непригодна для жизни: невозможно было бы ходить, 
                    строить дома, использовать инструменты. Даже звук распространяется благодаря 
                    трению молекул воздуха друг о друга!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
