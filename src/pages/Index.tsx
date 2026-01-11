import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';

type Character = 'judge' | 'prosecutor' | 'defense' | null;
type Tab = 'main' | 'game' | 'theory';

interface Evidence {
  id: number;
  title: string;
  description: string;
  formula: string;
  calculation: string;
  result: string;
  imageUrl: string;
  side: 'prosecutor' | 'defense';
}

const Index = () => {
  const [activeCharacter, setActiveCharacter] = useState<Character>(null);
  const [currentTab, setCurrentTab] = useState<Tab>('main');
  const [gameStarted, setGameStarted] = useState(false);
  const [currentStage, setCurrentStage] = useState(0);
  const [prosecutorScore, setProsecutorScore] = useState(0);
  const [defenseScore, setDefenseScore] = useState(0);

  const evidences: Evidence[] = [
    {
      id: 1,
      title: 'Доказательство обвинения: Износ механизмов',
      description: 'Прокурор Кинетик представляет первое доказательство: сила трения разрушает детали двигателей и механизмов, вызывая колоссальные экономические потери.',
      formula: 'Q = Fтр × S',
      calculation: 'Тепловая энергия от трения = Сила трения × Путь перемещения',
      result: 'При торможении автомобиля выделяется до 500 кДж тепла, изнашивая тормозные колодки',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/335ad598-b5a6-4259-b598-5647515158f3.jpg',
      side: 'prosecutor'
    },
    {
      id: 2,
      title: 'Доказательство защиты: Возможность ходьбы',
      description: 'Адвокат Статик контратакует: без силы трения человек не смог бы сделать ни шага! Попробуйте пройтись по идеально гладкой поверхности.',
      formula: 'Fтр ≥ ma',
      calculation: 'Сила трения покоя ≥ Масса × Ускорение при ходьбе',
      result: 'На льду (μ=0.1) ходить почти невозможно, на асфальте (μ=0.7) — легко и безопасно',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/aa63f791-33ab-47c5-96fb-0c7964ba5ebf.jpg',
      side: 'defense'
    },
    {
      id: 3,
      title: 'Доказательство обвинения: Потеря энергии',
      description: 'Обвинение продолжает: 30% энергии в автомобиле теряется на преодоление трения! Это экологическая катастрофа и перерасход ресурсов.',
      formula: 'η = (Wполезная / Wзатраченная) × 100%',
      calculation: 'КПД двигателя с учётом потерь на трение',
      result: 'Двигатель мощностью 100 л.с. теряет ~30 л.с. только на трение внутренних деталей',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/335ad598-b5a6-4259-b598-5647515158f3.jpg',
      side: 'prosecutor'
    },
    {
      id: 4,
      title: 'Доказательство защиты: Торможение — спасение жизней',
      description: 'Защита представляет решающий аргумент: тормозная система работает ТОЛЬКО благодаря трению! Миллионы жизней спасены этой силой.',
      formula: 'S = v² / (2μg)',
      calculation: 'Тормозной путь = Скорость² / (2 × Коэффициент трения × g)',
      result: 'При v=90 км/ч и μ=0.7: тормозной путь = 45 м. Без трения остановка невозможна!',
      imageUrl: 'https://cdn.poehali.dev/projects/b236b444-67f1-4409-aad2-4158607523cd/files/de36532c-6e7d-4877-b7ef-b2a4b4884d57.jpg',
      side: 'defense'
    }
  ];

  const handleStartGame = () => {
    setGameStarted(true);
    setCurrentStage(0);
    setProsecutorScore(0);
    setDefenseScore(0);
    setCurrentTab('game');
  };

  const handleVote = (side: 'prosecutor' | 'defense') => {
    if (side === 'prosecutor') {
      setProsecutorScore(prosecutorScore + 1);
    } else {
      setDefenseScore(defenseScore + 1);
    }

    if (currentStage < evidences.length - 1) {
      setCurrentStage(currentStage + 1);
    }
  };

  const isGameFinished = currentStage === evidences.length - 1 && (prosecutorScore > 0 || defenseScore > 0);
  const winner = prosecutorScore > defenseScore ? 'prosecutor' : 'defense';
  const currentEvidence = evidences[currentStage];
  const progress = ((currentStage + 1) / evidences.length) * 100;

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
                onClick={handleStartGame}
                className="text-lg px-8 py-6"
              >
                <Icon name="Play" className="mr-2" />
                Начать судебное заседание
              </Button>
            </div>
          </div>
        )}

        {currentTab === 'game' && !gameStarted && (
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

            <div className="text-center">
              <Button 
                size="lg" 
                onClick={handleStartGame}
                className="text-lg px-8 py-6"
              >
                <Icon name="Gavel" className="mr-2" />
                Начать рассмотрение доказательств
              </Button>
            </div>
          </div>
        )}

        {currentTab === 'game' && gameStarted && !isGameFinished && (
          <div className="space-y-6 animate-fade-in">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between mb-4">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    Этап {currentStage + 1} из {evidences.length}
                  </Badge>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Обвинение</p>
                      <p className="text-2xl font-bold text-accent">{prosecutorScore}</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground">Защита</p>
                      <p className="text-2xl font-bold text-secondary">{defenseScore}</p>
                    </div>
                  </div>
                </div>
                <Progress value={progress} className="h-2" />
              </CardHeader>
            </Card>

            <Card className={`border-2 ${currentEvidence.side === 'prosecutor' ? 'border-accent/50' : 'border-secondary/50'} animate-scale-in`}>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <Icon 
                    name={currentEvidence.side === 'prosecutor' ? 'AlertTriangle' : 'Shield'} 
                    className={currentEvidence.side === 'prosecutor' ? 'text-accent' : 'text-secondary'} 
                    size={32}
                  />
                  <CardTitle className="text-2xl">{currentEvidence.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {currentEvidence.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg overflow-hidden border-2 border-primary/20">
                  <img 
                    src={currentEvidence.imageUrl} 
                    alt={currentEvidence.title}
                    className="w-full h-64 object-cover"
                  />
                </div>

                <div className="bg-primary/10 p-6 rounded-lg space-y-4">
                  <div className="text-center">
                    <h3 className="font-bold text-xl mb-2">Физическая формула</h3>
                    <p className="text-3xl font-mono text-primary mb-2">{currentEvidence.formula}</p>
                    <p className="text-sm text-muted-foreground">{currentEvidence.calculation}</p>
                  </div>
                  
                  <div className="bg-background p-4 rounded-lg">
                    <p className="font-semibold mb-1">Практический результат:</p>
                    <p className="text-lg">{currentEvidence.result}</p>
                  </div>
                </div>

                <div className="flex gap-4 justify-center pt-4">
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleVote('prosecutor')}
                    className="flex-1 max-w-xs border-accent text-accent hover:bg-accent hover:text-white"
                  >
                    <Icon name="ThumbsDown" className="mr-2" />
                    Обвинение право
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleVote('defense')}
                    className="flex-1 max-w-xs border-secondary text-secondary hover:bg-secondary hover:text-white"
                  >
                    <Icon name="ThumbsUp" className="mr-2" />
                    Защита права
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {currentTab === 'game' && gameStarted && isGameFinished && (
          <div className="space-y-6 animate-fade-in">
            <Card className="border-primary/50">
              <CardHeader>
                <div className="text-center">
                  <Icon name="Scale" className="text-primary mx-auto mb-4" size={64} />
                  <CardTitle className="text-4xl mb-4">Судебный вердикт</CardTitle>
                  <CardDescription className="text-lg">
                    Судья Ньютон выносит окончательное решение
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className={`p-6 rounded-lg ${winner === 'prosecutor' ? 'bg-accent/20 border-2 border-accent' : 'bg-muted'}`}>
                    <div className="text-center">
                      <Icon name="AlertTriangle" className="text-accent mx-auto mb-2" size={40} />
                      <h3 className="font-bold text-xl mb-2">Обвинение</h3>
                      <p className="text-4xl font-bold text-accent">{prosecutorScore}</p>
                      {winner === 'prosecutor' && <Badge className="mt-2">Победитель</Badge>}
                    </div>
                  </div>
                  <div className={`p-6 rounded-lg ${winner === 'defense' ? 'bg-secondary/20 border-2 border-secondary' : 'bg-muted'}`}>
                    <div className="text-center">
                      <Icon name="Shield" className="text-secondary mx-auto mb-2" size={40} />
                      <h3 className="font-bold text-xl mb-2">Защита</h3>
                      <p className="text-4xl font-bold text-secondary">{defenseScore}</p>
                      {winner === 'defense' && <Badge className="mt-2">Победитель</Badge>}
                    </div>
                  </div>
                </div>

                <div className="p-8 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4 text-center">Решение суда</h3>
                  <p className="text-lg leading-relaxed mb-4">
                    После тщательного рассмотрения всех доказательств, суд постановляет:
                  </p>
                  <p className="text-xl font-bold mb-4 text-center text-primary">
                    {winner === 'defense' 
                      ? '⚖️ Сила трения ОПРАВДАНА! Польза превышает вред.'
                      : '⚖️ Сила трения признана ПРОБЛЕМНОЙ, но необходимой.'}
                  </p>
                  <p className="text-lg leading-relaxed">
                    Независимо от вердикта, истина такова: <strong>сила трения — это фундаментальное явление природы</strong>, 
                    которое невозможно отменить. Наша задача — не бороться с ней, а научиться использовать её 
                    преимущества и минимизировать недостатки через инженерные решения и научный прогресс.
                  </p>
                </div>

                <div className="flex gap-4 justify-center">
                  <Button 
                    size="lg" 
                    onClick={() => {
                      setGameStarted(false);
                      setCurrentStage(0);
                      setProsecutorScore(0);
                      setDefenseScore(0);
                    }}
                  >
                    <Icon name="RotateCcw" className="mr-2" />
                    Начать заново
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    onClick={() => setCurrentTab('theory')}
                  >
                    <Icon name="BookOpen" className="mr-2" />
                    Изучить теорию
                  </Button>
                </div>
              </CardContent>
            </Card>
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
