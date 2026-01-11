import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const TheoryTab = () => {
  return (
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
  );
};

export default TheoryTab;
