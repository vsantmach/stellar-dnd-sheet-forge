import { ClassFeature, SubclassFeature } from '../types';

export const artificerFeatures: ClassFeature[] = [
  {
    id: 'magicalTinkering',
    name: 'Engenhoca Mágica',
    description: 'No 1º nível, você aprendeu como investir uma fagulha de magia em objetos mundanos.',
    level: 1,
  },
  {
    id: 'spellcasting',
    name: 'Conjuração',
    description: 'Você estudou os trabalhos da magia e como canalizá-la através de objetos.',
    level: 1,
  },
  {
    id: 'artificerSpecialist',
    name: 'Especialista em Artífice',
    description: 'No 3º nível, você escolhe o tipo de especialista que você é.',
    level: 3,
  },
  {
    id: 'theRightToolForTheJob',
    name: 'A Ferramenta Certa para o Trabalho',
    description: 'No 6º nível, você pode conjurar a magia detect magic e identify sem gastar um espaço de magia.',
    level: 6,
  },
  {
    id: 'magicItemSavant',
    name: 'Erudito em Itens Mágicos',
    description: 'No 14º nível, sua perícia com itens mágicos se aprofunda mais.',
    level: 14,
  },
  {
    id: 'magicItemMaster',
    name: 'Mestre em Itens Mágicos',
    description: 'A partir do 18º nível, você pode sintonizar até seis itens mágicos ao mesmo tempo.',
    level: 18,
  },
  {
    id: 'soulOfArtifice',
    name: 'Alma do Artífice',
    description: 'No 20º nível, você desenvolveu uma conexão mística com seus itens mágicos.',
    level: 20,
  }
];

export const artificerSubclasses: Record<string, SubclassFeature[]> = {
  'Alquimista': [
    {
      name: 'Conjuração de Alquimista',
      description: 'A partir do 3º nível, você sempre tem certas magias preparadas depois de alcançar níveis particulares nesta classe.',
      level: 3,
      subclass: 'Alquimista'
    },
    {
      name: 'Elixir Experimental',
      description: 'Começando no 3º nível, sempre que você terminar um descanso longo, você pode produzir magicamente um elixir experimental em um frasco vazio que você toca.',
      level: 3,
      subclass: 'Alquimista',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Alquimia Restaurativa',
      description: 'A partir do 5º nível, você pode incorporar ingredientes restauradores em alguns de seus trabalhos.',
      level: 5,
      subclass: 'Alquimista'
    },
    {
      name: 'Maestria Química',
      description: 'No 9º nível, você ganha resistência a dano ácido e de veneno, e você ganha imunidade à condição envenenado.',
      level: 9,
      subclass: 'Alquimista'
    },
    {
      name: 'Elixir Restaurativo',
      description: 'A partir do 15º nível, você pode produzir elixires experimentais mais potentes.',
      level: 15,
      subclass: 'Alquimista'
    }
  ],

  'Artilheiro': [
    {
      name: 'Conjuração de Artilheiro',
      description: 'A partir do 3º nível, você sempre tem certas magias preparadas depois de alcançar níveis particulares nesta classe.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Torre Élfica',
      description: 'No 3º nível, você aprendeu como criar uma Torre Élfica temporária.',
      level: 3,
      subclass: 'Artilheiro',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Canhão Arcano',
      description: 'No 5º nível, você conhece como dar forma à energia mágica bruta em um canhão devastador.',
      level: 5,
      subclass: 'Artilheiro'
    },
    {
      name: 'Torre Protetora',
      description: 'A partir do 9º nível, você pode aprimorar uma Torre Élfica ou Canhão Arcano com capacidades protetoras.',
      level: 9,
      subclass: 'Artilheiro'
    },
    {
      name: 'Força Devastadora',
      description: 'A partir do 15º nível, você pode canalizar energia mágica em seus ataques.',
      level: 15,
      subclass: 'Artilheiro'
    }
  ],

  'Armeiro': [
    {
      name: 'Conjuração de Armeiro',
      description: 'A partir do 3º nível, você sempre tem certas magias preparadas depois de alcançar níveis particulares nesta classe.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Modelo de Armadura Arcana',
      description: 'Começando no 3º nível, você pode personalizar sua armadura para uso especial.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Arma Arcana Extra',
      description: 'A partir do 5º nível, você pode atacar duas vezes, em vez de uma, sempre que você realizar a ação Atacar no seu turno.',
      level: 5,
      subclass: 'Armeiro'
    },
    {
      name: 'Modificação de Armadura',
      description: 'No 9º nível, você aprende como usar sua perícia em artífice para modificar a armadura de Modelo de Armadura Arcana.',
      level: 9,
      subclass: 'Armeiro'
    },
    {
      name: 'Armadura Perfeccionada',
      description: 'No 15º nível, sua Armadura Arcana ganha benefícios adicionais baseados em seu modelo.',
      level: 15,
      subclass: 'Armeiro'
    }
  ]
};

export const artificerAvailableSubclasses = [
  'Alquimista',
  'Artilheiro',
  'Armeiro'
];