export const warlockSubclasses: Record<string, SubclassFeature[]> = {
  // ... outras subclasses já existentes ...

  'Lâmina Maldita': [
    {
      name: 'Mestre das Armas Malditas',
      description: 'Você ganha proficiência com armas médias e pesadas. Pode conjurar magias através de sua arma amaldiçoada.',
      level: 1,
      subclass: 'Lâmina Maldita'
    },
    {
      name: 'Maldição da Lâmina',
      description: 'Como ação bônus, amaldiçoe uma criatura para causar dano extra, curar-se ao derrotá-la e aumentar sua chance de acerto crítico.',
      level: 1,
      subclass: 'Lâmina Maldita',
      uses: { max: 1, rechargeOn: 'short' }
    },
    {
      name: 'Assombração da Lâmina',
      description: 'No 6º nível, como reação, fique invisível até o fim do turno após ser atingido por um ataque.',
      level: 6,
      subclass: 'Lâmina Maldita',
      uses: { max: 1, rechargeOn: 'short' }
    },
    {
      name: 'Ataque Fantasmagórico',
      description: 'No 10º nível, seus ataques ignoram resistência a dano não-mágico e você pode atravessar inimigos com facilidade.',
      level: 10,
      subclass: 'Lâmina Maldita'
    },
    {
      name: 'Mestre da Lâmina',
      description: 'No 14º nível, pode se teleportar e realizar ataques adicionais como parte da maldição.',
      level: 14,
      subclass: 'Lâmina Maldita'
    }
  ],

  'O Celestial': [
    {
      name: 'Luz Curativa',
      description: 'Você obtém um reservatório de cura que pode gastar como ação bônus em criaturas a até 9 metros.',
      level: 1,
      subclass: 'O Celestial'
    },
    {
      name: 'Resiliência Radiante',
      description: 'A partir do 6º nível, você recupera PV adicionais ao fazer descanso curto.',
      level: 6,
      subclass: 'O Celestial'
    },
    {
      name: 'Escudo de Luz',
      description: 'No 10º nível, ao sofrer dano, você pode conceder resistência a dano radiante ou de fogo a si mesmo ou a um aliado próximo.',
      level: 10,
      subclass: 'O Celestial'
    },
    {
      name: 'Chama Celestial',
      description: 'No 14º nível, você irradia uma aura que causa dano radiante e cura aliados ao redor.',
      level: 14,
      subclass: 'O Celestial'
    }
  ],

  'Talismã Misterioso': [
    {
      name: 'Talismã Protetor',
      description: 'Você recebe um talismã que concede bônus em testes de habilidade falhos e permite comunicação mística com quem o toca.',
      level: 1,
      subclass: 'Talismã Misterioso'
    },
    {
      name: 'Salvaguarda do Talismã',
      description: 'A partir do 6º nível, o portador do talismã pode adicionar 1d4 a testes de resistência falhos.',
      level: 6,
      subclass: 'Talismã Misterioso'
    },
    {
      name: 'Chamado do Talismã',
      description: 'No 10º nível, o portador pode se teleportar como reação para o local do talismã.',
      level: 10,
      subclass: 'Talismã Misterioso'
    },
    {
      name: 'Refúgio Espiritual',
      description: 'No 14º nível, ao falhar num teste de resistência, o portador pode evitar o efeito e se teletransportar para segurança.',
      level: 14,
      subclass: 'Talismã Misterioso'
    }
  ]
};

export const warlockAvailableSubclasses = [
  'O Arquifada',
  'O Corruptor',
  'O Grande Antigo',
  'O Infernal',
  'Lâmina Maldita',
  'O Celestial',
  'Talismã Misterioso'
];
