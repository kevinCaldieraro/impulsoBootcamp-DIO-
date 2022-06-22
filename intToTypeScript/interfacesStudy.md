```typescript
interface Ianimal {
  name: string;
  type: 'land' | 'aquatic';
  pet: boolean;
  speak(sound: string): void;
}

interface Ifeline extends Ianimal {
  nightVision: boolean;
}

const animal: Ianimal = {
  name: 'elefant',
  type: 'land',
  pet: false,
  speak: sound => sound
};

const feline: Ifeline = {
  name: 'lion',
  type: 'land',
  nightVision: true,
  pet: false,
  speak: sound => sound
};
```
