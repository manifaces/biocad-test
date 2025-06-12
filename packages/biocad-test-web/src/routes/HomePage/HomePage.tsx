import { Button, Input, ThemeToggleButton } from '@biocad-test/ui';
import s from './HomePage.module.scss';
import { useState } from 'react';

export function HomePage() {
  const [value, setValue] = useState('');

  return (
    <section className={s.HomePage}>
      <div>HomePage</div>
      <ThemeToggleButton />
      <Button>Создать</Button>
      <Input value={value} onChange={setValue} placeholder="Тест" />
    </section>
  );
}
