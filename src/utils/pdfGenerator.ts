
import jsPDF from 'jspdf';

interface Character {
  id: string;
  name: string;
  class: string;
  level: number;
  race: string;
}

export const generateCharacterPDF = (character: Character) => {
  const pdf = new jsPDF();
  
  // Título
  pdf.setFontSize(20);
  pdf.text('FICHA D&D 5.5', 20, 20);
  
  // Informações básicas do personagem
  pdf.setFontSize(16);
  pdf.text(`Nome: ${character.name}`, 20, 40);
  pdf.text(`Classe: ${character.class}`, 20, 50);
  pdf.text(`Raça: ${character.race}`, 20, 60);
  pdf.text(`Nível: ${character.level}`, 20, 70);
  
  // Seções da ficha
  pdf.setFontSize(14);
  pdf.text('ATRIBUTOS', 20, 90);
  pdf.text('Força: ___', 20, 105);
  pdf.text('Destreza: ___', 20, 115);
  pdf.text('Constituição: ___', 20, 125);
  pdf.text('Inteligência: ___', 20, 135);
  pdf.text('Sabedoria: ___', 20, 145);
  pdf.text('Carisma: ___', 20, 155);
  
  pdf.text('VIDA E DEFESA', 110, 90);
  pdf.text('Pontos de Vida: ___', 110, 105);
  pdf.text('Classe de Armadura: ___', 110, 115);
  pdf.text('Iniciativa: ___', 110, 125);
  pdf.text('Velocidade: ___', 110, 135);
  
  pdf.text('PERÍCIAS', 20, 175);
  const skills = [
    'Acrobacia', 'Arcanismo', 'Atletismo', 'Atuação', 'Blefar',
    'Furtividade', 'História', 'Intimidação', 'Intuição', 'Investigação'
  ];
  
  skills.forEach((skill, index) => {
    const x = 20 + (index % 2) * 90;
    const y = 190 + Math.floor(index / 2) * 10;
    pdf.text(`${skill}: ___`, x, y);
  });
  
  // Salvar o PDF
  pdf.save(`ficha-${character.name.toLowerCase().replace(/\s+/g, '-')}.pdf`);
};
