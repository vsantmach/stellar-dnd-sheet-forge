
import { SubclassFeature } from '../types';

export const artificerSubclasses: Record<string, SubclassFeature[]> = {
  'Alquimista': [
    {
      name: 'Proficiência com Ferramentas',
      description: 'Você ganha proficiência com suprimentos de alquimista. Se já possui essa proficiência, ganha proficiência com outro tipo de ferramentas de artesão à sua escolha.',
      level: 3,
      subclass: 'Alquimista'
    },
    {
      name: 'Magias de Alquimista',
      description: 'Você sempre tem certas magias preparadas que não contam contra o número de magias que pode preparar.',
      level: 3,
      subclass: 'Alquimista'
    },
    {
      name: 'Elixir Experimental',
      description: 'Sempre que terminar um descanso longo, pode produzir um elixir experimental em um frasco vazio que toca.',
      level: 3,
      subclass: 'Alquimista',
      uses: { max: 1, rechargeOn: 'long' }
    },
    {
      name: 'Cura Alquímica',
      description: 'Pode usar sua ação para produzir um elixir de cura experimental e administrá-lo a uma criatura a até 1,5 metros.',
      level: 5,
      subclass: 'Alquimista',
      uses: { max: 1, rechargeOn: 'long' }
    }
  ],

  'Armeiro': [
    {
      name: 'Proficiência com Ferramentas',
      description: 'Você ganha proficiência com ferramentas de ferreiro. Se já possui essa proficiência, ganha proficiência com outro tipo de ferramentas de artesão.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Magias de Armeiro',
      description: 'Você sempre tem certas magias preparadas que não contam contra o número de magias que pode preparar.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Modelo de Armadura Arcana',
      description: 'Pode usar suas ferramentas de ferreiro para criar uma armadura arcana mágica. Escolha entre Guardião ou Infiltrador.',
      level: 3,
      subclass: 'Armeiro'
    },
    {
      name: 'Ataque Extra',
      description: 'Pode atacar duas vezes, em vez de uma, sempre que realizar a ação Atacar em seu turno.',
      level: 5,
      subclass: 'Armeiro'
    }
  ],

  'Artilheiro': [
    {
      name: 'Proficiência com Ferramentas',
      description: 'Você ganha proficiência com ferramentas de madeireiro. Se já possui essa proficiência, ganha proficiência com outro tipo de ferramentas de artesão.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Magias de Artilheiro',
      description: 'Você sempre tem certas magias preparadas que não contam contra o número de magias que pode preparar.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Eldritch Cannons',
      description: 'Você aprende como criar canhões eldríticos mágicos. Em seu turno, pode usar uma ação bônus para ativar um canhão.',
      level: 3,
      subclass: 'Artilheiro'
    },
    {
      name: 'Canhão Arcano',
      description: 'Seus canhões eldríticos ganham mais poder. Você também pode usar sua ação para ativar todos os seus canhões.',
      level: 5,
      subclass: 'Artilheiro'
    }
  ]
};

export const artificerAvailableSubclasses = ['Alquimista', 'Armeiro', 'Artilheiro'];
